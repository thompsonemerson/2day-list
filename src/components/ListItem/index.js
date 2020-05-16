import React from 'react';
import { FiTrash } from 'react-icons/fi';

import { Item, Icon } from './styles';

export default (props) => {
  const remove = (e, id) => {
    e.stopPropagation();
    props.remove(id);
  }

  return (
    <Item 
      {...props} 
      className={props.checked ? 'checked':''}>
      {props.text}
      <Icon onClick={(e) => remove(e, props.id)}>
        <FiTrash color="#FFF" size={16} />
      </Icon>
    </Item>
  )
}
