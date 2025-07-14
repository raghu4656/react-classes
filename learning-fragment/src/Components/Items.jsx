import styles from "./Items.module.css";

const Item = ({ fooditems, clickhandeler }) => {
    return (
        <>
            <li className={`list-group-item ${styles["rn-item"]}`} id={fooditems}>
                <span>{fooditems}</span>
                <button onClick={clickhandeler} className={`btn btn-info ${styles.Rsbtn}`}>Buy</button>
            </li>
        </>
    )
}

export default Item;