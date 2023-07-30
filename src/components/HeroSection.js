import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-400 py-16 px-8 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Welcome to PC Builder Hub!
          </h1>
          <p className="text-lg md:text-xl text-center mb-8">
            Build Your dream PC with best components!
          </p>
          <Link
            href="/pc-builder"
            className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-600 hover:text-white"
          >
            Let&apos;s Build
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
