import React from 'react';
import BookshelfDetails from './BookshelfDetails';


function Column(){
  var caroLayout = {
    width: '80%',
    float: 'center',
    marginLeft: '10%',
  };


  return (
    <div>
      <div style={caroLayout}>
        <div className='card'>
          <BookshelfDetails />
        </div>
      </div>
    </div>
  );
}


export default Column;
