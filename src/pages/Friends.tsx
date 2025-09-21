import React, { useState } from "react";

const demoFriends = [
  {
    id: 1,
    name: "John Doe",
    balance: -500, // negative means you owe
    lastTransaction: "Dinner at beachside cafe",
  },
  {
    id: 2,
    name: "Jane Smith",
    balance: 200, // positive means you are owed
    lastTransaction: "Pizza and drinks",
  },
  {
    id: 3,
    name: "Doland Trumph",
    balance: 0, // balanced
    lastTransaction: "Sushi shared equally",
  },
  {
    id: 4,
    name: "Melony",
    balance: -150,
    lastTransaction: "Tickets and popcorn",
  },
  {
    id: 5,
    name: "Palak",
    balance: 1000,
    lastTransaction: "Oyo",
  },
];

const Friends: React.FC = () => {
  const [friendsData, setFriendsData] = useState(demoFriends);

  return (
    <div>
      {/* Individual Expenses Section */}
      <section className="text-center m-5">
        <h2 className="text-2xl font-bold mb-4">Expenses with Friends</h2>
        <div className="space-y-4">
          {friendsData.map((friend) => (
            <div className="p-4 bg-white shadow rounded hover:bg-gray-50 cursor-pointer">
              <h3 className="font-semibold"> {friend.name} </h3>
              <p className={friend.balance < 0 ? "text-sm text-red-500" : "text-sm text-green-500"}>
                {friend.balance < 0 ? "You owe " : "You owed"} ₹{Math.abs(friend.balance)}</p>
              <p className="text-sm">{friend.lastTransaction}</p>
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

export default Friends;
