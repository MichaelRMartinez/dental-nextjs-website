"use client";
import { testimonialsItems } from "@/data/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';


export default function Testimonial() {
  return (<>
  
  <div className="container">

    {/* TITLE */}
    <div className="max-w-2xl space-y-2">
      <p className="subtitle">Testimonials</p>
      <h2 className="title">Hear from Our 1,000+ Happy Patients</h2>
      <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Amet platea egestas aliquam habitant.</p>
    </div>

    {/* WRAPPER */}
    <Swiper modules={[Navigation]} spaceBetween={20} className="mt-11" navigation={{prevEl:'.prev-btn', nextEl:'.next-btn'}} loop breakpoints={{768: {slidesPerView: 2}}}>
      {testimonialsItems.map((testimonial) => (
        // Card
        <SwiperSlide key={testimonial.id} className="border border-primary-200 p-5 rounded-md overflow-hidden flex flex-col sm:flex-row items-start gap-5">
          {/* Image */}
          <div className="max-w-max shrink-0">
            <Image  src={testimonial.img} alt={testimonial.author} width={95} height={95} className="rounded-full ring-4 ring-primary-500 size-16" />
          </div>
          {/* Content */}
          <div className="space-y-4">
            <p>{testimonial.text}</p>
            <p className="card-title">{testimonial.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* NAVIGATION */}
    <div className="flex items-center justify-center mt-11 lg:mt-16 gap-2.5">
      <button className="size-10 bg-primary-500 hover:bg-primary-700 transition-colors text-white rounded-full flex items-center justify-center border-primary-800 border focus:bg-primary-700 prev-btn">
        <RiArrowLeftLine />
      </button>
      <button className="size-10 bg-primary-500 hover:bg-primary-700 transition-colors text-white rounded-full flex items-center justify-center border-primary-800 border focus:bg-primary-700 next-btn">
        <RiArrowRightLine />
      </button>
    </div>
  </div>

  </>)
}
