"use client"
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const main = [
    {
        title: "Why Choose Us",
        description:
            "We are committed to providing you with the best music education experience. Our courses are designed to help you learn and grow as a musician, while also providing you with the tools and resources you need to succeed.",
        content: (
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/images/why-choose-us.png"
                    alt="Why Choose Us"
                    width={600}
                    height={600}
                />
            </div>
        ),
    },
    {
        title: "Our Mission",
        description:
            "We are committed to providing you with the best music education experience. Our courses are designed to help you learn and grow as a musician, while also providing you with the tools and resources you need to succeed.",
        content: (
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/images/our-mission.png"
                    alt="Our Mission"
                    width={600}
                    height={600}
                />
            </div>
        ),
    },
    {
        title: "Our Values",
        description:
            "We are committed to providing you with the best music education experience. Our courses are designed to help you learn and grow as a musician, while also providing you with the tools and resources you need to succeed.",
        content: (
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/images/our-values.png"
                    alt="Our Values"
                    width={600}
                    height={600}
                />
            </div>
        ),
    }
]

const thisisthe =  function thisisthe() {
    return (
        <div >
            <StickyScroll content={main}/> 
        </div>
    )
}

export default thisisthe