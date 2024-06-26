'use client';

import React, { useState } from 'react';

const Bmi: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue);
      setCategory(getBmiCategory(bmiValue));
    }
  };

  const getBmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex justify-between items-center w-full max-w-md mb-4">
          <h1 className="text-2xl font-bold">BMI Calculator</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-blue-300 text-black rounded-lg"
          >
            Switch Mode
          </button>
        </div>
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Weight (kg):
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Enter your weight"
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Height (cm):
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Enter your height"
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </label>
          </div>
          <button
            onClick={calculateBmi}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Calculate BMI
          </button>
          {bmi !== null && (
            <div className="mt-4">
              <h2 className="text-xl text-center font-semibold">Your BMI: {bmi.toFixed(2)}</h2>
              <h3 className="text-lg text-center ">Category: {category}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bmi;
