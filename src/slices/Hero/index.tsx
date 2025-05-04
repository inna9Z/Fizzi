"use client";
import React from "react";

import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import Button from "../../app/components/Button";
import { TextSplitter } from "@/app/components/TextSpliter";


gsap.registerPlugin(useGSAP, ScrollTrigger)

type HereProps = {
  slice: any; // Replace 'any' with your correct type
};

/**
 * Props for `Here`.
 */



/**
 * Component for "Here" Slices.
 */
const Hero = ({ slice }: HereProps): JSX.Element => {
  useGSAP(() => {
    const introTl = gsap.timeline()
    introTl.set(".hero", { opacity: 1 }).from(".hero-header-word", {
      scale: 3,
      opacity: 0,
      ease: "power4.in",
      delay: 0.3,
      stagger: 1

    }).from(".hero-subheading", {
      opacity: 0,
      y: 0
    },
      "+=.8",
    ).from(".hero-body", {
      opacity: 0,
      y: 10

    }).from(".hero-button", {
      opacity: 0,
      y: 0,
      duration: 0.6
    })

    const scrollT1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true
      }
    })
    scrollT1.fromTo(
      "body",
      { backgroundColor: "#FDE047" },  // FROM
      {
        backgroundColor: "#D9F99D",
        overwrite: "auto"
      },
      1

    )

  })



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      <div className="grid">
        <div className="grid h-screen place-items-center ">
          <div className="grid auto-rows-min place-items-center text-center ">
            <h1 className="hero-header  text-7x1 font-black uppercase leading-[.8]
             text-orange-500 md:text-[9rem] lg:text-[-13rem]">

              <TextSplitter text={asText(slice.primary.heading)} wordDisplayStyle="block" className="hero-header-word" />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl
            " >

              <PrismicRichText field={slice.primary.subheading} />
            </div>

            <div className="hero-body text-2xl font-normal text-sky-950">

              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button link={slice.primary.button_link} buttonText={slice.primary.button_text}
              className="hero-button mt-12"
            />

          </div>
        </div>
        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">

          <PrismicNextImage className=" w-full md:hidden " field={slice.primary.cans_image} />
          <div>

            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">


              <TextSplitter text={asText(slice.primary.second_heading)} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-slate-950">

              <PrismicRichText field={slice.primary.second_body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
