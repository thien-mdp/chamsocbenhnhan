import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Modal from './components/Modal/Modal';
import useModal from './components/Modal/useModal';


function App() {
  const [loading, setLoading] = useState(false);
  const [dataCurrent, setDataCurrent] = useState();
  const [edit, setEdit] = useState(false);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    setDataCurrent()
  }, [edit])

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
        loading={loading}
        setLoading={setLoading}
        edit={edit}
        setEdit={setEdit}
        dataCurrent={dataCurrent}
      />
      <Table loading={loading} isShowing={isShowing}
        hide={toggle} setEdit={setEdit} setDataCurrent={setDataCurrent} />
    </div>
  );
}

export default App;