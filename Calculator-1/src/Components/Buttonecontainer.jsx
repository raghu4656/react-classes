import styles from "./Buttonecontainer.module.css"
import Buttone from "./Buttones"

function Buttonecontainer(props) {
    return (
        <div className={styles.buttonsContainer}>
            {props.buttones.map((buttone) => {
                return <Buttone buttone={buttone} />
            })}
        </div>

    )
}

export default Buttonecontainer;