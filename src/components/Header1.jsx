import Image from "next/image";
import Link from "next/link";

export function Header1() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6  rounded-2xl">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading, description, buttons */}
          <div>
            <h1
              className="text-[64px] md:text-[80px] font-normal mb-8 text-[#181c0d] leading-[1.05] tracking-tight"
              style={{ fontFamily: "Nunito, Arial, sans-serif" }}
            >
              Transform Your
              <br />
              Outdoor Space
              <br />
              Today
            </h1>
            <p className="text-xl mb-10 text-[#23291b]">
              Experience the beauty of a professionally landscaped yard. Let us
              help you create the outdoor oasis of your dreams.
            </p>
            <div className="flex gap-6 mt-8">
              <Link href="/start">
                <button className="bg-green-700 text-white rounded-xl px-8 py-3 text-lg font-medium shadow hover:bg-green-800 transition">
                  Get Started
                </button>
              </Link>
              <Link href="/about-us">
                <button className="bg-[#e5e5e5] text-black rounded-xl px-8 py-3 text-lg font-medium shadow hover:bg-gray-300 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Right: Image */}
          <div>
            <div className="w-full h-[420px] bg-[#dbdbd6] rounded-2xl flex items-center justify-center">
              <Image
                alt="Landscaping sample image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={"/assets/photo-1.avif"}
                width={1100}
                height={1100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
