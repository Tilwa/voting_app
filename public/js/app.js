// import React from 'react';
class ProductList extends React.Component {
    render() {
      return (
        <div className='ui unstackable items'>
          Hello, friend! I am a basic React component.
        </div>
      );
    }
  }

  ReactDOM.render(<ProductList />, document.getElementById('content'));

//   export default ProductList;