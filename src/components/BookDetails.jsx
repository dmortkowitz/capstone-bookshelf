import React from 'react';
import PropTypes from 'prop-types';
import $ from '../../node_modules/jquery/dist/jquery';

function BookDetails(props){
  return (
    <div>
      <style jsx>{`
        #shelfList {
        }
              `}
      </style>
      <div>
        <div id='accordian'>
          <div className='card'>
            <div className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                <h3>{props.author} - {props.title}</h3>
              </button>
            </div>
          </div>
            <p><em>{props.description}</em></p>
            <p>This book is {props.pages} pages.</p>
            <hr/>
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
