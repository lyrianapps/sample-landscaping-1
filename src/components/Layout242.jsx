"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout242() {
  // Array of landscaping services
  const services = [
    {
      icon: "🌱",
      title: "Lawn Care & Maintenance",
      description:
        "Keep your lawn lush, green, and healthy all year round with expert mowing, fertilization, aeration, and weed control.",
      button: { label: "Learn More", href: "#" },
    },
    {
      icon: "🌳",
      title: "Landscape Design",
      description:
        "Transform your outdoor space with custom landscape designs tailored to your style and needs, including plant selection, layout, and hardscaping.",
      button: { label: "View Designs", href: "#" },
    },
    {
      icon: "🌷",
      title: "Garden Installation",
      description:
        "From flower beds to vegetable gardens, we install beautiful, thriving gardens that enhance your property’s beauty and value.",
      button: { label: "Get Started", href: "#" },
    },
    {
      icon: "💧",
      title: "Irrigation Systems",
      description:
        "Ensure your plants get the right amount of water with efficient irrigation system installation, repair, and maintenance.",
      button: { label: "See Options", href: "#" },
    },
    {
      icon: "🪵",
      title: "Mulching & Edging",
      description:
        "Improve soil health and curb appeal with professional mulching and clean, defined edging for all your garden beds.",
      button: { label: "Request Quote", href: "#" },
    },
    {
      icon: "🌲",
      title: "Tree & Shrub Care",
      description:
        "Pruning, trimming, planting, and removal services to keep your trees and shrubs healthy, safe, and beautiful.",
      button: { label: "Contact Us", href: "#" },
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Transform Your Outdoors with Our Exceptional Landscaping Services
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {services.map((service, idx) => (
              <div key={idx}>
                <div className="rb-5 mb-5 md:mb-6 flex items-center">
                  <span className="text-4xl mr-2">{service.icon}</span>
                </div>
                <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-5 md:mb-6">{service.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                    asChild
                  >
                    <a href={service.button.href}>{service.button.label}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
