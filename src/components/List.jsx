import React from "react";

function List(props) {
  const [isDone, setIsDone] = React.useState(false)
  function handleClick(){
    setIsDone(prevValue => {return !prevValue})
  }
return <li onClick = {handleClick} style = {{textDecoration: isDone?"line-through":null}}>{props.item}</li>;
}

export default List;
