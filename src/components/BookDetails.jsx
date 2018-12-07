import React from 'react';
import PropTypes from 'prop-types';

function BookDetails(props){
  return (
    <div>
      <h3>{props.author} - {props.title}</h3>
      <p><em>{props.description}</em></p>
      <p>{props.pages} pages.</p>
      <hr/>
    </div>
  );
}


BookDetails.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  pages: PropTypes.number
};


export default BookDetails;
