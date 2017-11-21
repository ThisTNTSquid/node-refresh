# Node Refresh
A small node file that allows you to send traffic to target server

## Prerequisite
* ~~A Computer~~
* **Node.js** (LTS version or Latest version are both fine)
* **NPM** or **Yarn** package manager installed
## Usage

1. Clone/download the project and then do 
 ```bash
 $ yarn
 # or
$ npm install
 ```
 This will download the dependencies required for this script (If you are curious on what dependencies are used, you may look it up inside `package.json`)

2. Set the url to the one you wanted to perform stress test on:

`config.js`
```js
module.exports = {
  url: "http://testsite.ml" // Change this line into the target
};

```

3. Launch the script with `npm start` or `yarn start` _(If you have yarn installed)_

4. Stop the script anytime by pressing `Ctrl-C` inside the terminal