import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "tachometer", to: "" },
    { name: "Areas", icon: "map", to: "areas" },
    { name: "Departments", icon: "building", to: "departments" },
    { name: "Customers", icon: "users", to: "customers" },
    { name: "Products", icon: "shopping-cart", to: "products" },
    { name: "Deliveries", icon: "truck", to: "deliveries" },
    { name: "Bills", icon: "credit-card", to: "bills" },
    { name: "Settings", icon: "cog", bottom: true },
    { name: "Profile", icon: "user", bottom: true },
  ];

  return (
    <aside className="w-[250px] h-screen bg-[#1a1a1a]/80 backdrop-blur-md flex flex-col justify-between border-r border-gray-700">
      {/* Logo Section */}
      <div className="flex flex-col items-center py-6 border-b border-gray-700">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-green-600">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-xl font-bold text-white mt-2 tracking-wide">
          AMQL3it
        </h2>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent mt-4 px-3">
        {menuItems
          .filter((item) => !item.bottom)
          .map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={() => setActive(item.name)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 transition-all duration-300 
                ${
                  isActive || active === item.name
                    ? "bg-green-600/90 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`
              }
            >
              <i
                className={`fa fa-${item.icon} text-sm w-5 text-center ${
                  active === item.name ? "text-white" : "text-gray-400"
                }`}
              ></i>
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 px-3">
        {menuItems
          .filter((item) => item.bottom)
          .map((item, index) => (
            <NavLink
              key={index}
              to={item.to || "#"}
              onClick={() => setActive(item.name)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 
                ${
                  isActive || active === item.name
                    ? "bg-green-600/90 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`
              }
            >
              <i
                className={`fa fa-${item.icon} text-sm w-5 text-center ${
                  active === item.name ? "text-white" : "text-gray-400"
                }`}
              ></i>
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
