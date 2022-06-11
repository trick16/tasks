import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Title from "../UI/Title";
import { createTodoItem } from "../../store/actions/todo";
import Textarea from "../UI/Textarea";
import { useState } from "react";

const CreateTodo = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [description, setDescription] = useState("");

  const item = {
    name,
    date,
    time,
    color,
    isImportant,
    isDone,
    description,
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };

  const isImportantChangeHandler = (event) => {
    setIsImportant(event.target.value);
  };

  const isDoneChangeHandler = (event) => {
    setIsDone(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const dispatch = useDispatch();

  const createItemHandler = () => {
    dispatch(createTodoItem(item));
    props.onClose();
  };
  return (
    <>
      <Title>Create todo</Title>
      <Input
        type="text"
        value={name}
        label="Name:"
        labelFor="name"
        onChange={nameChangeHandler}
      />
      <Input
        type="date"
        value={date}
        label="Date:"
        labelFor="date"
        onChange={dateChangeHandler}
      />
      <Input
        type="time"
        value={time}
        label="Time:"
        labelFor="time"
        onChange={timeChangeHandler}
      />
      <Input
        type="color"
        value={color}
        label="Color:"
        labelFor="color"
        onChange={colorChangeHandler}
      />
      <Input
        type="checkbox"
        value={isDone}
        label="Done:"
        labelFor="done"
        onChange={isDoneChangeHandler}
      />
      <Input
        type="checkbox"
        value={isImportant}
        label="Important:"
        labelFor="important"
        onChange={isImportantChangeHandler}
      />
      <Textarea
        value={description}
        label="Description:"
        labelFor="description"
        onChange={descriptionChangeHandler}
      ></Textarea>
      <Button onClick={createItemHandler}>Save</Button>
    </>
  );
};
export default CreateTodo;
