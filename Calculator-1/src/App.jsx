import styles from "./App.module.css"
import Input from "./Components/Input"
import Buttonecontainer from "./Components/Buttonecontainer"

function App() {
  let buttonsvalue = ["c", 1, 2, "+", 3, 4, "-", 5, 6, "*", 7, 8, "/", "=", 9, 0, "."]
  return (
    <>
      <div className={styles.calculator}>
        <Input />
        <Buttonecontainer buttones={buttonsvalue} />
      </div>
    </>
  )
}

export default App