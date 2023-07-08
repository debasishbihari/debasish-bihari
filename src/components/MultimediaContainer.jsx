import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './MultimediaContainer.css.css';

const MultimediaContainer = ({ mediaList, title }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (media) => {
    if (favorites.includes(media)) {
      setFavorites(favorites.filter((item) => item !== media));
    } else {
      setFavorites([...favorites, media]);
    }
  };

  return (
    <div className="multimedia-container">
      <div className="media-container">
        {mediaList.map((media, index) => (
          <div key={index} className="media">
            {media.type === 'image' && (
              <img src={media.url} alt="img" className="media-content" />
            )}
            {media.type === 'video' && (
              <video src={media.url} alt="Video" className="media-content" autoPlay loop muted />
            )}
            {media.type === 'gif' && (
              <img src={media.url} alt="GIF" className="media-content" />
            )}
            <div
              className={`favorite-icon ${favorites.includes(media) ? 'favorited' : ''}`}
              onClick={() => handleFavoriteToggle(media)}
            >
              {favorites.includes(media) ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultimediaContainer;
