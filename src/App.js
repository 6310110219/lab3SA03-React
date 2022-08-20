import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const words = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function App() {

   return (
      <div>
         <WordCard value={words}/>
      </div>

 );
}

export default App;

