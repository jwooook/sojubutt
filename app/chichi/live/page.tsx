"use client";

import { useEffect, useRef, useState } from "react";

import Ticker from "@/components/Ticker";
import Logo from "@/components/Logo";
import { supabase } from "@/lib/supabase";
import Chinifesto from "@/components/Chinifesto";

export default function Home() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const [username] = useState(
    `guest${Math.floor(100 + Math.random() * 900)}`
  );

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // TRACK LIVE VIEWERS
  useEffect(() => {
    const viewerId =
      localStorage.getItem("viewer-id") ||
      crypto.randomUUID();

    localStorage.setItem("viewer-id", viewerId);

    const presenceChannel = supabase.channel(
      "live-viewers",
      {
        config: {
          presence: {
            key: viewerId,
          },
        },
      }
    );

    presenceChannel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await presenceChannel.track({
          online_at: new Date().toISOString(),
        });
      }
    });

    return () => {
      supabase.removeChannel(presenceChannel);
    };
  }, []);

  // FETCH + SUBSCRIBE TO CHAT
  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => [
            ...prev.slice(-49),
            payload.new,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // AUTO SCROLL CHAT
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function fetchMessages() {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (data) setMessages(data);
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const { data, error } = await supabase
      .from("messages")
      .insert([
        {
          username,
          message: input,
        },
      ])
      .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    setInput("");
  }

  return (
    <main className="relative text-white min-h-screen overflow-hidden bg-[#e10600]">

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20">
        <Logo />
      </div>

      {/* CHINIFESTO */}
      <div
        className="
          absolute
          top-4
          left-4
          md:top-4
          md:left-6
          z-40
          sm:w-[300px]
          md:w-[460px]
          pointer-events-auto
        "
      >
        <Chinifesto />
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Ticker direction="right" />
      </div>

      {/* Main Layout */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20 md:px-6">

        <div className="w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-3 gap-4 md:gap-6">

          {/* STREAM */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">

              <iframe
                src="https://youtube.com/embed/IMMY_8Auam8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* CHAT */}
          <div
            className="
              h-[55vh]
              md:h-[60vh]
              lg:h-[70vh]
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              overflow-hidden
              shadow-2xl
              flex
              flex-col
            "
          >

            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 shrink-0">
              <h2 className="font-space font-semibold tracking-wide text-sm md:text-base">
                LIVE CHAT
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="text-xs md:text-sm break-words leading-relaxed"
                >
                  <span className="font-bold font-space">
                    {msg.username}
                  </span>
                  : {msg.message}
                </div>
              ))}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="
                p-3
                md:p-4
                border-t
                border-white/10
                flex
                gap-2
                shrink-0
              "
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="say something..."
                className="
                  flex-1
                  min-w-0
                  bg-black/30
                  border
                  border-white/10
                  rounded-lg
                  px-3
                  py-2
                  outline-none
                  font-space
                  text-sm
                "
              />

              <button
                onClick={sendMessage}
                className="
                  px-3
                  md:px-4
                  py-2
                  rounded-lg
                  bg-white
                  text-black
[118;1:3u                  font-semibold
                  font-space
                  text-sm
                  shrink-0
                "
              >
                send
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
