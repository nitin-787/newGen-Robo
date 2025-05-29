import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Prabhav Saran",
      grade: "Grade 8",
      message:
        "New-gen Robo helped me turn my curiosity into real skills. I’ve built a smart traffic light system using coding and sensors—it’s been so exciting!",
    },
    {
      name: "Sumit Saini",
      grade: "Grade 7",
      message:
        "Before joining, I barely knew what programming was. Now, I’ve made a game all by myself! Learning here is super fun and creative.",
    },
    {
      name: "Gaurav",
      grade: "Grade 6",
      message:
        "At first, coding looked really hard, but the mentors at New-gen Robo made it simple and fun. I created a robot that follows light—how cool is that?",
    },
    {
      name: "Laltesh Chahar",
      grade: "Grade 6",
      message:
        "I used to play games, now I make them! Thanks to New-gen Robo, I built a maze game that my friends love. I never knew I could do this at my age.",
    },
    {
      name: "Vikram Saini",
      grade: "Grade 6",
      message:
        "Learning robotics at New-gen Robo has been the best part of my week. I recently made a smart dustbin that opens with a hand wave!",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      scrollToIndex(nextIndex);
      setActiveIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
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
    <motion.section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-sky-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=50&width=50&text=S${i + 1}`}
                    alt="Student"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.grade}</p>
                </div>
              </div>
              <p className="text-gray-700">"{item.message}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="w-full shrink-0 snap-center bg-sky-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&text=S${i + 1}`}
                      alt="Student"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.grade}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{item.message}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-3 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIndex ? "bg-sky-600 scale-110" : "bg-sky-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
