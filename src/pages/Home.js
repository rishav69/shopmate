import { useTitle } from "../hooks/useTitle"
import { ProductCard } from "../components";

export const Home = (title) => {
  useTitle("home");
  const products = [
    {"id": 1, "name": "Cetafill Moisturizer", "price": 149, "image": "/assets/images/creame.jpg"},
    {"id": 2, "name": "Camera lens Canon", "price": 49, "image": "/assets/images/lens.jpg"},
    {"id": 3, "name": "Baby lips", "price": 179, "image": "/assets/images/lipstick.jpg"},
    {"id": 4, "name": "Blue de femine", "price": 39, "image": "/assets/images/perfume.jpg"},
    {"id": 5, "name": "Abibas 200", "price": 199, "image": "/assets/images/shoes.jpg"},
    {"id": 6, "name": "Omega Speedmaster", "price": 29, "image": "/assets/images/watch.jpg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard  product={product} />
        )) }        
      </section>
    </main>
  )
}