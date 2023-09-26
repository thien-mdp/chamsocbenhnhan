import React from "react";

const Table = () => {
  return (
    <div className="mx-[10vw]">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr className="uppercase">
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Họ lót
              </th>
              <th scope="col" className="px-6 py-3">
                Tên
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày sinh
              </th>
              <th scope="col" className="px-6 py-3">
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
              <th scope="col" className="px-6 py-3">
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
              <td className="px-6 py-4">13/12/2000</td>
              <td className="px-6 py-4">Đà Nẵng</td>
              <td className="px-6 py-4">200008888888</td>
              <td className="px-6 py-4">BHYT123J99</td>
              <td className="px-6 py-4">
                This HTML file is a template. If you open it directly in the browser, you will see an empty page. You
                can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts
                into the tag. To begin the development, run `npm start` or `yarn start`. To create a production bundle,
                use `npm run build` or `yarn build`.
              </td>
              <td className="px-6 py-4">1/1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
