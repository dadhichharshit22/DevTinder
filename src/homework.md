- Create a repository
- Initialize the repository
- node_modules,package.json,package-lock.json
- Install express
- create a server
- Listen to port 3000 
- write a request handlers for /test,/hello
- Install nodemon and update scripts inside package.json
- what are dependencies
- what is the use of "-g" while npm install 
- Difference between caret and tilde (^ vs ~)

- Day 2 HomeWork
- initialize git
- .gitignore
- Create a remote repo on github
- Push all the code to remote origin 
- play with routes and routes extension ex: /hello,/, hello/2,/xyz
- order of the routes matter a lot. 
- Install the postman and make a workspace/collection > test API call
- Write Logic to handle GET,POST,PUT,DELETE API Calls and test them on Postman
- Explore routing and use of ?,+,(),* in the routes
- use of regex in routes /a/, /.*fly$/
- Reading the query params in the routes
- Reading the Dynamic routes 


- Day 3 HomweWork
- Multiple route handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route",[rh1,rh2,rh3],rh4);
- what is a Middleware? why do we need it?
- How express JS basically handles request behind the scenes
- Difference between app.use vs app.all
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes,except /user/login
- Error handling using app.use("/",(err,req,res,next)={});


- Day 4 HomeWork
- Create a free cluster on MongoDB offical website(Mongo Atlas)
- Install mongoose Library
- Connect your application to the database "Connection-url"/devTinder
- Call the mongodb function and connect to database before starting application on 3000
- create a user schema and user model
- create POST/signup API to add data to database
- Push some documents using API Calls from postman
- Error Handling using try,catch

- Day 5 HomeWork
- Difference between JS Object VS JSON
- Add the express.json middleware to your app
- Make you Signup API dynamic to recieve data from the end user
- User.findOne  with duplucate email ids, which object returned 
- API - GET user by email
- API - Feed API - GET/feed - get all the users from the database
- API - GET user by ID
- Create Delete User API
- Difference Between Patch vs PUT
- API - Create USER API
- Read the mongoose Documents for MODEL
- What are the options in Model.findOneandUpdate method,explore more about it.
- API - Update the User with email ID

- Day 6 HomeWork
- Explore SchemaType options from the documents
- Add required,trim,lowercase,unique,minLength,min
- Add default
- Create a Custom Validate function for gender
- Improve the DB Schema - PUT all the appropiate validate on the each field in Schema.
- Add timestamps to the userSchema
 

