moonpig JavaScript ReactJS exercise

Platform: built and tested on Linux, can readily port to Windows if required

Usage:

Git clone the repo to target folder

npm install

In webpack.config.js alter absolute path:   path: '/home/leigh/node/moonpig/dist',   to your corresponding /dist output folder

npm run dev

npm run start

Navigate to localhost:3000

There is a screengrabs.docx in the folder to view layout

Build tools: manually built using Babel + Webpack
Config notes: 
Babel presets changed in Babel 7, refer to .babelrc for config
Webpack: loader rules changed in v7, refer to webpack.config
Webpack: CommonsChunkPlugin deprecated in v7 in favour of SplitChunksPlugin, to split App / Vendor bundles
React-router deprecated in favour of react-router-dom
BrowserHistory deprecated in favour of BrowserRouter
React: PropTypes deprecated in favour of prop-types

# App Design notes:
API returned differing order results after a few seconds, hence required to take snap-shot of meta-data and iterate over that

Also duplicates found, if intentional for marketing purposes remove the de-duping within app

CORS resolved without any external packages required, simply /proxy the API call from express, all content appears to be served from the same server. Future calls for additional resources from BrowserRouter as they fall under the same route are all proxied without further issue

Modular components/ composed app with Moonpig header banner component in situe for the nav section, and components 'switched' in depending on route to create SPA

Core functionaily working perfectly in terms of listing products, and selecting an item, code feels clean and well laid out, definitely some changes needed on CSS to ensure all correct for browsers, especially smaller devices/ media queries

Have only tested in dev mode

# To Do

top priority:
prop-types validation

testing/ Jest (if you check my other recent work on github https://github.com/Leigh-M/codewars everything has tests written).

routing: main entry point server by express server, however SPA routing within app done by react-router-dom, there should be pages that can be server for anyone accessing the site externally that wants to view products sent by friends/ book-marked etc. Express routing should map to those external requests we decide should be accessible externally

mid-level priority:
create a component that updates state in App.jsx, pass this through to props of children rather than passing (this) to Xhr component by way of a closure - closure functions as expected but is not the recommended React way of updating state even for initial state and exposes object rather than just a single method, passing a state modifier component better practice

Images do have alt tags, but could further extend accessibility and logical tabbing order through the app

Test coverage to ensure all funcs/ components tested

Consider saving products in state as a Map/ associative array, rather than array, with key as ID, then can just refer to item in passing as props or in sharing/ social media/ emailing links to /card/id more simple link to share

Pagination: input necessary to understand if back/ forward pagination or would infinite type scroller be better?
Search functionality - easy to implement from the meta-data held (filter) can be on keywords or any other field

Examine use case for Higher Order Components to manage composition more easily

Non-urgent:
Hot module replacement for faster dev process
Consider RegisterServiceWorker() for caching improve UX

# Business/ product ideas

 - consider a 'love {product/card}' option which you can save one or several cards for later. I included a 'Love Card' icon
 on the buy-card route to prototype layout. Save in state or cookies there for user's return at later date to find easily
 
 Inspiration is from searching in highstreet stores can grab 3-4 cards and make a decision at the end of the search! 
 Or you may think I have 3 great cards, I'll buy one now, save these in 'My Cards' or 'Love Cards' for future
 Also moonpig could give 'suggestions' based on your 'love' this card options - ie, 'people have also bought'
 
 - consider a ‘Custom Card designer’ - enable customers to design themselves both one-off cards, or if they think they
 have a great idea card that is unique, others may wish to use their template/ idea for say a small fee/ price per use.
 Build in Canvas or similar
