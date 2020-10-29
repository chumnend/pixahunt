# Pixahunt
Pixahunt is a stock photo finder that utilizes the Pixabay API to get photos. Users start by 
typing in a query term into the search bar and then hitting the "GO" button. The user is then 
presented with a number of images. By clicking on a photo the user will be taken to a new 
page where the user can get more information about the image they selected. This application was 
built using **Vue.js.**

## Demo
![pixahunt-capture](pixahunt-capture.gif)

## Development Setup

### Prerequisites
- npm 
- Vue CLI (optional)
- a Pixabay account (https://pixabay.com/api/docs/)

### Configuration
1) Clone the repo
2) Run `npm install` to install dependencies
3) Copy the file `env.example` and rename it `.env`. This file contains the 
name of required environment variables needed for the application to work.


```
NODE_ENV=             # 'development' or 'production'
PORT=                 # Port number the application will run on

VUE_APP_API_KEY=      # API Key obtained from https://pixabay.com/api/docs/
```
4) Start the application using `npm run serve`


### Deployment
Application is deployed to Heroku upon push to stable branch
