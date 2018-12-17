import React from 'react';

export default function Header() {
  return (
    <div className="App">
      <div className="container">

        <div className="row justify-content-center align-items-center" id="nav">

          <div className="col-sm-4" />
          <div className="col-sm-4 text-center">
            <img src="/moonpig-logo.png" alt="moonpig logo" />
          </div>
          <div className="col-sm-4 text-center text-lg-right">
            {/* Todo: implement search routing */}
            <a href="search/"><img src="/search_icon.png" alt="search icon" id="search" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
