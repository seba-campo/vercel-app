import SearchBar from "../../../SearchBar";
import { HomeWrapper } from "./HomeHeroStyle";

export default function HomeHero() {
    return (
        <HomeWrapper>
            <div className="title">
                <h1>El mejor Ecommerce</h1>
            </div>
            <div className="search">
                <SearchBar />
            </div>
        </HomeWrapper>
    )
}