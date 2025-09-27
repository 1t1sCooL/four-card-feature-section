import styles from './Cards.module.css'
import {Supervisor} from "../card/Supervisor.tsx";
import {TwoCards} from "../card/TwoCards.tsx";
import {Calculator} from "../card/Calculator.tsx";

export const Cards = () =>{
    return (
        <section className={styles.cards}>
            <Supervisor/>
            <TwoCards/>
            <Calculator/>
        </section>
    )
}