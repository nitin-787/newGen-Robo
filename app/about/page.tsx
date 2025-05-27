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
          src="/placeholder.svg?height=400&width=800"
          alt="Innovation Lab"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Combined Alternating Sections */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-24">
        {/* Section 1: LHS Content, RHS Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Innovative Learning</h2>
            <p className="text-gray-700">
              At our innovation lab, students explore real-world tech like
              robotics and AI hands-on. At our innovation lab, students explore
              real-world tech like robotics and AI hands-on. At our innovation
              lab, students explore real-world tech like robotics and AI
              hands-on. At our innovation lab, students explore real-world tech
              like robotics and AI hands-on. At our innovation lab, students
              explore real-world tech like robotics and AI hands-on. At our
              innovation lab, students explore real-world tech like robotics and
              AI hands-on. At our innovation lab, students explore real-world
              tech like robotics and AI hands-on. At our innovation lab,
              students explore real-world tech like robotics and AI hands-on.
            </p>
          </div>
          <div className="rounded-md overflow-hidden shadow-md border border-gray-200 w-[500px] h-[300px]">
            <Image
              src="/placeholder.svg"
              alt="Lab Activity"
              width={500}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Section 2: LHS Image, RHS Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          <div className="rounded-md overflow-hidden shadow-md border border-gray-200 order-1 md:order-none w-[500px] h-[300px]">
            <Image
              src="/placeholder.svg"
              alt="Lab Activity"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hands-on Practice</h2>
            <p className="text-gray-700">
              Students engage in practical projects that encourage creativity,
              critical thinking, and problem solving. Students engage in
              practical projects that encourage creativity, critical thinking,
              and problem solving. Students engage in practical projects that
              encourage creativity, critical thinking, and problem solving.
              Students engage in practical projects that encourage creativity,
              critical thinking, and problem solving. At our innovation lab,
              students explore real-world tech like robotics and AI hands-on. At
              our innovation lab, students explore real-world tech like robotics
              and AI hands-on. At our innovation lab, students explore
              real-world tech like robotics and AI hands-on. At our innovation
              lab, students explore real-world tech like robotics and AI
              hands-on.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
      
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
