import React, { ReactElement } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

function Nav({}: Props): ReactElement {
  const NavMap = [
    {
      id: 0,
      page: "Home",
      route: "/",
    },
    {
      id: 1,
      page: "About",
      route: "#about",
    },
    {
      id: 2,
      page: "Contact",
      route: "#contact",
    },
  ];

  const [nav, setNav] = React.useState<boolean>(false);
  return (
    <>
      <div className="w-full bg-light py-6 px-5 sticky top-0 left-0 z-20 shadow-md">
        <div className="max-w-7xl m-auto flex items-center justify-between ">
          <h2 className="text-3xl text-dark font-extrabold">
            <Link href="/">MG</Link>
          </h2>
          <ul className="flex space-x-8 text-lg md:hidden text-dark">
            {NavMap.map((obj) => {
              return (
                <Link href={`${obj.route}`} key={obj.id}>
                  <li className="cursor-pointer">{obj.page}</li>
                </Link>
              );
            })}
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 hidden cursor-pointer md:block md:cursor-default"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#101124"
            onClick={() => setNav(!nav)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark w-full h-screen m-auto fixed z-30 top-0 flex-col items-end text-center hidden md:flex "
          >
            <motion.div
              className="max-w-max m-4"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: "100%", y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setNav(!nav)}
                className="h-8 w-8 hidden cursor-pointer md:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EEEEEE"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: "100%", y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="flex flex-col w-4/5 m-auto justify-center space-y-9 align-middle text-lg text-dark"
            >
              {NavMap.map((obj) => {
                return (
                  <Link href={`/${obj.route}`} key={obj.id}>
                    <li
                      className="py-3 shadow-md bg-light rounded-md cursor-pointer"
                      onClick={() => setNav(!nav)}
                    >
                      {obj.page}
                    </li>
                  </Link>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
