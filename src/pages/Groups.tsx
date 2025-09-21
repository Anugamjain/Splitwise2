import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const demoGroups = [
  {
    id: 1,
    groupName: "Trip to Goa",
    balance: -500, // negative means you owe
    lastTransaction: "Dinner at beachside cafe",
  },
  {
    id: 2,
    groupName: "Dinner Party",
    balance: 200, // positive means you are owed
    lastTransaction: "Pizza and drinks",
  },
  {
    id: 3,
    groupName: "Office Lunch",
    balance: 0, // balanced
    lastTransaction: "Sushi shared equally",
  },
  {
    id: 4,
    groupName: "Movie Night",
    balance: -150,
    lastTransaction: "Tickets and popcorn",
  },
  {
    id: 5,
    groupName: "Weekend Getaway",
    balance: 300,
    lastTransaction: "Resort booking",
  },
];

const Groups: React.FC = () => {
  const [groupsData, setGroupsData] = useState(demoGroups);
  const navigate = useNavigate();

  const handleNavigate = (groupId: number) => {
    navigate(`/group-transactions/${groupId}`);
  }

  return (
    <div className="m-5 text-center">
      {/* Groups Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Group Expenses</h2>
        <div className="space-y-4">
          {groupsData.map((group) => (
            <div onClick={() => handleNavigate(group.id)} className="p-4 bg-white shadow rounded hover:bg-gray-50 cursor-pointer">
              <h3 className="font-semibold"> {group.groupName} </h3>
              <p className={group.balance < 0 ? "text-sm text-red-500" : "text-sm text-green-500"}>
                {group.balance < 0 ? "You owe " : "You owed"} ₹{Math.abs(group.balance)}</p>
              <p className="text-sm">{group.lastTransaction}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
        +
      </button>
    </div>
  );
};

export default Groups;
