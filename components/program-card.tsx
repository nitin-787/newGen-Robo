import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function ProgramCard({ title, image, description, link }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="relative w-full h-40 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link href={link} className="text-sky-500 font-medium mt-4 inline-block hover:underline">
        Learn more →
      </Link>
    </div>
  );
}
