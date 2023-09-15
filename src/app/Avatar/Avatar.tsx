import React from 'react';
import './Avatar.css';

interface AvatarProps {
  imageUrl: string;
  initials: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, initials }) => {
  return (
    <div className="avatar">
      <div className="avatar-circle">
        <img src={imageUrl} alt="Avatar" className="avatar-image" />
      </div>
      <div className="initials">{initials}</div>
    </div>
  );
};

export default Avatar;
