import styles from "./Items.module.css";

const Item = (props) => {
    const clickhandeler = ({ }) => {

    }
    return (
        <>
            <li className={`list-group-item ${styles["rn-item"]}`} id={props.fooditems}>
                <span>{props.fooditems}</span>
                <button onClick={() => { console.log(`${props.fooditems} being Bough`) }} className={` btn btn-info ${styles.Rsbtn}`}>Buy</button>
            </li>
        </>
    )
}

export default Item;