import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Item from './ListItem';

const List = styled.ul`
  display: block;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

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
      {todo && todo.map(({ id, title, checked }) => (
        <Item 
          key={id}
          id={id}
          checked={checked}
          remove={remove}
          onClick={() => toggleCheck(id)}>
          {title}
        </Item>
      ))}
    </List>
  )
}
