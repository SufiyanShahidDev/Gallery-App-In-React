import React from "react";

const GalleryCard = ({ data }) => {
  return (
    <div className="bg-blue-950 border border-gray-800 rounded-2xl p-3 w-full sm:w-[280px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <img
        src={data.download_url}
        alt=""
        className="w-full h-[180px] object-cover rounded-xl"
      />

      <div className="pt-3 px-1">
        <h2 className="font-semibold text-white text-lg text-center truncate">
          👤 {data.author}
        </h2>
      </div>
    </div>
  );
};

export default GalleryCard;