import styles from "../cards/Cards.module.css";
import {TeamBuilder} from "./TeamBuilder.tsx";
import {Karma} from "./Karma.tsx";

export const TwoCards = () => {
    return (
        <div className={styles.twoCards}>
            <TeamBuilder/>
            <Karma/>
        </div>
    )
}