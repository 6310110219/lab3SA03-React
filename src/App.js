import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";
function App() {
   return (
      <div>
         <div>
               <WordCard value={word}/>
         </div>
      </div>
      

 );
}

export default App;

