import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodoList } from "../../store/actions/todo";
import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";

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
      <Title>Todo list</Title>
      <Button onClick={listHandler}>{buttonText}</Button>
      <Button>
        <Link to={`/new`}>Create Todo</Link>
      </Button>
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
