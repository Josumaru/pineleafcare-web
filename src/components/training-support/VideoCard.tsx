"use client";
import { Play } from "lucide-react";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

interface Props {
  url: string;
}

const VideoCard: NextPage<Props> = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && playing) {
      videoRef.current.play()
    } else if(videoRef.current && !playing){
      videoRef.current.pause()
    }
  }, [playing])

  return (
    <div className="relative w-full h-full aspect-square" onClick={()=>setPlaying(!playing)}>
      <video
        className="w-full h-full object-cover rounded-xl overflow-hidden absolute"
        ref={videoRef}
      >
        <source
          src={url}
          type="video/mp4"
        />
      </video>
      <div className="absolute w-full h-full flex items-center justify-center">
        {!playing && <div className="p-5 rounded-full bg-white hover:bg-[#ffffffb4] ease-in-out duration-200 cursor-pointer">
          <Play className="text-black" />
        </div>}
      </div>
    </div>
  );
};

export default VideoCard;
