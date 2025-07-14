function Todoi1(props) {
    return (
        <div className="row my-2">
            <div className="col-sm-6">
                {props.todo.title}
            </div>
            <div className="col-sm-4">
                {props.todo.date}
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-danger btn-lg">Delete</button>
            </div>
        </div>
    );
}

export default Todoi1;