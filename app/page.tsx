import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (<>
  
  {/* HERO */}
    <section className="pt-32">
      <div className="container grid gap-16 space-y-10 sm:space-y-0 lg:grid-cols-2 lg:items-end ">
        {/* CONTENT */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-none my-auto">
          <p className="subtitle">Smile with Confidence</p>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold">HELPING YOU BRING BACK YOUR <span className="text-primary-500">HAPPY SMILE</span></h1>
          <p className="py-[14px_32px]">Lorem ipsum dolor sit amet consectetur. Consequat pharetra ultrices scelerisque arcu lorem augue. Lacus justo euismod justo amet dictum vel sapien est. Imperdiet tempor.</p>
        

          {/* WRAPPER */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/about" className="primary-btn">LEARN MORE</Link>
            <Link href="/services" className="secondary-btn">BROWSE SERVICES</Link>
          </div>
        </div>
        
        {/* IMAGE */}
        <div className="relative max-w-max lg:mx-0 lg:ml-auto">
          <Image src={'/images/hero-img.png'} alt="dentist holding plastic model of teeth" width={727} height={787} className="relative z-20"/>
          <Image src={'/images/hero-card.png'} alt="4.8 average rating from satisfied customers" width={229} height={109} className="absolute top-11 left-5 z-10 ring ring-primary-200 rounded-lg"/>
        </div>
      </div>

      {/* BACKGROUND CLEAR */}
      <div className="bg-primary-100 absolute bottom-0 right-0 h-5/12 w-3/4 sm:h-1/2 lg:w-1/2 lg:h-full rounded-tl-xl lg:rounded-tl-none -z-10"></div>

      {/* SHAPE */}
      <Image src={'images/shape-1.svg'} alt="" width={200} height={200} className="absolute top-28 -left-8 -z-10"/>
    </section>
  </>);
}
