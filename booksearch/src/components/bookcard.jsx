import React from "react";
import { Button } from "@mui/material";

function BookCard({ item, defaultImage }) {
  return (
    <article key={item.key}>
      <img
        src={item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` : defaultImage}
        alt={item.title}
      />
      <h2>{item.title}</h2>
      <p>{item.first_publish_year}</p>
      <p>{item.author_name}</p>
      <p>{item.ratings_average} of 5</p>
      <Button
        variant="contained"
        target="_blank"
        href={"https://www.amazon.com/s?k=" + item.id_amazon}
      >
        Kjøp boken 🛒
      </Button>
    </article>
  );
}

export default BookCard;