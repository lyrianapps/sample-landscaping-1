"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Transform</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Discover the Benefits of Our Landscaping Services
            </h1>
            <p className="md:text-md">
              Choosing our landscaping services not only enhances your
              property's curb appeal but also boosts its overall value. We offer
              eco-friendly solutions that contribute to a sustainable
              environment while beautifying your space.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <Image
              alt="Landscaping sample image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={"/assets/photo-5.avif"}
              width={1100}
              height={1100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
