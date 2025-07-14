"use client";

import React from "react";
import Image from "next/image";
import { RiLeafLine, RiSunLine } from "react-icons/ri"; // Example: Relume uses Remix Icons

export function Layout12() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-green-50"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Transform Your Outdoor Space with Our Expert Landscaping Services
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              At our company, we specialize in creating stunning landscapes
              tailored to your vision. Our dedicated team combines creativity
              and expertise to enhance your outdoor experience.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RiLeafLine className="text-green-700" size={32} />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Custom Designs
                </h6>
                <p>
                  We craft personalized landscapes that reflect your style and
                  enhance your property’s beauty.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RiSunLine className="text-yellow-500" size={28} />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Sustainable Practices
                </h6>
                <p>
                  Our eco-friendly methods ensure a beautiful landscape that
                  benefits the environment.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              alt="Landscaping sample image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={"/assets/photo-4.avif"}
              width={1900}
              height={1900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
