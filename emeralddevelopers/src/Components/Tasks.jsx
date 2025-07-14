import Todoi1 from "./Todoi1";

function Tasks(props) {
    return (
        props.todos.map((todo) => {
            return <Todoi1 todo={todo} />
        })
    );
}

export default Tasks;