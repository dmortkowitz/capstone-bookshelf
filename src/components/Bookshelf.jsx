import React from 'react';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



function Bookshelf(){
  var mainshelf = {
    width: '100%',
  };


  return (
    <div>
      <div>
        <div className='container'>
          <div className='jumbotron' style={mainshelf}>
            <Link to='/bookshelf'><h1>Bookshelf</h1></Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Bookshelf;
