import React from "react";
import { MoreAbout } from "../../lib/data/landing-page/about-and-highlights.data"

import Img6 from "../../assets/homepage_photo/img_6_.png";
import Img1 from "../../assets/homepage_photo/img_1_.jpg";
import Img2 from "../../assets/homepage_photo/img_2_.jpg";
import Img3 from "../../assets/homepage_photo/img_3_.jpg";
import Img4 from "../../assets/homepage_photo/img_4_.jpg";
import Img5 from "../../assets/homepage_photo/img_5_.JPG";

const AboutMore = () => {
  return (
    <div className="py-6 pb-16 px-max flex flex-col gap-8 xl:gap-18 mx-auto max-w-[95rem]">
      <div className="flex flex-col gap-4 lg:gap-6 px-max max-w-[78rem] mx-auto ">
        <h1 className="text-base text-wrap lg:text-2xl font-inter font-medium text-neutral-600">
          {MoreAbout[0]}
        </h1>
        <p className=" text-base text-wrap lg:text-lg ml-auto text-right font-inter max-w-3xl text-neutral-600">
          {MoreAbout[1]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-max mb-12">
        <ImageCard src={Img1} alt="Image 1" />
        <ImageCard src={Img2} alt="Image 2" />
        <ImageCard src={Img3} alt="Image 3" />
        <ImageCard src={Img4} alt="Image 4" />
        <div className="h-[26rem] w-full rounded-2xl bg-neutral-50 p-10 flex items-center justify-center">
          <img src={Img6} alt="Team Illustration" className="w-full h-full object-contain" />
        </div>
        <ImageCard src={Img5} alt="Image 5" />
      </div>
    </div>
  );
};

/**

 * @param {{src: string, alt: string}} props
 */
const ImageCard = ({ src, alt }) => (
  <div className="h-[26rem] w-full rounded-2xl bg-neutral-200 overflow-hidden shadow-lg">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition duration-300 hover:scale-[1.05]"
    />
  </div>
);

export default AboutMore;