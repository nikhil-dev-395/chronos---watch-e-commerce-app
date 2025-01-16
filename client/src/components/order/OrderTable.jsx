import React from "react";
import { Link } from "react-router-dom";

const OrdersTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto rounded-lg  ">
      <table className="min-w-[90%] rounded-lg table-auto border-collapse    text-left text-sm text-white  ">
        <thead className=" ">
          <tr className="border-t border-gray-700">
            <th className="px-6 py-4 border-b border-gray-700 sticky top-0 z-10 whitespace-nowrap">
              Order Number
            </th>
            <th className="px-6 py-4 border-b border-gray-700 sticky top-0 z-10 whitespace-nowrap">
              Product Name
            </th>
            <th className="px-6 py-4 border-b border-gray-700 sticky top-0 z-10 whitespace-nowrap">
              Date
            </th>
            <th className="px-6 py-4 border-b border-gray-700 sticky top-0 z-10 whitespace-nowrap">
              Product Link
            </th>
            <th className="px-6 py-4 border-b border-gray-700 sticky top-0 z-10 whitespace-nowrap">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-800/50 transition-all duration-200 ease-in-out border-b border-gray-700"
              >
                {/* Order Number */}
                <td className="px-6 py-4 font-bold text-indigo-200 whitespace-nowrap">
                  {order.id}
                </td>

                {/* Product Name */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <h3 className="text-sm text-slate-400 font-semibold">{order.productName}</h3>
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-slate-400 whitespace-nowrap">
                  {order.date}
                </td>

                {/* Product Link */}
                <td className="px-6 py-4 text-slate-400 whitespace-nowrap">
                  <Link
                    to={order.productLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    product link
                  </Link>
                </td>

                {/* Status with Dynamic Color */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-500/10 text-green-500"
                        : order.status === "Pending"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-green-500/10 text-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-slate-400">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
