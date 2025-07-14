import styles from "./Foodinput.module.css"

const Foodinput = () => {
    const handelonchange = (event) => {
        console.log(event.target.value)
    }

    return <input onChange={handelonchange} className={styles.foodin} type="text" />
}

export default Foodinput;