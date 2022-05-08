import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodoItem } from "../../store/actions/todo";

const TodoItem = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoItem(params.todoId));
  }, [dispatch, params.todoId]);
  const state = useSelector((state) => state.todo);
  console.log(state);

  return <h2>My id {params.todoId}</h2>;
};
export default TodoItem;
