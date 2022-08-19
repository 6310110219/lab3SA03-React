import React, { useState, useRef, useEffect } from 'react';
import WordCard from './WordCard';
import App from './App';

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.attempt); 
    const levelRef = useRef(props.level);
    
    const activate = () => {
        if(!active) {
            setActive(true)
            props.activationHandler(props.value)    
        }
    }


    useEffect(() => { 
        if(attemptRef.current != props.attempt){
            setActive(false);
            attemptRef.current = props.attempt
        }
        if(levelRef.current != props.level){
            setActive(false);
            levelRef.current = props.level
        }
    })
       


    const className = `card ${active ? 'activeCard': ''}` 

    return (
        <div className={className}>
            <div onClick={activate}> {props.value} </div>
        </div>
            
    );
 
}
