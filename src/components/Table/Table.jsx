import React from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../firebase";
import moment from "moment/moment";

const Table = ({ loading, isShowing, hide, setEdit, setDataCurrent }) => {
  const [data, setData] = React.useState([]);

  const [lastNameFilter, setLastNameFilter] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleFilterChange = (event) => {
    setLastNameFilter(event.target.value);
  };
  const handleUpdateClick = (item) => {
    hide();
    setEdit(true);
    setDataCurrent(item);
  };
  React.useEffect(() => {
    const getData = async () => {
      try {
        const colRef = collection(db, "patient");
        let documentSnapshots;
        documentSnapshots = await getDocs(query(colRef));
        // documentSnapshots = await getDocs(query(colRef, limit(10)));

        const getData = documentSnapshots.docs.map((doc) => doc.data());

        // Lọc dữ liệu dựa trên lastNameFilter
        const filteredData = lastNameFilter
          ? getData.filter((item) => item.lastName.toLowerCase().includes(lastNameFilter.toLowerCase()))
          : getData;

        if (filteredData) {
          filteredData.sort((a, b) => a.id - b.id);
          setData(filteredData);
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    getData();
  }, [loading, lastNameFilter]);

  return (
    <div className="">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tìm kiếm bệnh nhân theo tên"
            value={lastNameFilter}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr className="uppercase">
              <th scope="col" className="px-6 py-3 max-w-[50px]">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Họ lót
              </th>
              <th scope="col" className="px-6 py-3">
                Tên
              </th>
              <th scope="col" className="px-6 py-3 min-w-[140px]">
                Ngày sinh
              </th>
              <th scope="col" className="px-6 py-3 min-w-[140px]">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Số CCCD
              </th>
              <th scope="col" className="px-6 py-3">
                Số BHYT
              </th>
              <th scope="col" className="px-6 py-3">
                Chuẩn đoán
              </th>
              <th scope="col" className="px-6 py-3 min-w-[145px]">
                Ngày vào viện
              </th>
              <th scope="col" className="px-6 py-3 min-w-[50px]"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className="overflow-auto bg-white border-b max-h-20">
                <td className="px-6 py-4 font-medium text-gray-900">{index + 1 + indexOfFirstItem}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.firstName}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900">{item.lastName}</td>
                <td className="px-6 py-4 ">{moment(item.birthday).format("DD/MM/YYYY")}</td>
                <td className="px-6 py-4 ">{item.address}</td>
                <td className="px-6 py-4 ">{item.cccd}</td>
                <td className="px-6 py-4 ">{item.BHYT}</td>
                <td className="px-6 py-4 ">{item.chuandoan}</td>
                <td className="px-6 py-4 ">{moment(item.ngaynhapvien).format("DD/MM/YYYY")}</td>
                <td className="px-6 py-4 text-blue-500" onClick={() => handleUpdateClick(item)}>
                  Chi tiết
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end m-4">
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "bg-blue-800" : "bg-blue-500"
            } px-2 py-1 mr-2 text-sm text-white bg-blue-500 rounded-md`}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={indexOfLastItem >= data.length}
            className={`${
              indexOfLastItem >= data.length ? "bg-blue-800" : "bg-blue-500"
            } px-2 py-1 mr-2 text-sm text-white bg-blue-500 rounded-md`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
