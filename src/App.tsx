import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Expenses from "./pages/Expenses";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import GroupTransactions from "./pages/GroupTransactions";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/group-transactions/:groupId" element={<GroupTransactions/>}/>
          <Route path="/friends" element={<Friends />} />
          <Route path="/my-expenses" element={<Expenses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
