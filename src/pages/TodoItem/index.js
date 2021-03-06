import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Title from "../../components/UI/Title";
import { fetchTodoItem } from "../../store/actions/todo";

const TodoItem = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoItem(params.todoId));
  }, [dispatch, params.todoId]);
  const item = useSelector((state) =>
    state.todo.items.find((item) => item.id === params.todoId)
  );
  if (!item) return null;

  return (
    <div>
      <Title>Todo details</Title>
      <h2>My id {params.todoId}</h2>
      <dd>Todo name</dd>
      <dt>{item.name}</dt>
      <dd>Todo description</dd>
      <dt>{item.description}</dt>
    </div>
  );
};
export default TodoItem;
