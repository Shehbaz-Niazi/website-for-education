import Wrapper from "../Shared/Wrapper";
import { Badge } from "@/components/ui/badge";
import BannerImage from "@/components/assests/photos/banner.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Banner = () => {
  return (
    <>
      <Wrapper>
        <div className="flex justify-between md:flex-row flex-col md:mt-0 mt-10">
          {/* *******************Left Side Start ************************ */}
          <div className="max-w-2xl flex flex-col justify-center ">
            <h4>
              <Badge
                variant="outline"
                className="text-cinnabar-500 text-sm font-Poppins "
              >
                Feed Your Knowledge
              </Badge>
            </h4>

            <h1 className="font-Poppins lg:text-6xl md:text-5xl text-4xl font-semibold mt-4 w-2xl leading-[1]">
              Develop Tour Skills with online{" "}
              <span className="text-cinnabar-500 ">Courses</span>
            </h1>
            <p className="mt-7 max-w-xl text-justify">
              Welcome to our cutting-edge online education platform, where
              learning meets convenience and innovation. Our website is designed
              to provide users with a seamless and engaging educational
              experience.
            </p>
            <div className="mt-10 ">
              <Button
                variant="destructive"
                className="font-Poppins  hover:bg-mineShaft-700"
              >
                Contact Us <MoveRight className="ps-2" />{" "}
              </Button>
            </div>
          </div>
          {/* *******************Left Side End  ************************ */}

          {/* ******************************************* */}

          <div className="flex-wrap flex mt-10 lg:mt-0 lg:pr-10 md:pr-0  items-center justify-center  max-w-lg h-5/6 ">
            <Image
              src={BannerImage}
              alt="Banner Iamge"
              className="  w-full h-full object-cover "
            />
          </div>
          {/* ******************************************* */}
        </div>
      </Wrapper>
    </>
  );
};

export default Banner;

// bg-gradient-to-tl from-fuchsia-100  to-slate-50 h-10
