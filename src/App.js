import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { fetchTodos, todosSelector } from './slices/todos';

import Input from './components/Input';
import Header from './components/Header';
import List from './components/List';

import bannerImg from './assets/banner.jpg';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const { todos, loading, hasErrors } = useSelector(todosSelector);

  const [value, setValue] = useState('');
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  console.log('todos', todos);

  const handleSubmit = (event) => {
    setValue(event.target.value)
    if (value.length) {
      listItems.push({
        todo: value,
        id: uuidv4()
      });
    }
    setListItems(listItems)
  };

  const handleListIconClick = (id) => {
    const newItemsList =  listItems.filter(item => item.id !== id);
    setListItems(newItemsList)
  }

  return (
    <>
      <Header
        bgImage={bannerImg}
        heading='Todo List'
      />
      <Input
        placeholder='Enter a todo'
        buttonText='+ Add Todo'
        onChange={(event) => setValue(event.target.value)}
        handleSubmit={handleSubmit}
        value={value}
      />
      <List
        listItems={listItems}
        onRemove={handleListIconClick}
      />
    </>
  );
}

export default App;
