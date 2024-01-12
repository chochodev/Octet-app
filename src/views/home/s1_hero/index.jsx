import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

Home.defaultProps = {
  title: 'Home',
  style: ''
};

export default Home;