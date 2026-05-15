"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function OverlayPage() {
  const [uptime, setUptime] = useState("00:00:00");
  const [viewerCount, setViewerCount] = useState(0);

  // STREAM UPTIME
  useEffect(() => {
    // SET YOUR STREAM START TIME HERE
    const streamStart = new Date(
      "2026-05-14T20:00:00+09:00"
    ).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = now - streamStart;

      const hours = String(
        Math.floor(diff / 3600000)
      ).padStart(2, "0");

      const minutes = String(
        Math.floor(diff / 60000) % 60
      ).padStart(2, "0");

      const seconds = String(
        Math.floor(diff / 1000) % 60
      ).padStart(2, "0");

      setUptime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // LIVE VIEWER COUNT
  useEffect(() => {
    const channel = supabase.channel("live-viewers");

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();

        setViewerCount(Object.keys(state).length);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          // overlay joins silently so sync works properly
          await channel.track({
            overlay: true,
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <main className="w-screen h-screen bg-transparent overflow-hidden pointer-events-none">

      {/* UPTIME */}
      <div className="absolute top-6 left-6">
        <div
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "28px",
            letterSpacing: "0.15em",
            color: "white",
            background: "rgba(0,0,0,0.35)",
            padding: "12px 18px",
            borderRadius: "14px",
            backdropFilter: "blur(12px)",
          }}
        >
          UPTIME {uptime}
        </div>
      </div>

      {/* VIEWERS */}
      <div className="absolute top-6 right-6">
        <div
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "28px",
            letterSpacing: "0.15em",
            color: "white",
            background: "rgba(0,0,0,0.35)",
            padding: "12px 18px",
            borderRadius: "14px",
            backdropFilter: "blur(12px)",
          }}
        >
          live viewers: {viewerCount}
        </div>
      </div>

    </main>
  );
}
