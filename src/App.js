import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const words = ["hi","by"];
// ["Hello", "Java", "JavaScript", "Python", "C++", "PHP"];
function App() {

   return (
      <div>
         <WordCard value={words}/>
      </div>


 );
}

export default App;

