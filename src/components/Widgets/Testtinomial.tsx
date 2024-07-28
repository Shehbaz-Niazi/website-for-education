import myPic from "@/components/assests/photos/myPic.png.jpg"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Wrapper from "../Shared/Wrapper"
import Image from "next/image"

import RatingStars from "../Shared/RatingStars"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"


const Testtinomial = () => {
  return (
    <div className="mt-32 ml-5 mr-5 ">
        <Wrapper>
            <div>
                <div className="flex flex-col justify-center items-center ">
                    <h4 >
                            <Badge variant="outline" className="text-cinnabar-500 text-sm font-Poppins ">
                                          Testimonials
                                </Badge>
                    </h4>
                    <h2  className=" font-Poppins lg:text-4xl md:text-3xl text-black text-2xl font-semibold mt-4 max-w-4xl ">
                    What Our Students Say About <span className="text-red-500">Courses</span>
                    </h2>
                </div>
               <Carousel className="mt-20">
                    <CarouselContent>
                    <CarouselItem>
                        <div className="flex justify-center flex-col items-center">
                            <Image src={myPic} alt="myPic" 
                            className="rounded-full h-28 w-28"
                            />
                            <h1  className=" font-Poppins  text-black text-xl font-semibold mt-4 max-w-4xl">
                                Shehbaz Niazi
                            </h1>
                            <p className="max-w-5xl text-wrap text-center mt-5">
                                Welcome to my corner of the web! Im Shehebaz Niazi, a passionate frontend developer currently honing my skills at PIAIC (Presidental Institute of Artificial Intelligence and Computing). With a deep love for creating seamless user experiences, I specialize in leveraging the latest technologies to build intuitive and visually appealing websites and applications.
                            </p>
                            <RatingStars/>
                            <div className="mt-10 ">
                                <Button variant="destructive" className="font-Poppins bg-indigo-700 hover:bg-mineShaft-700">Contact Us <MoveRight className="ps-2"/> </Button>
                                
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center flex-col items-center">
                            <Image src={myPic} alt="myPic" 
                            className="rounded-full h-24 w-24"
                            />
                            <h1  className=" font-Poppins  text-black text-xl font-semibold mt-4 max-w-4xl">
                                Shehbaz Niazi
                            </h1>
                            <p className="max-w-5xl text-wrap text-center mt-5">
                                Welcome to my corner of the web! Im Shehebaz Niazi, a passionate frontend developer currently honing my skills at PIAIC (Presidental Institute of Artificial Intelligence and Computing). With a deep love for creating seamless user experiences, I specialize in leveraging the latest technologies to build intuitive and visually appealing websites and applications.
                            </p>
                            <RatingStars/>
                            <div className="mt-10 ">
                                <Button variant="destructive" className="font-Poppins bg-indigo-700 hover:bg-mineShaft-700">Contact Us <MoveRight className="ps-2"/> </Button>
                                
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center flex-col items-center">
                            <Image src={myPic} alt="myPic" 
                            className="rounded-full h-24 w-24"
                            />
                            <h1  className=" font-Poppins  text-black text-xl font-semibold mt-4 max-w-4xl">
                                Shehbaz Niazi
                            </h1>
                            <p className="max-w-5xl text-wrap text-center mt-5">
                                Welcome to my corner of the web! Im Shehebaz Niazi, a passionate frontend developer currently honing my skills at PIAIC (Presidental Institute of Artificial Intelligence and Computing). With a deep love for creating seamless user experiences, I specialize in leveraging the latest technologies to build intuitive and visually appealing websites and applications.
                            </p>
                            <RatingStars/>
                            <div className="mt-10 ">
                                <Button variant="destructive" className="font-Poppins bg-indigo-700 hover:bg-mineShaft-700">Contact Us <MoveRight className="ps-2"/> </Button>
                                
                            </div>
                        </div>
                    </CarouselItem>
                    
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
              </Carousel>
            </div>
        </Wrapper>
    </div>
  )
}

export default Testtinomial