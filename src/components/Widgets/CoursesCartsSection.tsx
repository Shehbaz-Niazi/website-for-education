import Image from "next/image";
import Wrapper from "../Shared/Wrapper";
import { Badge } from "@/components/ui/badge";
import Course2 from "@/components/assests/photos/courses2.jpeg";
import Course3 from "@/components/assests/photos/courses3.jpeg";
import Course6 from "@/components/assests/photos/courses7.jpeg";
import Course7 from "@/components/assests/photos/courses11.jpeg";
import Course9 from "@/components/assests/photos/courses10.jpeg";
import Rating from "../Shared/Rating";
import { Button } from "@/components/ui/button";

const CoursesCartsSection = () => {
  return (
    <div className="mt-20 ">
      <Wrapper>
        <div className="">
          <div className="flex flex-col items-center">
            <h4 className="">
              <Badge
                variant="outline"
                className="text-cinnabar-500 text-sm font-Poppins "
              >
                Top Class Courses
              </Badge>
            </h4>

            <h2 className=" font-Poppins lg:text-4xl md:text-3xl text-black text-2xl font-semibold mt-4 max-w-4xl ">
              Explore the worlds best{" "}
              <span className="text-red-500">Courses</span>
            </h2>
          </div>

          <div className="flex mt-20  gap-x-10 mx-auto justify-center flex-wrap gap-y-10 overflow-hidden flex-grow">
            <div className="w-fit h-auto shadow-xl shadow-slate-500 rounded-lg">
              <div className="">
                <Image
                  src={Course2}
                  alt="JNextjs"
                  className="w-72 h-auto rounded-t-lg"
                />
              </div>
              <h4 className="font-Poppins space-x-2 mt-3 pl-4">
                <Badge
                  variant="outline"
                  className="bg-cinnabar-500 text-white font-medium text-sm font-Poppins "
                >
                  New
                </Badge>
                <span className="text-sm font-bold ">
                  For Absolute Biggeners
                </span>
              </h4>

              <h3 className="mt-2 pl-4 font-Poppins font-semibold">
                Nextjs 14 and Tailwind css.
              </h3>
              <div className="pl-4 mt-4">
                <Rating />
              </div>

              <div className="pl-4 mt-6 flex gap-x-10 items-center pb-10">
                <Button
                  variant="destructive"
                  className="font-Poppins bg-indigo-600 hover:bg-mineShaft-700"
                >
                  Enroll Now
                </Button>
                <span className="text-red-500 font-medium text-xl">$17.00</span>
              </div>
              {/* <div className="pt-10"></div> */}
            </div>

            <div className="w-fit h-auto shadow-xl shadow-slate-500 rounded-lg">
              <div className="">
                <Image
                  src={Course3}
                  alt="Python"
                  className="w-72 h-auto rounded-t-lg"
                />
              </div>
              <h4 className="font-Poppins space-x-2 mt-3 pl-4">
                <Badge
                  variant="outline"
                  className="bg-cinnabar-500 text-white font-medium text-sm font-Poppins "
                >
                  New
                </Badge>
                <span className="text-sm font-bold ">
                  for Backend and APIs
                </span>
              </h4>

              <h3 className="mt-2 pl-4 font-Poppins font-semibold">
                Python Programming
              </h3>
              <div className="pl-4 mt-4">
                <Rating />
              </div>

              <div className="pl-4 mt-6 flex gap-x-10 items-center pb-10">
                <Button
                  variant="destructive"
                  className="font-Poppins bg-indigo-600 hover:bg-mineShaft-700"
                >
                  Enroll Now
                </Button>
                <span className="text-red-500 font-medium text-xl">$17.00</span>
              </div>
              {/* <div className="pt-10"></div> */}
            </div>

            <div className="w-fit h-auto shadow-xl shadow-slate-500 rounded-lg">
              <div className="">
                <Image
                  src={Course6}
                  alt="Data Base"
                  className="w-72 h-auto rounded-t-lg"
                />
              </div>
              <h4 className="font-Poppins space-x-2 mt-3 pl-4">
                <Badge
                  variant="outline"
                  className="bg-cinnabar-500 text-white font-medium text-sm font-Poppins "
                >
                  New
                </Badge>
                <span className="text-sm font-bold ">For Expert Level</span>
              </h4>

              <h3 className="mt-2 pl-4 font-Poppins font-semibold">
                Hierarchical Databases
              </h3>
              <div className="pl-4 mt-4">
                <Rating />
              </div>

              <div className="pl-4 mt-6 flex gap-x-10 items-center pb-10">
                <Button
                  variant="destructive"
                  className="font-Poppins bg-indigo-600 hover:bg-mineShaft-700"
                >
                  Enroll Now
                </Button>
                <span className="text-red-500 font-medium text-xl">$17.00</span>
              </div>
              {/* <div className="pt-10"></div> */}
            </div>

            <div className="w-fit h-auto shadow-xl shadow-slate-500 rounded-lg">
              <div className="">
                <Image
                  src={Course9}
                  alt="Data Base"
                  className="w-72 h-auto rounded-t-lg"
                />
              </div>
              <h4 className="font-Poppins space-x-2 mt-3 pl-4">
                <Badge
                  variant="outline"
                  className="bg-cinnabar-500 text-white font-medium text-sm font-Poppins "
                >
                  New
                </Badge>
                <span className="text-sm font-bold ">Masters Level</span>
              </h4>

              <h3 className="mt-2 pl-4 font-Poppins font-semibold">
                Javascript OOP
              </h3>
              <div className="pl-4 mt-4">
                <Rating />
              </div>

              <div className="pl-4 mt-6 flex gap-x-10 items-center pb-10">
                <Button
                  variant="destructive"
                  className="font-Poppins bg-indigo-600 hover:bg-mineShaft-700"
                >
                  Enroll Now
                </Button>
                <span className="text-red-500 font-medium text-xl">$17.00</span>
              </div>
              {/* <div className="pt-10"></div> */}
            </div>

            <div className="w-fit h-auto shadow-xl shadow-slate-500 rounded-lg">
              <div className="">
                <Image
                  src={Course7}
                  alt="Data Base"
                  className="w-72 h-auto rounded-t-lg"
                />
              </div>
              <h4 className="font-Poppins space-x-2 mt-3 pl-4">
                <Badge
                  variant="outline"
                  className="bg-cinnabar-500 text-white font-medium text-sm font-Poppins "
                >
                  New
                </Badge>
                <span className="text-sm font-bold ">Begginer To Advance</span>
              </h4>

              <h3 className="mt-2 pl-4 font-Poppins font-semibold">
                Data structure
              </h3>
              <div className="pl-4 mt-4">
                <Rating />
              </div>

              <div className="pl-4 mt-6 flex gap-x-10 items-center pb-10">
                <Button
                  variant="destructive"
                  className="font-Poppins bg-indigo-600 hover:bg-mineShaft-700"
                >
                  Enroll Now
                </Button>
                <span className="text-red-500 font-medium text-xl">$17.00</span>
              </div>
              {/* <div className="pt-10"></div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CoursesCartsSection;
