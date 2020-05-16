import React, { useState, useEffect } from 'react';

import { List } from './styles';

import Item from './../ListItem';

export default ({ data, update, remove }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setTodo(data);
  }, [data]);

  const toggleCheck = (id) => {
    let data = todo.map((it) => {
      if (id === it.id) it.checked = !it.checked;
      return it;
    });

    update(data);
  }

  return (
    <List>
      {todo && todo.map((props) => (
        <Item
          {...props}
          key={props.id}
          remove={remove}
          onClick={() => toggleCheck(props.id)}/>
      ))}
    </List>
  )
}
