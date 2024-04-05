import React from "react";
import SearchResults from "./searchresults"; // Import the SearchResults component
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <span>
                <a href="/"><HomeRoundedIcon/>Homepage</a>
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <SearchResults />
    </>
  );
}

export default Layout;
