import Wrapper from "../Shared/Wrapper"
import supporImg from "@/components/assests/photos/support.png"
import Image from "next/image";


const UpdateAndOfferPage = () => {
  return (
    <div className="mt-20">
        <Wrapper>
            <div className="grid md:grid-cols-2  grid-cols-1 justify-center items-center">
                 {/* Left Side */}
                <div>
                  <div className="">
                        <h2 className=" font-Poppins text-4xl  text-black  font-semibold mt-4 max-w-4xl ">
                          Subscribed to our Newsletter for Updates and Offers </h2>
                          <p className="max-w-5xl text-wrap text-lg text-gray-400  mt-5">
                            Keep pace with SecureCloud advancements! Join our mailing list for selective, noteworthy updates.</p>
                       
                    </div>

                    <div className="mt-10 md:space-x-7 space-x-0 flex">
                        <input type="text" placeholder="Enter Your Email"
                        className=" bg-gray-100 rounded-lg px-2 md:px-4
                        border border-gray-300
                        flex flex-wrap"/>
                        <button className="px-2 py-2 active:bg-gray-200 rounded-lg">Notify me</button>
                  </div>
                </div>



                 {/* Right Side */}
                <div className="md:mt-0 mt-14">
                      <Image src={supporImg} alt="Support Image"
                      className="max-w-full h-auto  "/>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default UpdateAndOfferPage