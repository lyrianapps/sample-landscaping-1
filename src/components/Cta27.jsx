"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import React from "react";

export function Cta27() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
          Transform Your Outdoor Space Today
        </h2>
        <p className="text-text-alternative md:text-md">
          Ready to elevate your landscape? Schedule a consultation or request a
          quote now!
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Get Started">Get Started</Button>
          <Button title="Contact Us" variant="secondary-alt">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          alt="Landscaping sample image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/assets/photo-2.avif"}
          width={1900}
          height={1900}
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
