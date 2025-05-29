import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function StudentParentShowcase() {
  const [loading, setLoading] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const photoScrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    "https://www.youtube.com/embed/mBHTXQo65p8?autoplay=1&mute=1&loop=1&playlist=mBHTXQo65p8",
    "https://www.youtube.com/embed/Gzz7at1p4rs?autoplay=1&mute=1&loop=1&playlist=Gzz7at1p4rs",
    "https://www.youtube.com/embed/XAYhNHhxN0A?autoplay=1&mute=1&loop=1&playlist=XAYhNHhxN0A",
    "https://www.youtube.com/embed/LJzp_mDxaT0?autoplay=1&mute=1&loop=1&playlist=LJzp_mDxaT0",
  ];

  const photos = [
    "/assets/images/slider-img-1.jpeg",
    // "/assets/images/slider-img-2.jpeg",
    "/assets/images/slider-img-3.jpeg",
    "/assets/images/slider-img-4.jpeg",
    // "/assets/images/slider-img-5.jpeg",
    "/assets/images/slider-img-6.jpeg",
  ];


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = videoScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveVideoIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = photoScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActivePhotoIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeVideoIndex + 1) % videos.length;
      scrollToIndex(videoScrollRef, nextIndex);
      setActiveVideoIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeVideoIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activePhotoIndex + 1) % photos.length;
      scrollToIndex(photoScrollRef, nextIndex);
      setActivePhotoIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activePhotoIndex]);

  const scrollToIndex = (
    ref: React.RefObject<HTMLDivElement>,
    index: number
  ) => {
    const container = ref.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
  };

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
            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {videos.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl shadow-md overflow-hidden"
                  >
                    <iframe
                      src={src}
                      title={`YouTube video ${i + 1}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {photos.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl shadow-md overflow-hidden relative w-full aspect-[5/5] bg-white"
                  >
                    <Image
                      src={src}
                      alt={`Event ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
              {/* Video Slider */}
              <div
                ref={videoScrollRef}
                className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
              >
                {videos.map((src, i) => (
                  <div
                    key={i}
                    className="min-w-[85%] h-60 rounded-xl shadow-md overflow-hidden snap-center shrink-0 aspect-video"
                  >
                    <iframe
                      src={src}
                      title={`YouTube video ${i + 1}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(videoScrollRef, i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === activeVideoIndex
                        ? "bg-sky-600 scale-110"
                        : "bg-sky-300"
                    }`}
                  />
                ))}
              </div>

              {/* Photo Slider */}
              <div
                ref={photoScrollRef}
                className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory no-scrollbar mt-4"
              >
                {photos.map((src, i) => (
                  <div
                    key={i}
                    className="min-w-[70%] sm:min-w-[300px] h-96 rounded-2xl shadow-lg overflow-hidden snap-center shrink-0"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={`Event ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(photoScrollRef, i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === activePhotoIndex
                        ? "bg-sky-600 scale-110"
                        : "bg-sky-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
