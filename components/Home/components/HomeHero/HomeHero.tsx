import SearchBar from "../../../SearchBar";
import { HomeWrapper } from "./HomeHeroStyle";

export default function HomeHero() {
    const handleSearch = (query: string) => {
        console.log("Buscando por: ", query);
    }
    return (
        <HomeWrapper>
            <div className="title">
                <h1>El mejor Ecommerce</h1>
            </div>
            <div className="search">
                <SearchBar
                    onSearch={handleSearch}
                />
            </div>
        </HomeWrapper>
    )
}