"use client"

import { useEffect, useState, useRef } from "react"

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
}

export default function StatsCounter({ value, suffix = "", label, duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateValue(0, value, duration)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [value, duration])

  const animateValue = (start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = Math.floor(progress * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  return (
    <div ref={countRef} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-sky-500">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 mt-2 text-sm md:text-base">{label}</div>
    </div>
  )
}
