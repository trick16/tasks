import TodoList from "./components/TodoList";
import configureStore from "./store";
import "./App.css";
import { Provider } from "react-redux";
const store = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
