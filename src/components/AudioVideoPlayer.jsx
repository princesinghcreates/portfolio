import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function AudioVideoPlayer({ 
  src, 
  poster,
  title, 
  category, 
  aspectRatio = "16/9", 
  loop = true,
  musicCredit,
  className = "" 
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const playerId = useRef(src || Math.random().toString()).current;

  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isManualPlay, setIsManualPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // unmuted so it plays with sound on hover
  const [volume, setVolume] = useState(0.85);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [durationTime, setDurationTime] = useState("0:00");
  const [showControls, setShowControls] = useState(false);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Listen for global event to pause when another video plays (only 1 video at a time)
  useEffect(() => {
    const handleStopOther = (e) => {
      if (e.detail?.id !== playerId) {
        const video = videoRef.current;
        if (video && !video.paused) {
          video.pause();
        }
        setIsPlaying(false);
        setIsManualPlay(false);
        setShowControls(false);
      }
    };

    window.addEventListener('app:stopOtherVideos', handleStopOther);
    return () => {
      window.removeEventListener('app:stopOtherVideos', handleStopOther);
    };
  }, [playerId]);

  // Lazy load video only when approaching viewport to maximize loading performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        const video = videoRef.current;
        if (!video) return;

        // If scrolled completely out of view, pause immediately
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
          setIsManualPlay(false);
        }
      },
      { rootMargin: '150px 0px', threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Synchronize video element event listeners and properties
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    video.volume = volume;
    video.muted = isMuted;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(formatTime(video.currentTime));
      }
    };

    const handleLoadedMetadata = () => {
      setDurationTime(formatTime(video.duration));
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [src, isInView, isMuted, volume]);

  // Hover IN: Start playing immediately with audio & music; stop all other videos
  const handleMouseEnter = async () => {
    // Only trigger hover playback on devices supporting true hover (desktop mice/pointers)
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Immediately stop any other playing video across the site (only 1 video at a time)
    window.dispatchEvent(new CustomEvent('app:stopOtherVideos', { detail: { id: playerId } }));
    setShowControls(true);

    try {
      video.muted = false;
      video.volume = volume > 0 ? volume : 0.85;
      setIsMuted(false);
      await video.play();
      setIsPlaying(true);
    } catch (err) {
      // If browser restricts unmuted autoplay before any user gesture, fall back to muted
      // and attach one-time user gesture listener to immediately unmute
      try {
        video.muted = true;
        setIsMuted(true);
        await video.play();
        setIsPlaying(true);

        const enableAudioOnGesture = () => {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.muted = false;
            videoRef.current.volume = volume > 0 ? volume : 0.85;
            setIsMuted(false);
          }
          window.removeEventListener('click', enableAudioOnGesture);
          window.removeEventListener('keydown', enableAudioOnGesture);
        };
        window.addEventListener('click', enableAudioOnGesture, { once: true });
        window.addEventListener('keydown', enableAudioOnGesture, { once: true });
      } catch (e) {
        setIsPlaying(false);
      }
    }
  };

  // Hover OUT: Stop playing immediately the moment mouse leaves the container
  const handleMouseLeave = () => {
    setShowControls(false);
    setIsManualPlay(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  };

  // Click/Tap toggle: Play with sound and pause any other playing videos
  const togglePlayWithAudio = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying && !video.paused) {
      video.pause();
      setIsPlaying(false);
      setIsManualPlay(false);
    } else {
      window.dispatchEvent(new CustomEvent('app:stopOtherVideos', { detail: { id: playerId } }));

      try {
        video.muted = false;
        video.volume = volume > 0 ? volume : 0.85;
        setIsMuted(false);
        setIsManualPlay(true);
        await video.play();
        setIsPlaying(true);
        setShowControls(true);
      } catch (err) {
        try {
          video.muted = true;
          setIsMuted(true);
          await video.play();
          setIsPlaying(true);
        } catch (e) {
          setIsPlaying(false);
        }
      }
    }
  };

  const handleContainerClick = (e) => {
    // If click originated from control buttons/sliders, don't trigger container toggle
    if (e.target.closest('button') || e.target.closest('input')) {
      return;
    }
    togglePlayWithAudio();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      window.dispatchEvent(new CustomEvent('app:stopOtherVideos', { detail: { id: playerId } }));
      video.muted = false;
      video.volume = volume > 0 ? volume : 0.85;
      setIsMuted(false);
      setIsManualPlay(true);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setIsManualPlay(true);
      } else if (newVol === 0 && !isMuted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration;
    }
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari WebKit implementation for iPhone / iPad
    if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
      return;
    }

    if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-950 border border-white/[0.08] hover:border-white/25 transition-all duration-500 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
      style={{ aspectRatio }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        poster={poster}
        loop={loop}
        muted={isMuted}
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        className="w-full h-full object-cover object-center select-none"
      />

      {/* Instant Eye-Catching Thumbnail Poster Overlay (Displayed prior to hover/play) */}
      {poster && !isPlaying && (
        <img
          src={poster}
          alt={title || "Video thumbnail"}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300 z-0"
          loading="lazy"
        />
      )}

      {/* Top Floating Badge: Category & Sound Status (Clean, no 'hover for sound' text) */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        {category && (
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-300">
            {category}
          </span>
        )}

        {isPlaying && !isMuted && (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono uppercase tracking-widest text-emerald-400 shadow-lg">
            <Volume2 className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>Sound On</span>
          </span>
        )}
      </div>

      {/* Center Clean Play Icon (Visible only when completely paused, smoothly fades out on hover/play) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 bg-black/20">
          <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
      )}

      {/* Bottom Glassmorphism Control Bar */}
      <div 
        className={`absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 sm:opacity-0 group-hover:opacity-100'
        }`}
      >
        {/* Scrubber Progress Bar */}
        <div className="mb-3">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>

        <div className="flex items-center justify-between gap-3 text-white">
          {/* Left Controls: Play/Pause, Sound Toggle & Volume Slider */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlayWithAudio();
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              title={isPlaying && !isMuted ? "Pause Audio" : "Play with Audio"}
            >
              {isPlaying && !isMuted ? (
                <Pause className="w-4 h-4 fill-white" />
              ) : (
                <Play className="w-4 h-4 fill-white pl-0.5" />
              )}
            </button>

            {/* Audio Toggle & Volume Slider */}
            <div className="flex items-center gap-2 group/vol">
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-neutral-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 sm:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
              />
            </div>

            {/* Time Stamp */}
            <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline-block">
              {currentTime} / {durationTime}
            </span>
          </div>

          {/* Right Controls: Title / Music Info & Fullscreen */}
          <div className="flex items-center gap-3">
            {musicCredit && (
              <span className="text-[11px] font-mono text-neutral-400 hidden md:inline-block max-w-[200px] truncate">
                🎵 {musicCredit}
              </span>
            )}

            <button
              onClick={toggleFullScreen}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
