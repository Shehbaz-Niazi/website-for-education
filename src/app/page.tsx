
import Wrapper from "@/components/Shared/Wrapper";
import Banner from "@/components/Widgets/Banner";
import CoursesCartsSection from "@/components/Widgets/CoursesCartsSection";
import Footer from "@/components/Widgets/Footer";
import Testtinomial from "@/components/Widgets/Testtinomial";
import UpdateAndOfferPage from "@/components/Widgets/UpdateAndOfferPage";
import WhatWeOffer from "@/components/Widgets/WhatWeOffer";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
  <Wrapper>
      <Banner/>
      <WhatWeOffer/>
      <CoursesCartsSection/>
      <Testtinomial/>
      <UpdateAndOfferPage/>
      <Footer/>

  </Wrapper>
    </main>
  )
}
