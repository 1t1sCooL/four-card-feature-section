import styles from "./Heading.module.css";

export const Heading = () =>{
    return (
        <section className={styles.heading}>
            <h1>Reliable, efficient delivery</h1>
            <h2>Powered by Technology</h2>
            <p>
                Our Artificial Intelligence powered tools use millions of project data points
                to ensure that your project is successful
            </p>

        </section>
    )
}