import React from 'react';

import onlineIcon from '../../icons/online-icon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>RB Instant Messaging App <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Make it Your Private Chat Room          <span role="img" aria-label="emoji">❤️</span></h2>
      <h2 id="try-it">Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <br></br>
            <h2>CHAT MEMBERS:</h2>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;