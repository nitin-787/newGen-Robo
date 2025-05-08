import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function InnovationLabShowcase() {
  return (
    <div className="w-full bg-amber-200">
      <div className="container ml-auto py-5 px-4 md:px-6 lg:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 items-center">
          {/* Lab Image - 7 columns on large screens */}
          <div className="lg:col-span-5 lg:row-span-2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"/innovation-lab.jpg"}
                alt="SHARD's AI, Robotics & Innovation Lab"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Lab Description - 5 columns on large screens */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a2463]">
              SHARD&apos;s AI, Robotics & Innovation Lab
            </h2>

            <p className="text-gray-700">
              Transforming education through hands-on AI, Robotics, and Coding learning. Empowering students with
              cutting-edge technology, interactive DIY kits, practical projects, and an annual innovation fest to shape
              future innovators.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full">
                Artificial Intelligence
              </Badge>
              <Badge className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full">
                Drone
              </Badge>
              <Badge className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full">
                Robotics
              </Badge>
              <Badge className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full">
                Machine Learning
              </Badge>
              <Badge className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full">
                3-D Printing
              </Badge>
              <Badge className="bg-[#90e0ef] hover:bg-[#90e0ef]/80 text-[#1b1b1c] font-semibold py-2 px-4 rounded-full">
                IoT & Design Thinking
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
