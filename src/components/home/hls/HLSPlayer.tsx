import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSPlayerProps {
  src: string; // URL ke file .m3u8
}

const HLSPlayer: React.FC<HLSPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    } else if (video?.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;

    // Fungsi callback untuk Intersection Observer
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video?.play(); // Play video ketika terlihat
        } else {
          video?.pause(); // Pause video ketika keluar viewport
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% elemen harus terlihat
    });

    if (video) {
      observerRef.current.observe(video);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
      <video
        ref={videoRef}
        controls
        muted
        className="w-full h-full object-cover rounded-xl"
      />
  );
};

export default HLSPlayer;
