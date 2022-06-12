import TodoList from "./pages/TodoList";
import TodoItem from "./pages/TodoItem";
import configureStore from "./store";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const store = configureStore();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path=":todoId" element={<TodoItem />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
