# filterzik

Filter Gandi's tiny winy JSON using Vue.js.

They said :
"Create a quick and dirty but robust small app in the technology of your choice that allow user to filter the following json: "
```
{
  "results": [
    {
      "style": [
        "Grunge"
      ],
      "name": "Nirvana",
      "id": 2028750
    },
    {
      "style": [
        "Heavy Metal"
      ],
      "name": "Motörhead",
      "id": 2028751
    },
    {
      "style": [
        "Rock"
      ],
      "name": "Pink Floyd",
      "id": 2028752
    },
    {
      "style": [
        "Electronic"
      ],
      "name": "Venetian Snares",
      "id": 2028753
    },
    {
      "style": [
        "Hip Hop"
      ],
      "name": "Wu-Tang Clan",
      "id": 2028754
    }
  ]
}
```
This is my take on it.
Data is in src/data.js
Feel free to play with it.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
