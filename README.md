![Preview](./documentation/assets/images/mvst-time-coding-challenge.gif)

# MVST Time Coding Challenge

## Introduction & requirements

This repository contains the coding challenge as a part of MVST. job application process, a **full stack** web application developed using React, NodeJs, ExpressJs and MongoDB.

The purpose of this application is to develop a stop watch that users can start & stop using a central button. Once the button is pressed, the time inside the button starts counting and only when the user presses it back, the total counter is refreshed. All time data is stored in a database to persist data.

The application also has a header with MVST. logotype and a switch that allows the user to change the application theme to light or dark.

> Check the deployed version of this challenge [here](https://mvst-coding-challenge.herokuapp.com/)

## 🚀 Getting Started

The following steps will guide you through the essentials you will have to install and run in order to use this repository and build this application in your local machine.

### Requirements 📋

**Node**

The first step to install and run this application is to make sure you have Node installed on your computer. Go to the terminal, type `node -v` and hit enter. If it returns a version number you already have it installed! Otherwise you will need to [install](https://nodejs.org/es/download/) node.

**Yarn**

Also, since this repository is taking advantage of [Yarn](https://yarnpkg.com/) workspaces (both client and server are inside the same repository), first of all you will need to install `yarn` globally on your computer:

```
npm install -g yarn
```

**MongoDB Atlas**

[MongoDB Atlas](https://www.mongodb.com/) - [Cloudinary](https://cloudinary.com/)

### Installation 🔧

First, you will need to `clone` or `fork` the repository into your Github account:

```
$ git clone https://github.com/rocket-team-webdev/wave
```

**Environment variables**

Since

The **client** .env file need to contain the next variables:

```
REACT_APP_API_ROUTE=https://mvst-coding-challenge-api.herokuapp.com/
```

The **server** .env file needs to contain the next variables to connect to [MongoDB Atlas](https://www.mongodb.com/) cluster:

```
# Database connection
MONGO_DB_URL_PRODUCTION=mongodb+srv://username:<password>@cluster0.z4nte.mongodb.net/mvst-challenge
MONGO_DB_URL_DEVELOPMENT=mongodb://localhost/4000
MONGO_DB_URL_TEST=mongodb://localhost/4000

# Server settings
PORT=4000

```

## 🦴 Project Structure

### Folder structure 🗂

<pre>  
├── documentation <i>// All project wireframes, PRD, and presentation files</i>  
└── packages <i>// Monorepo workspaces</i>  
├── client <i>// Frontend React App</i>  
│ └── src  
│ ├── api <i>// All api petitions</i>  
│ ├── assets  
│ ├── components  
│ ├── constants  
│ ├── hooks  
│ ├── __mocks__ <i>// For testing purposes</i>  
│ ├── pages  
│ ├── redux  
│ ├── sass  
│ ├── services <i>// 3rd party services used</i>  
│ ├── __test__  
│ └── utils <i>// Reusable code snippets </i>  
├── server <i>// Backend Node Server</i>  
│ ├── src  
│ │ ├── config  
│ │ ├── controllers  
│ │ ├── db  
│ │ ├── middlewares  
│ │ ├── models  
│ │ ├── routes  
│ │ ├── services  
│ │ ├── __test__  
│ │ └── utils  
│ └── uploads <i>// Folder for temporary uploaded files</i>  
└── stats-server <i>// Backend PHP/Laravel Server</i>  
└── src  
├── app  
│ ├── Console  
│ ├── Exceptions  
│ ├── Http  
│ │ ├── Controllers  
│ │ └── Middleware  
│ ├── Models  
│ └── Providers  
├── config  
└── database  
</pre>

### Client-Side 🖥

For the front end of this project we have used React framework. We have created several component elements for every piece of code that should be reusable on the app. Then, we have created all the pages that should be rendered on the browser and within we applied its components and logic. To make the calls to the api, we have created an _api_ folder with all of the routes we need to call from the app. We have used Redux library to improve the data flow that we needed to be consumed at several places of the website. As a third party services we have used firebase to create a safe authentication of the app. We implemented the necessary tests to assure that the code was running properly, you will find them at the _test_ folder.

### Server-Side 🔐

We have divided the back end of our app into two sides. The main reason of this was to put in practice two different back end languages (Javascript and PHP).

#### NodeJS

This back end side is our main API. Here we receive most of the requests that are sent by the front end. This API has the core functionalities of the back end such as the authentication, the database management and the use of other third party services as _cloudinary_. This API also interacts with the other side of our back end.

#### PHP Laravel

This is our secondary API. It was created to manage all of the app statistics. The main purpose of our application is not depending on this, but it is very useful to manage how our app is being used.

## Deployment 🛫

In order to deploy both client and server workspace this application has used [Heroku](www.heroku.com).

# 🧭 App navigation

## Entry points 🏁

## 🗺 Task organization

### Organization 📆

In order to achieve all of our goals we have implemented the Scrum Agile Methodology. We divided all the process into separated one week Sprints, everyone of them with their own goals. To manage those sprints we set daily, sprint plannings and review and sprint retrospective meetings. We used Github Projects to divide our sprints, issues and tasks on boards using the Kanban structure. Github projects allowed us to automate and connect those issues with the branches of our repository. We also implemented a code review system in order to get all the team connected with all parts of the project.

![enter image description here](./documentation/screenshots/gprojects1.jpg)

## Branch Naming Strategy 🎋

To manage all the process of the project within the Scrum Agile Methodology using Github Projects and its automation, we created a branch naming strategy so we can store into Github folders and subfolders all of these branches and divide them by sprints, epics, user stories, issues numbers and tasks description and also, connect our branches with the Github issues so we could close them every time we created a Pull Request.
An example of this branch naming is next:

`**epic-name/user-story/134**`

# 🕵️‍♂️ Resources

## Main resources 🧬

- [Axios](https://axios-http.com/docs/intro)
- [Bootstrap](https://getbootstrap.com/)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NodeJs](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Yarn](https://yarnpkg.com/)

## Support libraries 📚

- [Framer-motion](https://www.framer.com/motion/)
- [Helmet Async](https://github.com/staylor/react-helmet-async)
- [Morgan](https://github.com/expressjs/morgan)
- [Nodemon](https://nodemon.io/)
- [React-icons](https://react-icons.github.io/react-icons/)

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.

# ✨ Contributors

Thanks goes to these wonderful people<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section --> <!-- prettier-ignore-start --> <!-- markdownlint-disable --> <table> <tr> <td align="center"><a href="https://github.com/bbenalia"><img src="https://avatars.githubusercontent.com/u/65949632?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brahim Benalia</b></sub></a><br /> <a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=bbenalia" title="Code">💻</a> </td> <td align="center"><a href="https://github.com/labietelabiete"><img src="https://avatars.githubusercontent.com/u/72515410?v=4" width="100px;" alt=""/><br /><sub><b>Hugo Gómez</b></sub></a><br /><a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=labietelabiete" title="Code">💻</a></td> <td align="center"><a href="https://github.com/Nachomontoya"><img src="https://avatars.githubusercontent.com/u/73990495?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nacho Montoya</b></sub></a><br /><a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=Nachomontoya" title="Code">💻</a></td> <td align="center"><a href="https://github.com/Ricard-Garcia"><img src="https://avatars.githubusercontent.com/u/15958524?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ricard García</b></sub></a><br /><a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=ricard-garcia" title="Code">💻</a> </td> <td align="center"><a href="https://github.com/mhfortuna"><img src="https://avatars.githubusercontent.com/u/66578026?v=4s=100" width="100px;" alt=""/><br /><sub><b>Mathias Fortuna</b></sub></a><br /><a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=mhfortuna" title="Code">💻</a></td> <td align="center"><a href="https://github.com/Ernest-DT"><img src="https://avatars.githubusercontent.com/u/78990572?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ernest Duocastella</b></sub></a><br /><a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=ernest-dt" title="Code">💻</a> </td> </tr> </table> <!-- markdownlint-restore --> <!-- prettier-ignore-end --> <!-- ALL-CONTRIBUTORS-LIST:END --> This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome! <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->
