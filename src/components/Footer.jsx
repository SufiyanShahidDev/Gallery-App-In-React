import React from "react";

const Footer = ({ setPage, setLimit }) => {
  return (
    <footer className="bg-blue-900 border-t border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-4 text-white font-semibold">
          <h1>Pages</h1>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                onClick={(e) => setPage(e.target.innerText)}
                className="w-9 h-9 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer transition"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <select
          onChange={(e) => setLimit(e.target.value)}
          className="w-[110px] px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 outline-none cursor-pointer focus:border-gray-500"
        >
          <option selected value="10">
            8
          </option>
          <option value="25">25</option>
          <option value="50">
            50
          </option>
          <option value="100">100</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;