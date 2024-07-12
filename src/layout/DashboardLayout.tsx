import { FaBars, FaHome } from "react-icons/fa";
import { MdManageAccounts, MdSportsTennis } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-2"
          className="btn  btn-active btn-ghost drawer-button lg:hidden"
        >
          <FaBars></FaBars>{" "}
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className=" drawer-side lg:bg-[#04211c]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 bg-[#04211c] opacity-50  min-h-full text-xl">
          {/* Sidebar content here */}

          <li className="text-white">
            <NavLink to="/dashboard/add-products">
              <MdSportsTennis />
              Add Products
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/dashboard/manage-products">
              <MdManageAccounts />
              Manage Products
            </NavLink>
          </li>

          <div className="divider divider-neutral"></div>

          <li className="text-white">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
