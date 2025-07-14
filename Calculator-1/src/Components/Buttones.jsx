import styles from "./Buttones.module.css"

function Buttone(props) {
    return <button className={styles.button}> {props.buttone}</ button>
}

export default Buttone