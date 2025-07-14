import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./Components/FoodItems"
import Errormessage from "./Components/Erromessage";
import Container from "./Components/Container"
import Foodinput from "./Components/Foodinput";

function App() {
  let fooditems = ['Manish', 'Raghu', "Ankush", 'Raksh', 'Aaysha'];

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <Foodinput />
        <Errormessage fooditems={fooditems} />
        <Fooditems fooditems={fooditems} />
      </Container>
    </>
  )
}

export default App;
