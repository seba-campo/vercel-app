import HomeHero from "./components/HomeHero/HomeHero"
import { FeaturedProducts } from "./components/FeaturedProducts/FeaturedProducts"

export default function HomePage() {
    return (
        <div>
            <HomeHero />
            <FeaturedProducts />
        </div>
    )
}