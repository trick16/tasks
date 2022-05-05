import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../store/actions/todo";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.items);
  const listHandler = () => {
    dispatch(fetchTodoList());
  };
  const pending = useSelector((state) => state.todo.pending);
  return (
    <div>
      <button onClick={listHandler}>List</button>

      <span>{pending.toString()}</span>
      {list.map((item) => (
        <div key={item.url}>
          <span>{item.name}</span>
          <span>{item.birth_year}</span>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
