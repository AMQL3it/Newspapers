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
    <div className="w-[250px] h-[calc(100vh)] bg-[rgba(35,35,35,0.5)] p-5 flex flex-col justify-between">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-lg font-bold text-white">AMQL3it</h2>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 flex-1 mt-4">
        {menuItems
          .filter((item) => !item.bottom)
          .map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-300
                ${
                  active === item.name
                    ? "bg-green-600 font-semibold text-white"
                    : "bg-[rgba(137,137,137,0.3)] hover:bg-[rgba(137,137,137,0.5)] text-white"
                }`}
            >
              <NavLink
                to={item.to}
                className="flex items-center gap-2 w-full text-white no-underline"
              >
                <i className={`fa fa-${item.icon}`}></i>
                {item.name}
              </NavLink>
            </button>
          ))}
      </div>

      {/* Bottom Menu Items */}
      <div className="border-t border-gray-400 pt-3 flex flex-col gap-2">
        {menuItems
          .filter((item) => item.bottom)
          .map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-300
                ${
                  active === item.name
                    ? "bg-green-600 font-semibold text-white"
                    : "bg-[rgba(137,137,137,0.3)] hover:bg-[rgba(137,137,137,0.5)] text-white"
                }`}
            >
              <i className={`fa fa-${item.icon}`}></i>
              {item.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
