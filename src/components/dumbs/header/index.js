import React from 'react'
import Search from "antd/lib/input/Search";
import { useScrollDirection } from "../../../hooks/useScrollDirection";

export const Header = ({ onSearch }) => {
  const top = useScrollDirection() === "DOWN" ? "-top-24" : "top-0";

  return (
    <div className={`fixed inset-x-0 ${top} z-50 h-24 w-full transition-all duration-500  bg-slate-100 `}>
      <div className="flex h-full w-full flex-row items-center justify-around h-14 px-3 shadow-md shadow-accent/20">
        <Search
          placeholder="Recherche produits"
          onSearch={onSearch}
          style={{
            width: 300
          }}
        />
      </div>
    </div>
  );
};
