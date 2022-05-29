import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodoList } from "../../store/actions/todo";
import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";
import Sticker from "../../components/UI/Sticker";
import style from "./style.module.css";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.items);
  const listHandler = () => {
    dispatch(fetchTodoList());
  };
  const pending = useSelector((state) => state.todo.pending);
  const buttonText = pending ? "Pending..." : "Renew List";
  return (
    <div className={style.todo}>
      <Title>Your tasks</Title>
      <Button onClick={listHandler}>{buttonText}</Button>
      <Button>
        <Link to={`/new`}>Create Todo</Link>
      </Button>
      <div className={style.todoContainer}>
        {list.map((item) => (
          <Sticker
            key={item.id}
            name={item.name}
            description={item.description}
            color={item.color}
            date={item.date}
            time={item.time}
            isDone={item.isDone}
            isImportant={item.isImportant}
            created={item.created}
          ></Sticker>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
