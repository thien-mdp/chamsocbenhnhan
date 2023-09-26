import React from "react";

const Table = () => {
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
            placeholder="Tìm kiếm bệnh nhân"
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
            </tr>
          </thead>
          <tbody>
            <tr className="overflow-auto bg-white border-b max-h-20">
              <td className="px-6 py-4 font-medium text-gray-900">1</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Mai Đức Phong
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">Thiên</td>
              <td className="px-6 py-4 ">13/12/2000</td>
              <td className="px-6 py-4 ">Đà Nẵng</td>
              <td className="px-6 py-4 ">200008888888</td>
              <td className="px-6 py-4 ">BHYT123J99</td>
              <td className="px-6 py-4 ">
                This HTML file is a template. If you open it directly in the browser, you will see an empty page. You
                can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts
                into the tag. To begin the development, run `npm start` or `yarn start`. To create a production bundle,
                use `npm run build` or `yarn build`.
              </td>
              <td className="px-6 py-4 ">1/1</td>
            </tr>
            <tr className="overflow-auto bg-white border-b max-h-20">
              <td className="px-6 py-4 font-medium text-gray-900">2</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Mai Đức Phong
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">Thiên</td>
              <td className="px-6 py-4 ">13/12/2000</td>
              <td className="px-6 py-4 ">Đà Nẵng</td>
              <td className="px-6 py-4 ">200008888888</td>
              <td className="px-6 py-4 ">BHYT123J99</td>
              <td className="px-6 py-4 ">
                This HTML file is a template. If you open it directly in the browser, you will see an empty page. You
                can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts
                into the tag. To begin the development, run `npm start` or `yarn start`. To create a production bundle,
                use `npm run build` or `yarn build`.
              </td>
              <td className="px-6 py-4 ">1/1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
