import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { get, save } from './localstorage';

import ProgressBar from './components/ProgressBar';
import List from './components/List';
import Form from './components/Form';

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 100;
  color: rgba(0, 0, 0, .2);
  margin-bottom: 32px;
`;

export default () => {
  const [data, setData] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const response = get();
    setData(response);
  }, []);

  useEffect(() => {
    const total = data ? data.length : 0;
    const completed = data ? data.filter((item) => item.checked).length : 0;

    setPercentage(completed / total * 100);
  }, [data])

  const update = (newData) => {
    const response = save(newData);
    setData(response);
  };

  const add = (text) => {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    const obj = { id, text, checked: false };
    const newData = data ? [...data, obj] : [obj];

    const response = save(newData);
    setData(response);
  }

  const remove = (id) => {
    const newData = data.filter((item) => item.id !== id);

    const response = save(newData);
    setData(response);
  }

  return (
    <App>
      <ProgressBar percentage={percentage} />
      <Title>2Day List</Title>
      <List 
        data={data} 
        update={update}
        remove={remove}/>
      <Form add={add} />
    </App>
  );
}
