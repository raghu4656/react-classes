function Errormessage(props) {

    return (
        props.fooditems.length === 0 ? (
            <center><h1>I am still Hungry</h1></center>
        ) : null
    );
}

export default Errormessage;
