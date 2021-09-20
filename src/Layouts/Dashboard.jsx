import React from "react";
import Sidebar from "./SideBar/Sidebar";
import "./Dashboard.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Dashboard() {
  return (
    <div className="w-100 h-100 d-flex flex-wrap">
      <aside>
        <Sidebar />
      </aside>
      <div className="main w-100">
      <header className=" w-100">
        <Header />
      </header>
          12345678910111213141516171819202122223242526272829303132343536373839
      <footer className="w-100">
        <Footer />
      </footer>
      </div>
    </div>
  );
}

export default Dashboard;
