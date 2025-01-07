import { NewReleasesIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";

const Assured = ({ to }) => {
  return (
    <>
      <small className="text-green-600 uppercase flex items-center gap-3 ">
        assured <NewReleasesIcon style={{ width: 16, height: 16 }} />
        <span className="text-yellow-600 capitalize">
          <Link to={to}>nikhil wankhade</Link>
        </span>
      </small>
    </>
  );
};

export default Assured;
