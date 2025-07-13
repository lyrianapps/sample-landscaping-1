"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Transform</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Our Landscaping Services
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Discover how our expert landscaping services can enhance the
              beauty and functionality of your outdoor spaces. From design to
              maintenance, we have solutions tailored to your needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore">Explore</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
