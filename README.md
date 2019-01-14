![CF](http://i.imgur.com/7v5ASc8.png) LAB 15
=================================================

## Project Book App V2

### Project Team:
Brent Woodward - [Github](https://github.com/BrentTech)
Caity Heath - [Github](https://github.com/CaityHeath)
Fletcher LaRue - [Github](https://github.com/asdFletcher)

### Links and Resources
* [repo](https://github.com/BrentTech/15-project-books)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [swagger](http://xyz.com)
* [jsdoc](http://xyz.com)

### Description:
Refactors the existing Book App code (repo [here](https://github.com/codefellows-seattle-javascript-401d28/15-project-books)) from a monolithic code base to a modular one.

All views, routes, and website functionality remains unchanged. But the back-end is re-factored.

Other requirements:
- Switch from PSQL (a relational database) to Mongo DB a Document Database,

Previously all the code for the app was written in a monolithic `server.js` file. This project implements a top level `index.js` that requires in an `app.js` and corresponding database. By making only a small edit to the `index.js` code, the prior `Postgres` functionality can be re-connected. 

The `app.js` file imports a generic route-handling file `v1.js` which imports all the functionaly for each route from a variety of different modules.

This modularized approach makes it easier to test, easier to re-use, and easier to read.

### Modules
---
---

#### Setting up the app for testing on a local environment:

- `.env` - with your PORT and DATABASE_URL. Make sure this file is included in your `.gitignore`

npm i to install dependencies

configure your computer for `postgres`, and `pg`

The postgres database is called `books`. Make sure it exists:

.env file contents:
DATABASE_URL=postgres://localhost:5432/books
PORT=8080

--- 

### Testing
Tests can be found in the `__tests__` directory:
`__tests__/<file to be tested>.test.js`

Where `<file to be tested>` is the name of the file that the test file applies to.

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
    ```

* Run jest

    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved

---

### Dependencies

* Jest: `npm i jest` 
    * [docs](https://jestjs.io/docs/en/getting-started)
    * testing
* JSDoc: `npm i jsdoc`
    * [docs](http://usejsdoc.org/)
    * documentation
* cors: `npm i cors`
    * [docs](https://www.npmjs.com/package/cors)
    * enabling CORS
* dotenv: `npm i dotenv`
    * [docs](https://www.npmjs.com/package/dotenv)
    * loading environment variables
* ejs: `npm i ejs`
    * [docs](https://www.npmjs.com/package/ejs)
    * Embedded JavaScript templates
* express: `npm i express`
    * [docs](https://www.npmjs.com/package/express)
    * Web framework for node.
* method-override: `npm i method-override`
    * [docs](https://www.npmjs.com/package/method-override)
    * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
* mongodb-memory-server: `npm i mongodb-memory-server`
    * [docs](https://www.npmjs.com/package/mongodb-memory-server)
    * Programmatically creates a MongoDB Server for testing
* mongoose: `npm i mongoose`
    * [docs](https://www.npmjs.com/package/mongoose)
    * MongoDB object modeling tool
* mongoose-schema-jsonschema: `npm i mongoose-schema-jsonschema`
    * [docs](https://www.npmjs.com/package/mongoose-schema-jsonschema)
    * create json schema from Mongoose schema
* morgan: `npm i morgan`
    * [docs](https://www.npmjs.com/package/morgan)
    * HTTP request logger middleware for node.js
* pg: `npm i pg`
    * [docs](https://www.npmjs.com/package/pg)
    * PostgreSQL client for Node.js
* superagent: `npm i superagent`
    * [docs](https://www.npmjs.com/package/superagent)
    * Node.js HTTP request library


### Setup
#### `.env` requirements
- For local hosting (i.e.: http://localhost:3000/)
  * PORT=3000
- For connecting databases. Only one or the other of the following is required if only one type of database is being used. If both implementations are being tested both entries will be needed in the .evn file. For hosting remotely, hosting-specific variables will be needed.
  * DATABASE_URL=postgres://localhost:5432/books
  * MONGODB_URI=mongodb://localhost:27017/books



