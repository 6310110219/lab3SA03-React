import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import App from './App';
import _, { attempt } from 'lodash';
const prepareStateFromWord = (given_word, given_level, given_attempt) => {

    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: given_attempt,
        guess: '',
        completed: false,
        level: given_level
    }
}

let Result = [];

export default function WordCard(props){
    let arrayLength = props.value.length;

    const [state, setState] = useState(prepareStateFromWord(props.value[0], 1, 1))

    const activationHandler = c =>  { 
        console.log(`${c} has been activated.`)
        
        let guess = state.guess + c
        setState({...state, guess})
        if(state.level <= arrayLength) {
            if(guess.length == state.word.length) { 
                if(guess == state.word) {
                    console.log('Yeah!')
                    Result.push(state.attempt)
                    setState({...state, level: state.level + 1, guess: ''})
                    if(state.level < arrayLength) {
                        setState(prepareStateFromWord(props.value[state.level], state.level + 1, 1))

                    }
                }else{
                    console.log('reset, next attempt')
                    setState({...state, guess: '', attempt: state.attempt + 1})
                    setState(prepareStateFromWord(props.value[state.level - 1], state.level, state.attempt + 1))
                }
            }
            
        }

    }

    if(state.level > arrayLength) {
        setTimeout(function(){
            console.log('completed');
            console.log('RESULT:');
            for (let i = 0; i < arrayLength; i++) {
                console.log('Level '+ i + ': attempt = ' + Result[i]);
            }
            alert("Completed!\n you can check attempt in console.log.");
            window.location.reload();
        }, 100); 
                
   
        

        // setState({...state, completed: true})
    }

    return (
        <div id = "WordCard">
            <div>
                <h1 className='head'>DAYS</h1>
                <p className='statusbar'>Level: {state.level}&nbsp; &nbsp; Attempt: {state.attempt}</p>
            </div>
            <div className='parent'>
                { 
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} level = {state.level} attempt={state.attempt} arrayLength = {arrayLength}/>
                    ) 
                }
            </div>
        </div>
    );
}