import styles from "./Items.module.css";

const Item = ({ fooditems }) => {
    const clickhandeler = (event) => {
        console.log(`${fooditems} is clicked`)
        console.log(event)

    }
    return (
        <>
            <li className={`list-group-item ${styles["rn-item"]}`} id={fooditems}>
                <span>{fooditems}</span>
                <button onClick={(event) => clickhandeler(event)} className={`btn btn-info ${styles.Rsbtn}`}>Buy</button>
            </li>
        </>
    )
}

export default Item;