import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products"  className="max-container">
      <div>
        <h2 className="text-4xl font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-10 leading-normal">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 place-items-center max-sm:gap-4">
         {products.map(product=><PopularProductCard key={product.name} {...product}/>)}
      </div>

    </section>
  )
}

export default PopularProducts;