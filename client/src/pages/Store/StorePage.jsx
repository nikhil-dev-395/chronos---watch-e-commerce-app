import React from "react";
import Store from "../../components/store/Store";

const StorePage = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto  h-auto  py-10">
      {/* location name like amaravati , satara etc */}

      {/* like this compo */}
      <div className="flex flex-col pb-10">
        <h2 className="text-2xl font-semibold capitalize pb-3">amaravati</h2>

        <div className="flex flex-wrap gap-x-3  gap-y-7">
          <Store />
          <Store />
          <Store /> <Store />
          <Store />
          <Store />
        </div>
      </div>

      {/* eg. for satara */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold capitalize pb-3">amaravati</h2>

        <div className="flex flex-wrap gap-x-3 gap-y-7 ">
          <Store />
          <Store />
          <Store />
          <Store /> <Store />
          <Store />
        </div>
      </div>
    </div>
  );
};

export default StorePage;
