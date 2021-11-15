import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ article }) => (
  <article>
    <h1>
      {article.title}
    </h1>
    <span>
      {article.date}
    </span>
    <p>
      {article.text}
    </p>
  </article>
);

Article.propTypes = {
  article: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
