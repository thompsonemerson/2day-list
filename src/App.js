import React, { useEffect, useState } from 'react';
import { get, save } from './localstorage';

import { App, Title } from './styles';

import ProgressBar from './components/ProgressBar';
import List from './components/List';
import Form from './components/Form';

export default () => {
  const [data, setData] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const response = get() || [];
    const removeExpired = response.filter((item) => item.fixed || item.expires >= new Date().getTime());

    setData(removeExpired);
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

  const add = (text, fixed) => {
    const obj = { 
      id: '_' + Math.random().toString(36).substr(2, 9),
      text,
      fixed,
      checked: false,
      expires: new Date().setHours(23, 15, 59)
    };

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
