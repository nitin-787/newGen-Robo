import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppFloatingButton from "@/components/whatsapp-floating";

export default function LearnAtCenter() {
  return (
    <div className="bg-[#eaf2ff] min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Navigation />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/learn-at-center.jpeg"
            alt="Student with robotics kit"
            width={835}
            height={730}
            className="rounded-lg w-full h-auto max-h-[700px] object-contain"
            sizes="(min-width: 1024px) 835px, 100vw"
          />
        </div>


          {/* Text & Skills */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-[#1a1a40] mb-4">
              Join Innovation Lab
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are thrilled to announce our Science & Robotics Summer Camp for
              kids aged 8 to 18 years! Prepare to embark on an exciting journey
              filled with creativity, learning, and fun. Our camp offers a
              unique blend of activities ranging from building with robotics,
              science experiments, Coding, App development, drone and 3D
              printing, all centred around the theme of problem solving and
              critical thinking.
            </p>

            <h2 className="text-3xl font-bold text-[#1a1a40] mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Fundamental of Electronics",
                "Robotics",
                "Coding",
                "Web & App Development",
                "3D Printing & Drone Development",
                "Entrepreneurship & Financial Literacy",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white flex items-center gap-3 p-4 rounded-xl shadow-md"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 17a1 1 0 102 0v-2a1 1 0 10-2 0v2zM6 15a1 1 0 100-2H4a1 1 0 100 2h2zm11-6a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zM5 9a1 1 0 100 2H3a1 1 0 100-2h2zm9-5a1 1 0 10-2 0v2a1 1 0 102 0V4zM6 4a1 1 0 100 2H4a1 1 0 100-2h2zm5-2a8 8 0 100 16 8 8 0 000-16z" />
                    </svg>
                  </div>
                  <span className="text-[#1a1a40] font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a40] mb-6">
            Submit Your Application
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Basic Fields */}
            <input
              type="text"
              placeholder="Full Name *"
              required
              className="col-span-1 border border-gray-300 p-3 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone *"
              required
              className="col-span-1 border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="col-span-1 border border-gray-300 p-3 rounded-md"
            />

            {/* Learn Options */}
            <div className="col-span-1">
              <p className="font-medium mb-2">Want to Learn *</p>
              {[
                "Coding",
                "Robotics",
                "Drone & 3D Printing",
                "App development",
                "Entrepreneurship",
                "All",
              ].map((label, idx) => (
                <div key={idx} className="flex items-center mb-1">
                  <input type="checkbox" id={`learn-${idx}`} className="mr-2" />
                  <label htmlFor={`learn-${idx}`} className="text-gray-700">
                    {label}
                  </label>
                </div>
              ))}
            </div>

            {/* City Input */}
            <input
              type="text"
              placeholder="City"
              className="col-span-1 border border-gray-300 p-3 rounded-md self-start"
            />

            {/* Apply For */}
            <div className="col-span-1">
              <p className="font-medium mb-2">Apply for *</p>
              {["Summer Camp", "6 Month Module", "Year Long Module"].map(
                (option, idx) => (
                  <div key={idx} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      id={`apply-${idx}`}
                      className="mr-2"
                    />
                    <label htmlFor={`apply-${idx}`} className="text-gray-700">
                      {option}
                    </label>
                  </div>
                )
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-3">
              <button
                type="submit"
                className="w-full bg-sky-500 text-white font-semibold py-3 rounded-full hover:bg-sky-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />


      {/* Footer */}
      <Footer />
    </div>
  );
}
