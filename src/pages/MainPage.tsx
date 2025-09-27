import "./MainPage.module.css";
import {Footer} from "../shared/ui/Footer.tsx";
import {Heading} from "../widgets/heading/Heading.tsx";
import {Cards} from "../widgets/cards/Cards.tsx";

export const MainPage = () => {
    return (
        <section>
            <Heading/>
            <Cards/>
            <Footer/>
        </section>
    )
}