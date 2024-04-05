import React, { useState, useEffect } from "react";
import BookCard from "./bookcard"; // Import the BookCard component
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import defaultImage from "/websiteimages/default_book_cover_2015.jpg";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function SearchResults() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("james_bond");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setContent(data);
    } catch (err) {
      console.error("Det har skjedd en feil");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  const handleSubmit = (e) => {
    if (search.length < 3){
        alert("Søket skal være lengre enn 3 tegn")
      }
      else {
        e.preventDefault()
      setQuery(search)
      }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <main>
        <form onSubmit={handleSubmit}>
          <TextField
            id="filled-basic search"
            label="Search"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
        </form>

        <div className="maincontent">
          {isLoading ? (
            <CircularProgress style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
          ) : null}
          {content.docs?.map((item) => (
            <BookCard key={item.key} item={item} defaultImage={defaultImage} />
          ))}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default SearchResults;