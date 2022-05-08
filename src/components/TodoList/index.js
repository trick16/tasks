import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodoList } from "../../store/actions/todo";
import Button from "../UI/Button";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.items);
  const listHandler = () => {
    dispatch(fetchTodoList());
  };
  const pending = useSelector((state) => state.todo.pending);
  const buttonText = pending ? "Pending..." : "Renew List";
  return (
    <div>
      <Button onClick={listHandler}>{buttonText}</Button>

      {list.map((item) => (
        <div key={item.id}>
          <Link to={`/${item.id}`}>
            <span>{item.name}</span>
          </Link>
          <span>{item.birth_year}</span>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
