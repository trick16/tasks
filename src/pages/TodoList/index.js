import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteTodoItem, fetchTodoList } from "../../store/actions/todo";

import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";
import Sticker from "../../components/UI/Sticker";
import Modal from "../../components/UI/Modal";
import CreateTodo from "../../components/CreateTodo";

import style from "./style.module.css";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.items);
  const listHandler = () => {
    dispatch(fetchTodoList());
  };
  const deleteHandler = (id) => {
    dispatch(deleteTodoItem(id));
  };

  const [showCreate, setShowCreate] = useState(false);

  useEffect(listHandler, [dispatch]);

  const createHandler = () => {
    setShowCreate(true);
  };
  const closeCreateHandler = () => {
    setShowCreate(false);
  };
  const pending = useSelector((state) => state.todo.pending);
  const buttonText = pending ? "Pending..." : "Update";
  return (
    <div className={style.todo}>
      <Title>Your tasks</Title>
      <Button onClick={createHandler}>Create</Button>
      <Button onClick={listHandler}>{buttonText}</Button>
      {showCreate && (
        <Modal onClose={closeCreateHandler}>
          <CreateTodo></CreateTodo>
        </Modal>
      )}
      <div className={style.todoContainer}>
        {list.map((item) => (
          <Sticker
            onClose={deleteHandler.bind(this, item.id)}
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
