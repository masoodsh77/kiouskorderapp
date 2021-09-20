import React from "react";
import Sidebar from "./SideBar/Sidebar";
import "./Dashboard.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashMain from "../Routes/dashMain.Routes";

function Dashboard() {
  return (
    <div className="w-100 h-100 d-flex flex-wrap">
      <aside>
        <Sidebar />
      </aside>
      <div className="main w-100">
        <header className="w-100">
          <Header />
        </header>
        <div className="h-100 pt-3">
          {dashMain.map(({ path, exact, Component }, index) => {
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </div>
        <footer className="w-100">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
