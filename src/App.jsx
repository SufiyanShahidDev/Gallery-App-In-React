
import React, { useEffect, useState } from "react";
import GalleryCard from "./components/GalleryCard";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  console.log("limit -->", limit);

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
      );

      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, limit]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">
            📸 Gallery App
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Explore images
          </p>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-5 justify-center flex-wrap">
          {data.length > 0 ? (
            data.map((item) => <GalleryCard data={item} />)
          ) : (
            <div className="flex items-center justify-center min-h-[300px] w-full">
              <p className="text-gray-300 font-semibold text-lg">
                ⏳ Loading...
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer setPage={setPage} setLimit={setLimit} />
    </div>
  );
};

export default App;