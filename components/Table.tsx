import React from "react";

interface Props {
  title: string;
  data: TableItem[];
}

interface TableItem {
  tokenName: string;
  itoPrice: string;
  recallPrice: string;
  nextRolloverTime: string;
  takenCount: number;
  totalCount: number;
  activeCount: number;
  totalCountCap: number;
  status: string;
}

const TableComponent: React.FC<Props> = (props) => {
  const { title, data = [] } = props;

  return (
    <div className="min-h-[250px]">
      <h2 className="text-3xl text-white text-gradient px-[80px]">{title}</h2>
      <div className="flex px-4">
        <table className="border border-gray-300 m-3 w-full">
          <thead>
            <tr className="text-center">
              <th className="text-white py-2 px-2 border-b text-center ">
                Token Name
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                ITO Price
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                Recall Price
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                Next Rollover Time
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                Taken / Total Count
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                Active / Total
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                Cap
              </th>
              <th className="text-white py-2 px-2 border-b text-center ">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-2 border-b text-left  text-white font-light  text-base text-center ">
                  {item.tokenName}
                </td>
                <td className="py-2 px-2 border-b text-left  text-white font-light text-base text-center ">
                  {item.itoPrice}
                </td>
                <td className="py-2 px-2 border-b text-left  text-white font-light  text-base text-center ">
                  {item.recallPrice}
                </td>
                <td className="py-2 px-2 border-b text-left  text-white font-light  text-base text-center ">
                  {item.nextRolloverTime}
                </td>
                <td className="py-2 px-2 border-b text-left  text-white font-light text-base text-center ">
                  {`${item.takenCount} / ${item.totalCount}`}
                </td>
                <td className="py-2 px-2 border-b text-left  text-white font-light text-base text-center ">
                  {`${item.activeCount} / ${item.totalCount}`}
                </td>
                <td className="py-2 px-2 border-b text-left  text-white font-light text-base text-center ">
                  {item.totalCountCap}
                </td>
                <td
                  className={`py-2 px-2 border-b ${
                    item.status === "Active" ? "text-green-500" : "text-red-500"
                  } text-left  text-white font-light text-base text-center `}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
