import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import RequestDemoForm from "@/components/request-demo-form"
import Navigation from "@/components/navigation"
import InnovationLabShowCase from "@/components/innovation-lab-show-case"
import ProgramCard from "@/components/program-card"
import programs from "@/data/programs"

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
                India&apos;s Leading Phygital Learning Platform for Young Innovators
              </h1>
              <p className="text-gray-700 mb-8 max-w-lg">
                If you&apos;re a budding inventor of age 8+ years, we provide the perfect online & offline platform for
                learning new age Tech Skills like Coding, Robotics, Drone, 3D Printing, App & Web development, along
                with Entrepreneurship and Financial Literacy.
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

      {/* Request Demo Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Request a Free Demo Class</h2>
            <RequestDemoForm />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Learning Programs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Students Say</h2>
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
                  "The learning experience at Youngovator has been amazing. I've learned so much about coding and
                  robotics, and now I'm building my own projects!"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Youngovator</h3>
              <p className="text-gray-400 mb-4">India's leading phygital learning platform for young innovators.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-gray-400 hover:text-white">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/school-lab" className="text-gray-400 hover:text-white">
                    School Lab Setup
                  </Link>
                </li>
                <li>
                  <Link href="/center" className="text-gray-400 hover:text-white">
                    Learning Centers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>123 Education Street, Tech City, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@youngovator.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Nitinify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
