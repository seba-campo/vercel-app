import { Router } from "next/router";
import SearchBar from "../../../SearchBar";
import { HomeWrapper } from "./HomeHeroStyle";
import { useRouter } from "next/router";

export default function HomeHero() {
    const router = useRouter();
    const handleSearch = (query: string) => {
        router.push(`/search?q=${query}`);
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