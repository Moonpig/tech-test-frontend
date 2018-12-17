import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './HomePlaceholder';
import App from './App';
import Header from './Header';
import Card from './Card';

const contentNode = document.getElementById('contents');

const Previous = () => (<div className="place-holder">Placeholder for previous</div>);
const Next = () => (<div className="place-holder">Placeholder for next</div>);
const Search = () => (<div className="place-holder">Placeholder for search</div>);
const BuyMe = () => (<div className="place-holder">Placeholder for buy this card!</div>);
const LoveThis = () => (<div className="place-holder">Placeholder for Love this card!
Save to state or cookies</div>);

// <Header /> creates a static nav bar across the app
// Routes are switched into 'contents' div below depending on path tpo create spa

function RoutedApp() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new-job-cards" component={App} />
            <Route path="/previous" component={Previous} />
            <Route path="/next" component={Next} />
            <Route path="/card/:title, :url" exact component={Card} />
            <Route path="/search" component={Search} />
            <Route path="/buy-me" component={BuyMe} />
            <Route path="/love-this" component={LoveThis} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

ReactDOM.render(<RoutedApp />, contentNode);
