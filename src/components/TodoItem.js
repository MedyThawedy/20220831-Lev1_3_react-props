
function fnUpdate() {

}

function fnDelete() {

}


const TodoItem = (props) => {
    return (
        <>
            <li>    <img src={props.img} alt="" />
                {props.todostatus}{props.id}{props.description}
                <button onClick={fnUpdate(props.id)}>Update</button><button onClick={fnDelete(props.id)}>Delete</button></li>
        </>
    );
}

export default TodoItem;