"use client";

import { useEffect, useRef, useState } from "react";

import Ticker from "@/components/Ticker";
import Logo from "@/components/Logo";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const [username] = useState(
    `guest${Math.floor(100 + Math.random() * 900)}`
  );

  const bottomRef = useRef<HTMLDivElement | null>(null);

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

      {/* Top Ticker */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Ticker direction="left" />
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Ticker direction="right" />
      </div>

      {/* Main Layout */}
      <div className="relative z-20 h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* STREAM */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">

              {/* Replace VIDEO_ID with your livestream ID */}
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* CHAT */}
          <div className="h-[70vh] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col">

            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10">
              <h2 className="font-space font-semibold tracking-wide">
                LIVE CHAT
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className="text-sm break-words">
                  <span className="font-bold font-space">
                    {msg.username}
                  </span>
                  : {msg.message}
                </div>
              ))}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="say something..."
                className="flex-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none font-space"
              />

              <button
                onClick={sendMessage}
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold font-space"
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
