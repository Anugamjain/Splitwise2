import React, { useState } from "react";

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

  return (
    <div className="container mx-auto p-4">
      {/* Groups Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Groups</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Trip to Goa</h3>
            <p className="text-sm text-red-500">You owe ₹500</p>
          </div>
          <div className="p-4 bg-white shadow rounded hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Dinner Party</h3>
            <p className="text-sm text-green-500">You are owed ₹200</p>
          </div>
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
