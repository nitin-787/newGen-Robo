"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function StudentParentShowcase() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Hear what our Students & Parents have to say...
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Top grid with videos */}
            <div>
              {/* For larger screens - grid layout */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "/assets/videos/promo-vid-1.mp4",
                  "/assets/videos/promo-vid-2.mp4",
                  "/assets/videos/promo-vid-3.mp4",
                  "/assets/videos/promo-vid-3.mp4",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl shadow-lg overflow-hidden"
                  >
                    <video
                      src={src}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* For smaller screens - horizontal scroll */}
              <div className="sm:hidden flex gap-4 overflow-x-auto pb-2">
                {[
                  "/assets/videos/promo-vid-1.mp4",
                  "/assets/videos/promo-vid-2.mp4",
                  "/assets/videos/promo-vid-3.mp4",
                  "/assets/videos/promo-vid-3.mp4",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="min-w-[280px] aspect-video rounded-xl shadow-lg overflow-hidden"
                  >
                    <video
                      src={src}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom grid with photos */}
            <div className="mt-12">
              {/* For larger screens */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={`/placeholder.svg?height=200&width=300&text=${img}`}
                      alt={`Event ${i + 1}`}
                      width={300}
                      height={200}
                      className="rounded-xl shadow-md object-cover w-full h-48"
                    />
                  )
                )}
              </div>

              {/* For smaller screens */}
              <div className="sm:hidden flex gap-4 overflow-x-auto pb-2">
                {["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"].map(
                  (img, i) => (
                    <div key={i} className="min-w-[280px] h-48 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=${img}`}
                        alt={`Event ${i + 1}`}
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
