import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
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



export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value[0], 1, 1))

    const activationHandler = c =>  { 
        console.log(`${c} has been activated.`)
        
        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length) { 
            if(guess == state.word) {
                console.log('Yeah!')
                setState({...state, level: state.level + 1, guess: '', completed: true})
                if(state.level < 2) {
                    setState(prepareStateFromWord(props.value[state.level], state.level + 1, state.attempt))
                }
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                setState(prepareStateFromWord(props.value[state.level - 1], state.level, state.attempt + 1))
            }
        }
    }
        if(state.level > 2) {
            document.getElementById("WordCard").innerHTML = "";
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
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} level = {state.level} attempt={state.attempt}/>
                    ) 
                }
            </div>
        </div>
    );
}