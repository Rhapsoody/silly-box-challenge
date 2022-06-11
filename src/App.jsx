import React, {useState} from 'react'
import Box from "./Box"
import boxes from "./boxes"

function App() {

  const [squares, setSquares] = useState(boxes);

  function toggle(id){
        setSquares(
          prevSquares => { 
            return prevSquares.map( (square) =>  { 
                return square.id === id ? {...square, on: !(square.on)} : square
              });
          });
  }


  const boxList = squares.map(box => ( 
    <Box 
      key={box.id} 
      id = {box.id}
      on={box.on} 
      handleClick = {toggle}
      />)
  );





  return (
    <>
        {boxList}
    </>
  )
}

export default App