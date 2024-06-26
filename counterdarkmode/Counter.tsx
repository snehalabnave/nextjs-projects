import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen flex justify-center items-center ${darkMode ? 'bg-black text-blue' : 'bg-white text-black'}`}>
      <div className={`mx-auto p-20 dark:bg-black rounded-lg flex flex-col items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="text-8xl font-bold text-center">{darkMode ? 'Counter' : 'Counter'}</h1>
        <p className="text-7xl mt-6 mb-5 font-bold">{count}</p>
        <div className="flex gap-4 mt-4">
          <button
            className={`px-8 text-2xl font-bold py-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-900'} text-white rounded-md`}
            onClick={increment}
          >
            +
          </button>
          <button
            className={`px-8 text-2xl font-bold py-4 ${darkMode ? 'bg-red-500' : 'bg-red-900'} text-white rounded-md`}
            onClick={decrement}
          >
            -
          </button>
          <button
            className={`px-8 text-2xl font-bold py-4 ${darkMode ? 'bg-yellow-400' : 'bg-yellow-700'} text-white rounded-md`}
            onClick={reset}
          >
            Reset
          </button>
          <button
            className={`px-8 text-2xl font-bold py-2 ${darkMode ? 'bg-green-400' : 'bg-green-900'} text-white rounded-md`}
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
