import React, { useState, useRef, useEffect } from 'react';


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
            setTimeout(function(){
                setActive(false);
                attemptRef.current = props.attempt
            }, 100); 

        }
        if(levelRef.current != props.level){
            setTimeout(function(){
                setActive(false);
                levelRef.current = props.level
            }, 100); 

        }
    })
    

    const className = `card ${active ? 'activeCard': ''}` 
    return (
            <div id = "CharacterCard" className={className}>
                <div onClick={activate}> {props.value} </div>
            </div>

    );
 
}
