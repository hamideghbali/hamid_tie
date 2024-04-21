import React, { useEffect } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const navMenus = [
  {
    name: "Home",
    link: "/Home",
  },

  {
    name: "About",
    link: "/About",
  },

  {
    name: "Services",
    link: "/Services",
  },

  {
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [ShowMenu, setShowMenu] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const toggleMenu = () => {
    setShowMenu(!ShowMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl text-primary font-bold">Portfolio</h1>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden">
            <div className="flex items-center gap-4">
              {/* Theme toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}

              <FiMenu
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            </div>

            {ShowMenu && (
              <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl z-10 py-10">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((menu) => (
                    <li
                      key={menu.name}
                      className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer dark:text-white"
                    >
                      <a href={menu.link}>{menu.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
