import React from 'react';
import { Link } from 'react-router-dom';

// ReactStars will be used for star rating

export default function Card(props) {
  const { title, url } = props.match.params;
  const imgUrl = decodeURIComponent(url);

  return (

    <div className="container card-container">
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm6 img-container">
          <img src={imgUrl} alt={title} id="card-img" />
        </div>

        <div className="col-sm-1" />

        <div className="col-sm-3">
          <div className="card-title"><h5>{title}</h5></div>

          <div className="row rating-bottom up-pad">
            <div className="col-sm-3">
              <Link to="/buy-me"><button type="button" className="rating-bottom" style={{ minWidth: '76px', marginRight: '20px' }}>Buy Me!</button></Link>
            </div>
            <div className="col-sm-5" />
            <div className="col-sm-4">
            <Link to="/love-this"><img src="/heart-icon.png" alt="Cards I Love" className="rating-bottom" id="heart-icon" /></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
