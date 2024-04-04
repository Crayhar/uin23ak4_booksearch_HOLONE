import "./App.css";
import Layout from "./components/Layout";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james_bond")
  const [currentId, setCurrentId] = useState("")

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
      const data = await response.json()
      setContent(data.results)
    }catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(()=>{
    getData()
    setCurrentId(localStorage.getItem("karakterID"))
  },[query])

  console.log(query)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <header>
          <nav>
            <ul>
              {/* TODO: Endre til <Li> med <Link to="" senere*/}
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <TextField
            id="filled-basic"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />

          <div className="maincontent">
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button
                variant="contained"
                target="_blank"
                href="https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/030788743X/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.nFmxLIMGhmsl_66n6fi2ImNG89D7djOIoitfw4A-BVg2E_9KzmdZI06t9SGb8JWhQhw3eEhAjwr4PZzqxAKkaPMq-boxNbXgYJBgPuo2AcZLfjcKVNNQ3Pg1RJ-qEyf11dnLk45cOOYvrUIrgkgWt_D29N6kznyUk8JXF7Uu5tK_byrdi3K__FgqqtxKOXQGNmMn4mZwg8pkQsfTuy8e0L3pY00MaL1uP0k3xT1SZUU.mX1XY-k9-f4-s1wU6zdTPadCUHF90a7jgrAAlxU9q38&qid=1712263796&sr=8-1"
              >
                Amazon
              </Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
            <article>
              <img src="/websiteimages/0008270105-L.jpg" alt="bilde" />
              <h2>Ready Player One</h2>
              <p>Release Year: 2011</p>
              <p>Author: Ernest Cline</p>
              <p>Rating: 4.04</p>
              <Button variant="contained">Amazon</Button>
            </article>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
