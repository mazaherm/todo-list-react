import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { fetchTodos, todosSelector } from "./slices/todos";

import Input from "./components/Input";
import Header from "./components/Header";
import List from "./components/List";

import bannerImg from "./assets/banner.jpg";

import "./App.scss";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./slices";

// TODO: need to export this into its own file
const AppWrapper = () => {
  const store = configureStore({ reducer: rootReducer });
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(todosSelector);

  const [value, setValue] = useState("");
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    setListItems(JSON.parse(window.localStorage.getItem("listItems")));
  }, []);

  const handleSuggest = () => {
    setValue(todos.activity);
    dispatch(fetchTodos());
  };

  const handleSubmit = (event) => {
    setValue(event.target.value);
    if (value.length) {
      listItems.push({
        todo: value,
        id: uuidv4(),
      });
    }
    window.localStorage.setItem("listItems", JSON.stringify(listItems));
  };

  const handleClearInput = () => {
    setValue("");
  };

  const handleRemoveItem = (id) => {
    const newItemsList = listItems.filter((item) => item.id !== id);
    window.localStorage.setItem("listItems", JSON.stringify(newItemsList));
    setListItems(newItemsList);
  };

  return (
    <>
      <Header bgImage={bannerImg} heading="Todo List" />
      <Input
        placeholder="Enter a todo"
        buttonText="+ Add Todo"
        onChange={(event) => setValue(event.target.value)}
        handleSubmit={handleSubmit}
        handleSuggest={handleSuggest}
        handleXClick={handleClearInput}
        value={value}
      />
      <List listItems={listItems} onRemove={handleRemoveItem} />
    </>
  );
};

export default AppWrapper;
