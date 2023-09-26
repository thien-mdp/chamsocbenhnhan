import React from 'react';
import FormInput from './components/Form';
import Table from './components/Table';


function App() {

  return (
    <div className='mt-14'>
      <p className="my-4 text-3xl font-bold text-center">Quản Lý Bệnh Nhân</p>
      <Table />
      <FormInput />
    </div>
  );
}

export default App;