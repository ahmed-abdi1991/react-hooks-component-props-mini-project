// Article.js
import React from "react";

function Article({ title, date, preview }) {
  // Use a default date if no date is provided
  if (!date) {
    date = "January 1, 1970";
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
