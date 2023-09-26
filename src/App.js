import React from 'react';
import Table from './components/Table';
import Modal from './components/Modal/Modal';
import useModal from './components/Modal/useModal';


function App() {
  const { isShowing, toggle } = useModal();
  return (
    <div className='my-14 mx-[8vw]'>
      <p className="my-8 text-3xl font-bold text-center">Patient List</p>
      <div className='text-end'>
        <button
          onClick={toggle}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 "
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Thêm bệnh nhân
          </span>
        </button>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      <Table />
    </div>
  );
}

export default App;