import Appname from "./Components/Appname"
import Addtodo from "./Components/Addtodo"
import Tasks from "./Components/Tasks"
import "./App.css";

function App() {

  let todos = [{
    title: "Buy milk",
    date: "2025-02-10"
  }, {
    title: "Buy bread",
    date: "2025-02-11"
  }, {
    title: "Buy eggs",
    date: "2025-02-12"
  }]
  return (
    <>
      <center className="todo-container">
        <Appname />
        <div className="container text-start">
          <Addtodo />
          <Tasks todos={todos} />
        </div>
      </center>
    </>
  )
}

export default App
