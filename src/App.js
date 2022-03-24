import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => setValue(event.target.value);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      setValue(event.target.value);
    }
  }

  return (
    <>
      <div>
        Hello World
      </div>
      <Input
        placeholder='Enter a todo'
        buttonText='+ Add Todo'
        onChange={(event) => setValue(event.target.value)}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
        value={value}
      />
    </>
  );
}

export default App;
