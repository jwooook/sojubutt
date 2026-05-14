import Ticker from "@/components/Ticker";
import Logo from "@/components/Logo";

export default function Home() {
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

      {/* Main Content */}
      <div className="relative z-20 h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* STREAM CONTAINER */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">

              {/* Placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <h1 className="font-space text-4xl md:text-6xl font-bold animate-micro-glitch">
                  LIVE SOON
                </h1>
              </div>

              {/* Example iframe later */}
              {/*
              <iframe
                src="YOUR_STREAM_URL"
                className="w-full h-full"
                allowFullScreen
              />
              */}
            </div>
          </div>

          {/* CHAT CONTAINER */}
          <div className="h-[70vh] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
            <div className="px-4 py-3 border-b border-white/10">
              <h2 className="font-space font-semibold tracking-wide">
                LIVE CHAT
              </h2>
            </div>

            <div className="p-4 h-full overflow-y-auto">
              <div className="font-space space-y-4 text-sm text-white/80">
                <p>
                  <span className="font-bold">user1:</span> chichi
                </p>

                <p>
                  <span className="font-bold">user2:</span> stream is
                </p>

                <p>
                  <span className="font-bold">user3:</span> coming soon
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
