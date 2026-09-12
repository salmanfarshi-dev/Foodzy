import React from "react";
import { Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router";

function Breadcrumb() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className=" py-2">
      <Breadcrumbs aria-label="breadcrumb" separator={<span className="text-white">-</span>}>
        {/* Home */}
        <Link to="/" className="text-white no-underline text-xs md:text-sm hover:text-gray-800 duration-300">
          Home
        </Link>

        {/* Other Paths */}
        {paths.map((path, index) => {
          const route = "/" + paths.slice(0, index + 1).join("/");

          const title = path
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          const isLast = index === paths.length - 1;

          return isLast ? (
            <span key={route} className="text-white text-xs md:text-sm">
              {title}
            </span>
          ) : (
            <Link
              key={route}
              to={route}
              className="text-gray-400 hover:text-primary no-underline text-xl"
            >
              {title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
