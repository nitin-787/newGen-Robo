import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function InnovationLabShowcase() {
  return (
    <div className="w-full bg-[#e9f0f8]">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/images/showcase.jpeg"
                alt="SHARD's AI, Robotics & Innovation Lab"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a2463] leading-tight">
              New-gen Robo’s AI, Robotics & Innovation Lab{" "}
            </h2>

            <p className="text-gray-700 text-base sm:text-lg">
              At New-gen Robo, we’re redefining learning with hands-on
              experiences in AI, robotics, and coding. Through interactive DIY
              kits, real-world projects, and our exciting annual innovation
              festival, we inspire and equip students to become tomorrow’s tech
              pioneers.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Artificial Intelligence",
                "Drone",
                "Robotics",
                "Machine Learning",
                "3-D Printing",
                "IoT & Design Thinking",
              ].map((text, idx) => (
                <Badge
                  key={idx}
                  className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full"
                >
                  {text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
