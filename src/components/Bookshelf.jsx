import React from 'react';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';



function Bookshelf(){
  var mainshelf = {
    width: '100%',
  };


  return (
    <div>
      <div>
        <div className='container'>
          <div className='jumbotron' style={mainshelf}>
            <h3>Layout test 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Bookshelf;
