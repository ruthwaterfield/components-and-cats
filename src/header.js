import React from 'react';

const Header = ({text}) => {
  return (
    <div className={'header'}>
      <h1>{text}</h1>
      <img src='https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif' alt={'Cat Hitting Keyboard'}/>
    </div>
  )
}

export default Header


