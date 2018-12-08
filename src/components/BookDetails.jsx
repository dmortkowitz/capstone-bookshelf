import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import PropTypes from 'prop-types';



class BookDetails extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render(){
    return (
      <div>
        <style jsx>{`
        #shelfList {
        }
        #contentHide {
          display: none;
        }
              `}
        </style>
        <div>
          <div id='accordian'>
            <div className='card'>
              <div className='mb-0'>
                <button onClick={ () => this.handleClick() }>
                  <h3>{props.author} - {props.title}</h3>
                </button>
              </div>
            </div>
            <span id='contentHide'>
              <p><em>{props.description}</em></p>
              <p>This book is {props.pages} pages.</p>
            </span>
            <hr/>
          </div>
            <span id='contentHide'><p><em>{props.description}</em></p>
            <p>This book is {props.pages} pages.</p></span>
            <hr/>
          </div>
        </div>
      </div>

    );
  }
}

BookDetails.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  pages: PropTypes.number
};


export default BookDetails;
