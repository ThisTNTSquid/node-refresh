# Node Refresh
A small node file that allows you to send traffic to target server

## Usage
1. Set the url to the one you wanted to perform stress test on:
`config.js`
```js
module.exports = {
  url: "http://testsite.ml" // Change this line into the target
};

```

2. Launch the script with `npm start` or `yarn start` _(If you have yarn installed)_
1. Stop the script anytime by pressing `Ctrl-C` inside the terminal