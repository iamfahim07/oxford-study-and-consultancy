import Image from "next/image";

export const ImageCard = ({ src, name }) => {
  return (
    <div className="h-[350px] p-5 bg-white shadow rounded overflow-hidden relative border border-gray-300 group">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={src}
          alt={name}
          className="w-full h-full aspect-video object-cover rounded group-hover:scale-110 transition-all"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
      </div>
      <h2 className="font-bold text-4xl text-white absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {name}
      </h2>
    </div>
  );
};
