import React from 'react';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Column from './Column';




function Bookshelf(){
  var mainshelf = {
    width: '100%',
    textAlign: 'center',
  };


  return (
    <div>
      <div>
        <div className='container'>
          <div className='jumbotron' style={mainshelf}>
            <h1>Book Shelf</h1>
            <br />
            <br />
            <h6>See your books!</h6>
          </div>
        </div>
      </div>
      <Column />
    </div>
  );
}


export default Bookshelf;
