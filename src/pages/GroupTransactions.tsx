import React from "react";
import { useParams } from "react-router-dom";
import Transaction from "../components/Transaction";

const GroupTransactions = () => {
  const {groupId} = useParams();

  return (
    <div>
      {/* header */}
      <div className="text-center">
        <h2 className="font-bold text-xl"> Manali Trip </h2>
        <div>
          <p className="text-red-500"> {`You are owed ₹500`} </p>
        </div>
      </div>
      <div>
        <p> 19 September </p>
        <Transaction data={{}} />
      </div>
    </div>
  );
};

export default GroupTransactions;
