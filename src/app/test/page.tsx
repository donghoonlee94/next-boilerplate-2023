import React from 'react';
import axios from 'axios';
import Input from '@/app/test/components/input';

const Test: React.FC = () => {
  axios.get('http://localhost:3000/api/hello').then(response => console.log('API Test', response.data));

  return (
    <div>
      <Input />
    </div>
  );
};

export default Test;
