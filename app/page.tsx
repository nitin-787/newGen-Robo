import Image from "next/image";
import Link from "next/link";
import { PhoneIcon as WhatsappIcon } from "lucide-react";
import RequestDemoForm from "@/components/request-demo-form";
import Navigation from "@/components/navigation";
import InnovationLabShowCase from "@/components/innovation-lab-show-case";
import ProgramCard from "@/components/program-card";
import programs from "@/data/programs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Navigation />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
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
                href="https://wa.me/1234567890"
                className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full transition-colors"
              >
                <WhatsappIcon size={20} />
                WhatsApp
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
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
      </section>

      {/* innovation lab showcase section */}
      <section className="py-16">
        <InnovationLabShowCase />
      </section>

      {/* Student & Parent Showcase Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Hear what our Students & Parents have to say...
          </h2>

          {/* Top grid with video and quote image */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg"
                alt="Student Parent Feedback"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:col-span-3 grid sm:grid-cols-3 gap-4">
              {[
                "https://www.youtube.com/embed/mBHTXQo65p8?si=6Skd80jMrsTMpwds",
                "https://www.youtube.com/embed/u2Hletfrp94?si=q_Bbt2fJnkPtAJ8_",
                "https://www.youtube.com/embed/eP_0yz605Sw?si=EomOnGfH8VVWo2CG",
              ].map((src, i) => (
                <div key={i} className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={src}
                    title={`Student Video ${i + 1}`}
                    className="rounded-lg w-full h-full"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom grid with event photos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Request Demo Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Request a Free Demo Class
            </h2>
            <RequestDemoForm />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Learning Programs
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                image={program.image}
                description={program.description}
                link={program.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-sky-50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&text=S${item}`}
                      alt="Student"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Student Name</h4>
                    <p className="text-sm text-gray-500">Grade 8</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The learning experience at Youngovator has been amazing. I've
                  learned so much about coding and robotics, and now I'm
                  building my own projects!"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
