// components/ArticleList.js
import React from 'react';

const Article = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.date}</p>
    <p>{post.preview}</p>
  </article>
);

const ArticleList = ({ posts }) => (
  <main>
    {posts.map((post) => (
      <Article key={post.id} post={post} />
    ))}
  </main>
);

export default ArticleList;

