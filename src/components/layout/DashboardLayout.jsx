import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdHome,
  MdHomeFilled,
  MdContacts,
  MdMenu,
  MdClose
} from "react-icons/md";

function DashboardLayout(props) {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  const large = window.matchMedia("(min-width: 768px)");

  const handleResponsive = () => {
    if (large.matches) {
      // console.log("Desktop")
      setShowNav(true);
    } else{
      setShowNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResponsive, true);

    return () => {
      window.removeEventListener("resize", handleResponsive);
    };
  });


  useEffect(() => {
    if(!large.matches){
      setShowNav(false);
    }
  }, [location]);

  console.log(showNav)

  return (
    <div id="dashboard">
      <nav id="sidebar">
        <div className="header">
          <h1>OMNIBIZ</h1>
          <button className="menu" onClick={() => setShowNav(true)}>
            <MdMenu />
          </button>
        </div>

        {showNav && (
          <ul>
            <button className="menu_close" onClick={() => setShowNav(false)}>
              <MdClose />
            </button>
            <li>
              <NavLink to="/" activeClassName="active">
                <div className="icon">
                  <MdHome />
                </div>

                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-contact" activeClassName="active">
                <div className="icon">
                  <MdContacts />
                </div>

                <p>Add Contacts</p>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
      <main id="main">{props.children}</main>
    </div>
  );
}

export default DashboardLayout;
