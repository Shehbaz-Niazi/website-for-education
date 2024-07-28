import Image from "next/image"
import Wrapper from "../Shared/Wrapper"
import WhatWeOfferImage from "@/components/assests/photos/MAIN-IMAGE.png"
import { Badge } from "@/components/ui/badge"
import Ticky from "@/components/assests/photos/ticky.png"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"



{/* <div className="w-64 bg-red-400 h-64 rounded-full blur-2xl shadow-2xl"></div> */}


const WhatWeOffer = () => {
  return (
    <div className=" mt-20  ">
        <Wrapper>
        
                   <div className="  ">
                                 <div className="bg-gradient-to-r from-slate-100 to-gray-300 
                                 grid md:grid-cols-2 grid-col-1 items-center pt-10 rounded-2xl ">
                   


                    
                            <div className="relative order-last lg:order-first">
                                <Image alt="Man Iamge" src={WhatWeOfferImage} 
                                className=""
                                />
                                <span className="absolute top-0 right-0 w-72 bg-indigo-800 h-72 rounded-full blur-2xl opacity-15 translate-x-32 -translate-y-14
                                shadow-2xl flex items-center justify-center"></span>
                            </div>




                        <div className="pt-20 pl-5 order-first lg:order-last pb-5 ">
                                <h4 >
                                    <Badge variant="outline" className="text-cinnabar-500 text-base font-Poppins border border-white">
                                        What We Offer
                                    </Badge>
                                 </h4>

                                 <h2 className="font-Poppins lg:text-4xl md:text-3xl text-black text-2xl font-semibold mt-4 max-w-4xl leading-[1]">
                                        Learn & Grow Your SKILLS Form Anywhere
                                 </h2>

                                 <p className="max-w-xl  mt-8 text-justify  pr-5">
                                    Encapsulates the essence of our online education platform, empowering learners to acquire new skills and enhance their knowledge from the comfort of their homes or on the go. Our platform is designed to break down geographical barriers, offering a diverse range of courses that cater to various interests and professional needs.
                                 </p>
                                
                                <ul className="mt-10">
                                  <li className="flex gap-x-2 font-bold">
                                     <Image src={Ticky} alt="Tick Image" className="h-7 w-7 text-indigo-700"/>
                                     Recorded Videos
                                  </li>
                                  <li className="flex mt-2 gap-x-2 font-bold">
                                     <Image src={Ticky} alt="Tick Image" className="h-7 w-7 text-indigo-700"/>
                                     Expert Instructors
                                  </li>
                                  <li className="flex mt-2 gap-x-2 font-bold">
                                     <Image src={Ticky} alt="Tick Image" className="h-7 w-7 text-indigo-700"/>
                                     Self-Paced
                                  </li>
                                  <li className="flex mt-2 gap-x-2 font-bold">
                                     <Image src={Ticky} alt="Tick Image" className="h-7 w-7 text-indigo-700"/>
                                     Practical Projects
                                  </li>
                                <div className="mt-10 pl-2 ">
                                <Button variant="destructive" className="font-Poppins bg-indigo-600 hover:bg-mineShaft-700">Contact Us <MoveRight className="ps-2"/> 
                                </Button></div>
                                </ul>




                        </div>


                    </div>


                    </div>    
                   
        </Wrapper>
    </div>
  )
}

export default WhatWeOffer






//  <div className="w-ful h-screen flex justify-center">

// <div className="w-64 bg-red-400 h-64 rounded-full blur-2xl shadow-2xl   ">
                
// </div>


// </div> 