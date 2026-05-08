"use client"

import { useState } from "react"

export default function FooterThing({
  className = "",
}: {
  className?: string
}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail("")
      }
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <p className="font-space text-[#FFFFFF] animate-pulse font-semibold">
        nicely done.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col items-center gap-6 ${className}`}
    >
      <div className="space-y-2">
        <p className="font-space lowercase text-[#FFFFFF] font-semibold">
          btw nothing here is useful. but maybe we'll send something back.
        </p>
      </div>

      <div className="group relative">
        <input
          type="email"
          required value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="type email here"
          className="
            bg-transparent
            border-b
            border-black/20
            focus:border-black
            outline-none
            px-2
            py-2
            text-center
            font-space
            placeholder:text-black/20
            transition-all
            duration-300
            min-w-[480px]
          "
        />

        {/* weird glitch submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            absolute
            w-20
            h-20
            -right-18
            top-1/2
            -translate-y-1/2
            opacity-09
            hover:opacity-40
            hover:scale-110
            active:scale-90
            duration-150
            font-space
          "
        >
          {loading ? (
            <span className="text-xs font-space">...</span>) : (
              <img
                src="/chichi.png"
                alt="submit"
                className="w-4 h-4 object-contain"
            />
        )}
        </button>
      </div>
    </form>
  )
}
