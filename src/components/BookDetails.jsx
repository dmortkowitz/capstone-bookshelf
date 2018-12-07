import React from 'react';
import PropTypes from 'prop-types';
import $ from '../../node_modules/jquery/dist/jquery';

function BookDetails(props){
  return (
    <div>
      <style jsx>{`
        #shelfList {
          display: none;
        }
              `}
      </style>
      <div>
        <div id='shelfList' className='collapse'>
          <div className='card'>
            <h3>{props.author} - {props.title}</h3>
            <p><em>{props.description}</em></p>
            <p>{props.pages} pages.</p>
            <hr/>
          </div>
        </div>
      </div>
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
