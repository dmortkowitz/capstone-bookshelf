import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './Mainpage';

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
      bookshelf-cap-proj
      {<Switch>
        <Route exact path='/' component={Mainpage} />
      </Switch> }
    </div>
  );
}

//App.propTypes = {
//};

export default App;
