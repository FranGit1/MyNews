import React from "react";
import img1 from "../assets/1223468480.png";
interface NewsItemProps {}

export const NewsItem: React.FC<NewsItemProps> = ({}) => {
  return (
    <div className="bg-white shadow rounded-md h-full">
      <img src={img1} alt="" className="rounded-t-xl  h-40 w-96 object-cover" />
      <div className="p-3">
        <span className="text-sm font-semibold text-blue-500">TECH</span>
        <h3 className="font-bold mb-4 ">V7 Digital Photo Printing</h3>
        <p className="mb-4 text-xs max-w-xs">Caroline Parsons</p>
      </div>
    </div>
  );
};
export default NewsItem;
