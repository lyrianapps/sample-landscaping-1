import { Navbar7 } from "@/components/Navbar7";
import { Footer1 } from "@/components/Footer1";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Layout242() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-20 px-4 ">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Heading, description, form */}

            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Medium length heading
                <br />
                goes here
              </h1>
              <p className="text-xl mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 mb-2 max-w-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-700 flex-1"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white rounded-xl px-8 py-3 text-lg font-medium shadow hover:bg-green-800 transition"
                >
                  Sign up
                </button>
              </form>
              <p className="text-sm mt-2">
                By clicking Sign Up you're confirming that you agree with our{" "}
                <a href="#" className="underline">
                  Terms and Conditions
                </a>
                .
              </p>
            </div>
            {/* Right: Image */}
            <div>
              <div className="w-full h-72 md:h-80 bg-gray-300 rounded-2xl flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Placeholder"
                  className="object-contain h-32 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping Process Section */}
      <section className="max-w-7xl mx-auto py-20 px-4 bg-green-50 rounded-xl my-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Transforming Your Outdoor Space:
            <br />
            Our Landscaping Process Explained
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 bg-green-200 rounded-xl flex items-center justify-center mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Step 1"
                className="object-contain h-20 opacity-80"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Your Vision Comes to Life: Step-by-Step Landscaping Guide
            </h3>
            <p className="mb-6">
              We take you from consultation to completion, ensuring every detail
              is perfect.
            </p>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn More
            </Button>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 bg-green-200 rounded-xl flex items-center justify-center mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Step 2"
                className="object-contain h-20 opacity-80"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Consultation: Understanding Your Needs and Preferences
            </h3>
            <p className="mb-6">
              We start with a detailed consultation to grasp your landscaping
              dreams.
            </p>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Get Started
            </Button>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 bg-green-200 rounded-xl flex items-center justify-center mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Step 3"
                className="object-contain h-20 opacity-80"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Design: Crafting a Customized Landscaping Plan Just for You
            </h3>
            <p className="mb-6">
              Our team creates a tailored design that reflects your style and
              needs.
            </p>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Discover
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
