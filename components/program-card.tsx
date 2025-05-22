import Image from "next/image";

interface ProgramCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ProgramCard({
  title,
  image,
  description,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[16/9] mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
