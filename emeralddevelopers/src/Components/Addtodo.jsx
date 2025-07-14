function Addtodo() {
    return (
        <div className="row my-4">
            <div className="col-sm-6">
                <input type="text" name="general" id="" placeholder="Enter To do Task" />
            </div>
            <div className="col-sm-4">
                <input type="date" ame="general" id="" />
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-success btn-lg">Add</button>
            </div>
        </div>
    )
}

export default Addtodo;