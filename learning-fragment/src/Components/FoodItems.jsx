import Item from "./Items";

const Fooditems = ({ fooditems }) => {
    const clickhandeler = (item) => {
        console.log(`${item} is clicked`)
    }

    return (
        <ul className="list-group">
            {fooditems.map((item) => {
                return <Item fooditems={item} key={item} clickhandeler={() => clickhandeler(item)} />
            }
            )}
        </ul>
    )
};

export default Fooditems;