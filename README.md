# MongoDB Social Network API

## Description

A MongoDB based social network API using Mongoose and Express.js.


## Installation

There are several things you must install before you'll be able to run this app.

If you want to run this API locally you'll need to do the following:

- Clone the repository to your local machine
- Navigate to the project repository
- Type `npm install` in the terminal to install dependencies
- Type `nodemon` in the terminal to run the local database server

## Usage

Short demonstration video of routes in Insomnia: [Click Here](https://drive.google.com/file/d/1xl9GFMejcO7wS17SwQVMyrLcGjliymz0/view)

There are several API endpoints included in this project, they can be utilized within an API platform like [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), or whichever other option you prefer.

The available API endpoints are listed below.

- `/api/users`
- - Get All Users
- - Create User
- `/api/users/:userId`
- - Get Single User
- - Update User
- - Delete User
- `/api/users/:userId/friends/:friendId`
- - Add Friend
- - Delete Friend.
- `/api/thoughts`
- - Get All Thoughts
- - Create Thought
- `/api/thoughts/:thoughtId`
- - Get Single Thought
- - Update Thought
- - Delete Thought
- `/api/thoughts/:thoughtId/reactions`
- - Create Reaction
- `/api/thoughts/:thoughtId/reactions/:reactionId`
- - Delete Reaction

## Technologies

[Express](https://www.npmjs.com/package/express) - Web framework for Node.js.

[MongoDB](https://www.npmjs.com/package/mongodb) - Document-oriented database program.

[Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool.

[Nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for Node.js.
