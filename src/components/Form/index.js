import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { Form, Input, Button } from './styles';

export default ({ add }) => {
  const [text, setText] = useState('');

  const isValid = text.replace(/\s/g,'').length > 3;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      add(text);
      setText('');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Add task"
        value={text}
        onChange={({ target }) => setText(target.value)} />

      <Button 
        type="submit" 
        className={isValid ? 'show':''}>
        <MdAdd color="#FFF" size={32} />
      </Button>
    </Form>
  )
}
