import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Title from "../UI/Title";
import { createTodoItem } from "../../store/actions/todo";
import Textarea from "../UI/Textarea";

const CreateTodo = () => {
  const item = {
    name: "Test3",
    date: "15:30",
    time: "05/2/24",
    color: "blue",
    isImportant: true,
    isDone: false,
    description: "sdfs sdf sdfjflkasdf",
  };
  const dispatch = useDispatch();
  const createItemHandler = () => {
    dispatch(createTodoItem(item));
  };
  return (
    <>
      <Title>Create todo</Title>
      <Input type="text" />
      <Input type="date" />
      <Input type="time" />
      <Input type="color" />
      <Input type="checkbox" />
      <Input type="checkbox" />
      <Textarea></Textarea>
      <Button onClick={createItemHandler}>Save</Button>
    </>
  );
};
export default CreateTodo;
