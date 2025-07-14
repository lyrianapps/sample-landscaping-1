import React from "react";
import { BiSolidStar } from "react-icons/bi";
import Image from "next/image";

export function Testimonial6() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#13361a] text-white"
    >
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif">
            Customer testimonials
          </h1>
          <p className="md:text-md font-semibold text-[#e5e5e5]">
            Hear what our clients say about their new landscapes!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {/* Testimonial 1 */}
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8 text-[#fff700]">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-xl leading-[1.4] font-serif font-normal md:text-2xl mb-8">
              "Our backyard has become our favorite retreat!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-bold text-white">Jane Doe</p>
                <p className="text-[#e5e5e5] font-medium">
                  Homeowner, Springfield
                </p>
              </div>
              <div className="mt-2">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 1"
                  width={80}
                  height={48}
                  className="max-h-12 invert"
                />
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8 text-[#fff700]">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-xl leading-[1.4] font-serif font-normal md:text-2xl mb-8">
              "The transformation exceeded all our expectations!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 2"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-bold text-white">John Smith</p>
                <p className="text-[#e5e5e5] font-medium">
                  Project Manager, ABC Corp
                </p>
              </div>
              <div className="mt-2">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 2"
                  width={80}
                  height={48}
                  className="max-h-12 invert"
                />
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8 text-[#fff700]">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-xl leading-[1.4] font-serif font-normal md:text-2xl mb-8">
              "Every detail was handled with care and precision!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 3"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-bold text-white">Emily Johnson</p>
                <p className="text-[#e5e5e5] font-medium">CEO, GreenScape</p>
              </div>
              <div className="mt-2">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 3"
                  width={80}
                  height={48}
                  className="max-h-12 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
