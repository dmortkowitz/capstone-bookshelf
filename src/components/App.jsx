import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookshelf from './Bookshelf';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      {<Switch>
        <Route exact path='/' component={Bookshelf} />
      </Switch> }
    </div>
  );
}



export default App;
