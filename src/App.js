import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const words = ["Hello", "Java", "JavaScript", "Python", "C++", "PHP"];
function App() {
   let nextWord = 0

   // if(props.nextLevel == 2) {
   //    nextWord = 1  
   // }
   // else if(props.nextLevel == 3) {
   //     nextWord= 2
   // }

   return (
      <div>
         <div>
               <WordCard value={words}/>
         </div>
      </div>


 );
}

export default App;

