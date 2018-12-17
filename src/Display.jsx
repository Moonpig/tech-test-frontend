import React from 'react';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

// slice used as a 'cursor' able to determine how many items to display for pagination, and the
// offset to start from, or default to splice(0, 20) for demo purposes, alter that number to
// any numerical value to load in the corresponding number of items, should be readily extensible
// for pagination. It would give best UX to have a handler read into memory the next 2-3 groups
// of items automatically so zero apparent delay load time of images & assets for the user

export default function Display(props) {
  const numToDisplay = props.displayNum || 20;
  const offSet = props.offSetNum || 0;
  const prods = props.prodList.slice(offSet, numToDisplay).map(prod => (
    <div className="card" key={prod.id}>
      <div className="img-card">
        <Link to={`card/${prod.title}, ${encodeURIComponent(prod.imgLink)}`}> <img src={prod.imgLink} alt={prod.title} className="img-card" /></Link>
      </div>
      <div className="rating-bottom" id="stars">
        <ReactStars count={5} value={prod.rating} size={18} />
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      {prods}
    </React.Fragment>
  );
}
