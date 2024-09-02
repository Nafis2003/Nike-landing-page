import { Footer,Hero,Services,Subscribe,SuperQuality,SpecialOffers,CustomerReviews,PopularProducts } from "./sections"
import { Nav } from "./components"

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
       <Footer/>
      </section>

    </main>
  )
}