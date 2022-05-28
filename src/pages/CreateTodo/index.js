import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Title from "../../components/UI/Title";
import { createTodoItem } from "../../store/actions/todo";

const CreateTodo = () => {
  const item = {
    name: "todo2",
    data: "3435",
    color: "blue",
    important: false,
    description: "asdf",
  };
  const dispatch = useDispatch();
  const createItemHandler = () => {
    dispatch(createTodoItem(item));
  };
  return (
    <>
      <Title>Create todo</Title>
      <Input type="text" />
      <Button onClick={createItemHandler}>Create Todo</Button>
    </>
  );
};
export default CreateTodo;
