# Node.js APIs using Express Framework (Users Crud)
- Create a NodeJS server using HAPI/Express framework. 
- Create a service for USER. User model should have First Name, Last Name, Email, and Contact No.
- Add a route with GET request to fetch all users
- Add POST and PUT requests to create and update existing users
- Add DELETE requests to delete a user entry.
- Add proper validation on payload/parameters and error handler for request. 

### Run the application

Go the the applicatin directory
 Run the following command using command line or terminal
 ```
 npm install
 ```
 create a `.env` file in the root directory
 set the Mongodb connection URI in the `.env` file
 ```
 MONGODB_URL=connection_uri
 ```
 Run the following command from the terminal
 ```
 npm start
 ```
 Now point to the:
 GET All USERS
 ```
 GET: http://localhost:8800/users
 ```
 ADD NEW USER
 ```
 POST: http://localhost:8800/users
 ```
 UPDATE USER
 ```
 PUT http://localhost:8800/users/<user_id>
 ```
  DELETE USER
 ```
 DELETE http://localhost:8800/users/<user_id>
 ```
 
