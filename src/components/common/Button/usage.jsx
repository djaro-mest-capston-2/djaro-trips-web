import React from 'react';
import Button from './Button'; // Adjust the import path as necessary

const App = () => {
  return (
    <div className="p-4">
      {/* Basic usage */}
      <Button
        onClick={() =>
          console.log('Button clicked')
        }
      >
        Click Me
      </Button>

      {/* Customized button */}
      <Button
        backgroundColor="bg-green-500"
        textColor="text-white"
        padding="py-3 px-6"
        margin="m-2"
        border="border-2 border-green-700"
        className="hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Custom Button
      </Button>
    </div>
  );
};

export default App;
