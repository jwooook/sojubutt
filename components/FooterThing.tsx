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
      <p className="text-xl text-center font-space text-[#FFFFFF] animate-pulse font-semibold">
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
          welcome to the footer page. send us ur email and we will send something back.
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
            text-white
            placeholder:text-white/30
            caret-white
            transition-all
            duration-300
            w-[280px] md:w-[480px]
          "
        />

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
            opacity-05
            hover:opacity-25
            hover:scale-110
            active:scale-90
            duration-150
            font-space
          "
        >
          {loading ? (
            <span className="text-xs font-space text-[#FFFFFF] font-space">loading...</span>) : (
              <img
                src="/chichi.png"
                alt="submit"
                className="w-12 h-12 object-contain"
            />
        )}
        </button>
      </div>
    </form>
  )
}
