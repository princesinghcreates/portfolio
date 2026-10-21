import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';

export default function AudioVideoPlayer({ 
  src, 
  title, 
  category, 
  aspectRatio = "16/9", 
  loop = true,
  musicCredit,
  className = "" 
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  // Preload video frame when near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        const video = videoRef.current;
        if (!video) return;

        // If scrolled away while playing, pause immediately
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { rootMargin: '300px 0px', threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
  }, [src, isInView]);

  // Hover IN: Start playing with audio immediately
  const handleMouseEnter = async () => {
    const video = videoRef.current;
    if (!video) return;
    setShowControls(true);

    try {
      video.muted = false;
      video.volume = volume > 0 ? volume : 0.85;
      setIsMuted(false);
      await video.play();
      setIsPlaying(true);
    } catch (err) {
      // If browser restricts unmuted autoplay before any user gesture, fall back to muted play
      try {
        video.muted = true;
        setIsMuted(true);
        await video.play();
        setIsPlaying(true);
      } catch (e) {
        setIsPlaying(false);
      }
    }
  };

  // Hover OUT: Immediately pause video and stop audio
  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowControls(false);
    video.pause();
    setIsPlaying(false);
  };

  // Click/Tap toggle (especially for mobile touch)
  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        video.muted = false;
        video.volume = volume > 0 ? volume : 0.85;
        setIsMuted(false);
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        video.play();
        setIsPlaying(true);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      video.muted = false;
      video.volume = volume > 0 ? volume : 0.8;
      setIsMuted(false);
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
      onClick={togglePlay}
      style={{ aspectRatio }}
    >
      {/* Video Element (Loaded lazily when scrolled into view, plays with audio on hover) */}
      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        loop={loop}
        playsInline
        preload="metadata"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        className="w-full h-full object-cover object-center select-none"
      />

      {/* Top Floating Badge: Category & Audio Notice */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        {category && (
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-300">
            {category}
          </span>
        )}

        {isPlaying && !isMuted ? (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono uppercase tracking-widest text-emerald-400 shadow-lg">
            <Volume2 className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>Audio Live</span>
          </span>
        ) : (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            <Volume2 className="w-3 h-3 text-neutral-400" />
            <span>Hover for Sound</span>
          </span>
        )}
      </div>

      {/* Center Subtle Hover Indicator (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 bg-black/25">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-wider shadow-2xl group-hover:scale-105 transition-transform">
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Hover to Play ✦ Audio</span>
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
          {/* Left Controls: Play/Pause, Time & Sound */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white pl-0.5" />}
            </button>

            {/* Audio Toggle & Volume Slider */}
            <div className="flex items-center gap-2 group/vol">
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-red-400" />
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
