import React from 'react';

const JoinUs = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

JoinUs.defaultProps = {
  title: 'Join Us',
  style: ''
};

export default JoinUs;