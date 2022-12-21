# Peworld

![image](https://user-images.githubusercontent.com/86812576/208875608-24029a82-867b-43f5-9266-480c13656a92.png)

![image](https://user-images.githubusercontent.com/86812576/208875852-8dee398c-88f6-4898-89cf-c0ec0ab581e3.png)

## About The Project

Web application that connect jobseeker and recruiter to help find their dream job and talent for company

## Feature
- Jobseeker profile
- Jobseeker experiences
- Jobseeker portofolio
- Hiring page
- Company profile
- Chat between jobseeker and company

## Built with

- [Frontend](https://github.com/rioprayoga23/fw12-frontend-collab)
1. [React js ](https://reactjs.org/)
2. [Tailwind](https://tailwindcss.com/)

- [Backend](https://github.com/rioprayoga23/fw12-backend-collab)
1. [Node js](https://nodejs.org/en/)
2. [Express js](https://expressjs.com/en/starter/installing.html)

### Requirements
1. [Node js](https://nodejs.org/en/)
2. Backenda [API ](fw12-backend-collab.vercel.app)
3. NPM Modules

### How to run application?
1. Clone this project to your local computer
2. Open this project in your code editor and install few modules
3. type `npm i`
4. type `npm i redux`
5. type `npm i react-router-dom`
6. type `npm i axios`
7. to start this project type `npm start` in [fw12-frontend-collab](https://github.com/rioprayoga23/fw12-frontend-collab)
### Acknowledgements
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- argon
- [jwt token](https://www.npmjs.com/package/jsonwebtoken)

## What's in Backend?
### CRUD database for:
- users
- profile
- portofolio
- company
- contacts
- purposes
- userskills

### Main Endpoint

|                              URL                         | Method | Description |
| -------------------------------------------------------- |:------:| --------------------------------------------:|
| fw12-backend-collab.vercel.app/auth/login                |   POST |                                        LOGIN |
| fw12-backend-collab.vercel.app/auth/register-employe     |   POST |                             REGISTER EMPLOYE |
| fw12-backend-collab.vercel.app/auth/register-recruiter   |   POST |                           REGISTER RECRUITER |
| fw12-backend-collab.vercel.app/profile/:id               |   GET  |                 GET PROFILE BY ID WHEN CLICK |
| fw12-backend-collab.vercel.app/profile/portofolio/:id    |   GET  |                       GET PORTOFOLIO PROFILE |
| fw12-backend-collab.vercel.app/profile/experiences/:id   |   GET  |                       GET EXPERINCES PROFILE |
| fw12-backend-collab.vercel.app/profile/myAccount         |   GET  |       GET PROFILE BY USER LOGIN (With token) |
| fw12-backend-collab.vercel.app/profile                   |   PATCH|          UPDATE PROFILE EMPLOYE (With token) |
| fw12-backend-collab.vercel.app/profile/skills            |   POST |  ADD SKILL IN EDIT PROFILE PAGE (With token) |
