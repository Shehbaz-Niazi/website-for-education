import Image from "next/image"
import Wrapper from "../Shared/Wrapper"
import Logo from "@/components/assests/photos/edulogo.png"


const Footer = () => {
  return (
    <div className="mt-20 mb-20">
        <Wrapper>
            <div className="grid sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto  text-wrap">
                <div>
                    <Image src={Logo} alt="Logo"  height={130} width={130}
                    className="w"
                    />
                </div>

                <div className="md:mt-0 mt-8">
                    <h3 className="text-red-500 text-lg font-bold">RESOURCES</h3>
                    <ul className="space-y-2 mt-5">
                        <li>Docmentation</li>
                        <li>Tutorials</li>
                        <span className="flex gap-x-2 items-center">
                        <li>Support</li>
                        <span className="text-xs text-green-500">New</span>
                        </span>
                        
                    </ul>
                </div>

                <div className="md:mt-0 mt-8">
                <h3 className="text-red-500 text-lg font-bold">SUPPORT</h3>
                    <ul className="space-y-2 mt-5">
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Conditions</li>
                        
                    </ul>

                </div>

                <div  className="md:mt-0 mt-8">
                <h3 className="text-red-500 text-lg font-bold">Contact Us</h3>
                    <ul className="space-y-2 mt-5">
                        <li>XXX XXX-XXX 61 Floor Pakistan </li>
                        <li>0313-00000000000-0</li>
                        <li>abrarkan7100@gmail.com</li>
                        
                    </ul>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Footer