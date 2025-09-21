import React from 'react'

const Transaction = ({data}) => {
   data = {
      description: "Tea",
      paidBy: 'John',
      totalAmount: 500,
      yourBalance: -100
   };
  return (
    <div>
      <div className="space-y-4">
         <div className="flex justify-between p-4 bg-white shadow rounded hover:bg-gray-50 cursor-pointer">
            <div>
               <h3 className="font-semibold"> {data.description} </h3>
               <h4>{`${data.paidBy} paid ${data.totalAmount}`}</h4>
            </div>
            <div>
               <p className={data.yourBalance < 0 ? "text-sm text-red-500" : "text-sm text-green-500"}>
               {data.yourBalance < 0 ? "You owe " : "You owed"} ₹{Math.abs(data.yourBalance)}</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Transaction
