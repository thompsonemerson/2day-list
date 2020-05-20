import React, { useState } from 'react';
import { MdAdd, MdCheck } from 'react-icons/md';

import { Form, Input, Button } from './styles';

export default ({ add }) => {
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');

  const isValid = text.replace(/\s/g,'').length > 3;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (isValid) {
      add(text);
      setText('');
      setOpened(false);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (opened) {
      handleSubmit();
    } else {
      setOpened(true);
      document.querySelector('input').focus();
    }
  }

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') setOpened(false);
  });

  return (
    <>
      <Form opened={opened} onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Add task"
          value={text}
          onChange={({ target }) => setText(target.value)} />
      </Form>

      <Button 
        opened={opened} 
        onClick={handleClick}
        disabled={opened && !isValid}>
        {opened ? (
          <>
            <MdCheck color="#FFF" size={32} />
          </>
        ) : <MdAdd color="#000" size={32} />}
      </Button>
    </>
  )
}
