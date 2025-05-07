import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function SelectAdd_details({ addressdata, addressType, prvPage }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold">
          Delivery Address
          <span className="ml-6">
            <CheckCircleIcon className="text-green-600" />
          </span>
        </p>

        <button
          className="flex justify-end font-bold text-[#f84260]"
          onClick={prvPage}
        >
          CHANGE
        </button>
      </div>
      <div className="mt-5">
        <p className="font-bold">{addressType}</p>
        <p>{addressdata}</p>
      </div>
    </div>
  );
}

export default SelectAdd_details;
