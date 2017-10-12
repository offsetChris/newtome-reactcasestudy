This is a demo react project created by Christina Adams.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For more specifics about the install refer to the readme at this repo.

gitlab-ci.yml has build pipeline information. only runs build on master branch. 

React app on in a Repository (GitLab or GitHub) > merge/push changes to master branch > automatically triggers build and deploy after tests pass

NPM development environment.
- npm start
- npm test
- npm run build
- npm run eject

Gulp sass watch and compile task runners.
- gulp sass
- gulp watch
- gulp replace



Further work needed:
- [ ] Image Carosel - I did not have a chance to get this functional.
- [ ] Browser compatibility optimization (for the sake of the demo I built this for the latest version of Chrome and have not focused time on backwards compatibility at this point.)
- [ ] Break down components further for more modularity (comments etc need to be broken into exported components still)
- [ ] Simplify and optimize functions (use conditional rendering etc)
- [ ] Optimize data transfers (unsure of standards)
- [ ] Further expand automated testing (very simple examples of tests currently)
- [ ] Automate browser and device testing (unsure of what tools are being used)
- [ ] SASS naming conventions using BEM (currently not consistent with how components are separated, knowledge of an existing styleguide would be helpful)
- [ ] Build pipeline is automaticaly testing on development branch, and test > build on master branch. Push to master - not fully set up currently.




