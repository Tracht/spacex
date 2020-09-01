# SpaceX!

### Task
Build a React app with the functionality that meets the following requirements:
* Fetch and render a list of rockets or dragons from [SpaceX's API](https://docs.spacexdata.com/).
* Show extended information about a selected list item in a separate box, modal or page.
* You have complete freedom over what the UI looks like

### TechStack 
- [React](https://github.com/facebook/create-react-app)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
- Note: this project takes a class-based approach in designing components. 

### To do list
- Reafactor and consolidate API fetch request (currently setDragon & setRocket)
- Add tests
- UI improvements (i.e. use modal for CardFull component)

### Installation Guide 
- Clone or Fork the project repo
- To start the web app in development mode: 
  - From the terminal type `npm install` then `npm start`
  - Then view it in the browser by opening [http://localhost:3000](http://localhost:3000)
  - The page will reload if you make any edits
  - You will see lint errors in the console. <br />
  
### To run the tests (CURRENTLY NO TESTS).
  - From the terminal type: `npm test`
  - This launches the test runner in the interactive watch mode. 
  - See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. <br />

### To create the build
- To create the build, run `yarn build` or `npm build`. 
  - It builds the app for production to the `build` folder. 
  - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!
  - See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. <br />
