import React from 'react';

function Box(props) {

    const boxStyle = {
        backgroundColor: props.on ? "#222222" : "#eeeeee",
        border : "1px solid black",
        borderRadius : "10px",
        marginRight : "10px",
        height : "100px",
        width: "100px",
        display : "inline-block"
    }

    
    return (
        <div 
        onClick={()=> props.handleClick(props.id) } 
        style={boxStyle}> </div>
    );
}

export default Box;