import ItemList from "./Itemlist";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };

  return (
    <div className="border-b-2 w-6/12 m-auto">
      <div
        className="flex justify-between my-5 py-3 cursor-pointer bg-slate-100"
        onClick={clickHandler}>
        <span className="pr-5 font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span className="pr-5 font-extrabold">^</span>
      </div>

      <div>{showItems && <ItemList items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
