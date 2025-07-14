import Item from "./Items";

const Fooditems = (props) => {
    return (
        <ul className="list-group">
            {props.fooditems.map((item) => {
                return <Item fooditems={item} key={item} />
            }
            )}
        </ul>
    )
};

export default Fooditems;