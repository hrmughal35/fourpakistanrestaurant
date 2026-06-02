"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SoundToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.15;
    }
    if (on) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {});
    }
    setOn(!on);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-deep-black/80 backdrop-blur-xl"
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
    >
      {on ? <Volume2 className="h-4 w-4 text-gold" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  );
}
