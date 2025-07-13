"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
      />
    </div>
  );
};

export function Timeline1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">History</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Journey Through Time: Key Milestones
            </h1>
            <p className="md:text-md">
              Discover the significant moments that shaped our company. Each
              milestone reflects our commitment to excellence and innovation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  2010
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Foundation Laid
                </h3>
                <p>
                  In 2010, we established our roots in the landscaping industry.
                  Our mission was clear: to provide exceptional service and
                  quality.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Details" variant="secondary">
                    Details
                  </Button>
                  <Button
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  2015
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Expansion Begins
                </h3>
                <p>
                  By 2015, we expanded our services to include commercial
                  landscaping. This growth allowed us to serve a broader
                  clientele.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Discover" variant="secondary">
                    Discover
                  </Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  2020
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Sustainability Focus
                </h3>
                <p>
                  In 2020, we embraced sustainable practices in our projects.
                  This commitment not only benefits the environment but also
                  enhances our services.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Join" variant="secondary">
                    Join
                  </Button>
                  <Button
                    title="Connect"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Connect
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  2023
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Innovative Solutions
                </h3>
                <p>
                  As we move into 2023, we continue to innovate and adapt. Our
                  focus remains on delivering top-notch landscaping solutions.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
