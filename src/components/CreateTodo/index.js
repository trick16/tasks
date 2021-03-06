import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Title from "../UI/Title";
import style from "./style.module.css";
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
    // setName("");
    // setDate("");
    // setDescription("");
    // setColor("");
    // setTime("");
    // setIsDone(false);
    // setIsImportant(false);
    props.onClose();
  };
  return (
    <>
      <Title>Create todo</Title>
      <Input
        type="text"
        value={name}
        label="Name:"
        id="name"
        onChange={nameChangeHandler}
      />
      <Textarea
        value={description}
        label="Description:"
        id="description"
        onChange={descriptionChangeHandler}
      ></Textarea>
      <div className={style.container}>
        <Input
          type="date"
          value={date}
          label="Date:"
          id="date"
          onChange={dateChangeHandler}
        />
        <Input
          type="time"
          value={time}
          label="Time:"
          id="time"
          onChange={timeChangeHandler}
        />
        <Input
          type="color"
          value={color}
          label="Color:"
          id="color"
          onChange={colorChangeHandler}
        />
        <Input
          type="checkbox"
          value={isDone}
          label="Done:"
          id="done"
          onChange={isDoneChangeHandler}
        />
        <Input
          type="checkbox"
          value={isImportant}
          label="Important:"
          id="important"
          onChange={isImportantChangeHandler}
        />
      </div>
      <Button onClick={createItemHandler}>Save</Button>
    </>
  );
};
export default CreateTodo;
