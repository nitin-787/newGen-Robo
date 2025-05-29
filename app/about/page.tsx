import Navigation from "@/components/navigation";
import Image from "next/image";
import Footer from "@/components/footer";
import WhatsAppFloatingButton from "@/components/whatsapp-floating";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#eaf0fc]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Navigation />
        </div>
      </header>

      {/* Top Half Image */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/lab-banner.jpg"
          alt="Innovation Lab"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Combined Alternating Sections */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-24">
        {/* Section 1: LHS Content, RHS Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At our Innovation Lab, we blend creativity with technology.
              Students gain practical experience through real-world projects
              involving AI, IoT, and robotics. Our labs promote hands-on
              learning, empowering young minds to become future tech leaders.
            </p>
          </div>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
            <Image
              src="/lab-students-1.jpg"
              alt="Students in lab"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2: LHS Image, RHS Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
            <Image
              src="/project-session.jpg"
              alt="Project Session"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Project-Based Learning
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our curriculum is driven by projects. From building smart devices
              to coding AI models, students apply concepts to tangible outputs.
              They learn to collaborate, debug, present, and innovate—skills
              that matter beyond the classroom.
            </p>
          </div>
        </div>

        {/* Section 3: LHS Content, RHS Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Mentorship & Growth
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With guidance from expert mentors, students progress from basics
              to breakthroughs. We host workshops, seminars, and hackathons to
              nurture innovation and leadership in a supportive ecosystem.
            </p>
          </div>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
            <Image
              src="/mentor-session.jpg"
              alt="Mentorship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
