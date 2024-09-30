import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import FeaturedCourses from "@/components/featured-courses";
import whychooseus from "@/components/whychooseus";
import WhyChooseUs from "@/components/idontknow";
import MovingCards from "@/components/movingcards";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructor";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.2]">
        <HeroSection />
        <FeaturedCourses />       
        <WhyChooseUs />
        <MovingCards/>
        <UpComingWebinars />
        <Instructors/> 
        <Footer/>
        
        

    </main>
  );
}
