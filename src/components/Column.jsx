import React from 'react';
import BookshelfDetails from './BookshelfDetails';
import BookDetails from './BookDetails';


function Column(){
  var caroLayout = {
    width: '80%',
    float: 'center',
    marginLeft: '10%',
  };


  return (
    <div>
      <div style={caroLayout}>

        <BookshelfDetails />

      </div>
    </div>
  );
}


export default Column;
