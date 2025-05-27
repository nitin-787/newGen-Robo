import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppFloatingButton from "@/components/whatsapp-floating";

export default function SchoolLabSetup() {
  return (
    <div>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Navigation />
        </div>
      </header>

      {/* Main Section */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Form */}
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                Book a call for Lab Setup Info
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-700">
                    City in which you want to start
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="investment" className="block text-gray-700">
                    Investment Planned
                  </label>
                  <input
                    type="text"
                    id="investment"
                    name="investment"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your investment plan"
                    required
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Images */}
            <div className="flex flex-col gap-6 items-center justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Open an Innovation Lab at your school with Youngovator
              </h2>

              {/* First row of images */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {["school-lab-1", "school-lab-2"].map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={`/assets/images/${img}.jpeg`}
                      alt={`Lab Setup ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Second row of images */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {["school-lab-3", "school-lab-4"].map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={`/assets/images/${img}.jpeg`}
                      alt={`Lab Setup ${i + 3}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Benefits List */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              What do Schools gain from our <br /> Innovation Lab Set-up
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              <li>
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded">
                  End to end Training Execution support to school
                </span>
              </li>
              <li>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded">
                  Support in setting up high-tech state of art infrastructure /
                  Innovation lab in the school
                </span>
              </li>
              <li>
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded">
                  Help in organising school level / district level robotics
                  related event in the campus
                </span>
              </li>
              <li>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded">
                  Exclusive shout-out to partners during our National level
                  Innovation Carnival
                </span>
              </li>
              <li>
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded">
                  Branding & promotion at Youngovator’s social media handles
                </span>
              </li>
              <li>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded">
                  Help students in preparation for IIT level events
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img
              src="/assets/images/students.jpeg"
              alt="Students with Innovation Lab"
              className="rounded-lg shadow-lg max-w-xs sm:max-w-sm w-full"
            />
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
