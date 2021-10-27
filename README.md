# Pixahunt
Pixahunt is a stock photo finder that utilizes the Pixabay API to get photos. Users start by 
typing in a query term into the search bar and then hitting the "GO" button. The user is then 
presented with a number of images. By clicking on a photo the user will be taken to a new 
page where the user can get more information about the image they selected. 

This application was built using ***Javascript** and **Vue.js.**

## Demo
![pixahunt-capture](public/pixahunt-capture.gif)


## Getting Started
### Prerequistes
- Node
- npm
- Vue CLI (optional) 
- a Pixabay account (https://pixabay.com/api/docs/)

### Installation
1) Clone this repo
```
git clone https://github.com/chumnend/pixahunt.git
```
2) Install project dependencies,
```
npm install
```
3) Copy the `.env.example` file and rename it to `.env`.
```
cp .env.example .env
```
4) Make sure to provide values to all the environment variables in the new `.env`

```
NODE_ENV=             # 'development' or 'production'
PORT=                 # Port number the application will run on
VUE_APP_API_KEY=      # API Key obtained from https://pixabay.com/api/docs/
```
5) Start the application using `npm run serve`


### Deployment
Application is deployed to Heroku upon push to stable branch

## Contact
Nicholas Chumney - [nicholas.chumney@outlook.com](nicholas.chumney@outlook.com) 
