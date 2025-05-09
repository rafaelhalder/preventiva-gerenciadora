// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./online-course";
import Rastreamento from "./rastreamento";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./carousel-features";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <Rastreamento />
      <WhyChooseUs />
      <CarouselFeatures />
      {/* <Pricing /> */}
      <OtherCourses />
      <Footer />
    </>
  );
}
