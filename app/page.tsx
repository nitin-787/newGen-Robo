"use client";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon as WhatsappIcon } from "lucide-react";
import { motion } from "framer-motion";
import RequestDemoForm from "@/components/request-demo-form";
import Navigation from "@/components/navigation";
import InnovationLabShowCase from "@/components/innovation-lab-show-case";
import ProgramCard from "@/components/program-card";
import programs from "@/data/programs";
import Footer from "@/components/footer";
import StudentParentShowcase from "@/components/student-parent";
import TestimonialScilder from "@/components/testimonial";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Navigation />
        </div>
      </header>

      {/* Hero Section */}
      <motion.section {...fadeInUp} className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-600 mb-2">Welcome to</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                India&apos;s Leading Phygital Learning Platform for Young
                Innovators
              </h1>
              <p className="text-gray-700 mb-8 max-w-lg">
                If you&apos;re a budding inventor of age 8+ years, we provide
                the perfect online & offline platform for learning new age Tech
                Skills like Coding, Robotics, Drone, 3D Printing, App & Web
                development, along with Entrepreneurship and Financial Literacy.
              </p>
              <Link
                href="https://wa.me/9509234130"
                target="_blank"
                className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full transition-colors"
              >
                <WhatsappIcon size={20} />
                WhatsApp
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="/assets/images/hero-image.jpeg"
                  alt="Educational Expert"
                  fill
                  className="object-contain z-10"
                />
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -z-10 opacity-70"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-300 rounded-full -z-10 opacity-70"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-sky-300 rounded-full -z-10 opacity-70"></div>
              </div>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-lg">Educational Expert</h3>
                <p className="text-gray-600">Innovation Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Innovation Lab Showcase */}
      <motion.section {...fadeInUp} className="py-16">
        <InnovationLabShowCase />
      </motion.section>

      {/* Student & Parent Showcase */}

      <StudentParentShowcase></StudentParentShowcase>

      {/* Request Demo Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 bg-gradient-to-b from-white to-sky-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Request a Free Demo Class
            </h2>
            <RequestDemoForm />
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section {...fadeInUp} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Learning Programs
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ProgramCard
                  title={program.title}
                  image={program.image}
                  description={program.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <TestimonialScilder></TestimonialScilder>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
