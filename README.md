# Sample Hotels List and Hotel Data

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)]()

#### Setup and Run :runner:

```bash
git clone --depth=1 https://github.com/dhruvdutt/sample-list && cd sample-list
npm i && npm start
```

#### Folder structure

```
.
└── [repo]
    ├── src                               // source folder
    |   ├── actions
    |   |   ├── hotels.js                 // redux actions, dispatchers
    |   |   ├── types.js                  // action types
    |   |   ├── index.js
    |   ├── reducers
    |   |   ├── hotels.js                 // store hotels data, prices
    |   |   ├── hotelsMeta.js             // store hotel policies, essentials
    |   |   ├── index.js
    |   ├── containers
    |   |   ├── App.js                    // main app container
    |   |   └── HotelsList.js             // hotels list page
    |   |   └── HotelDetails.js           // hotel details page to show types
    |   ├── components
    |   |   ├── DetailsCard.js            // room details card
    |   |   ├── Essential.js              // room essential
    |   |   ├── ListCardItem.js           // hotels list card item
    |   |   ├── NavHeader.js              // top nav header
    |   |   ├── Policy.js                 // room policy
    |   |   ├── PriceCard.js              // room type and price card
    |   |   ├── SoldOut.js                // all room sold out
    |   |   └── index.js
    |   ├── config.js
    |   ├── configureStore.js
    |   ├── index.js
    ├── public                            // public folder
    |   ├── index.html                    // root HTML file
    ├── build                             // build folder
    ├── package.json
```
