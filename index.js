const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/users');

app.use(express.json()); // required for JSON body parsing

// Add User Router
app.use('/api/v1/user', userRouter); // FIX: added missing leading slash

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req,res) => { // FIX: changed router.get -> app.get
  res.sendFile(path.join(__dirname, 'home.html')); // serve actual file
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send('Server Error'); // FIX: proper error response
});

app.listen(process.env.PORT || 8081); // FIX: use uppercase PORT

console.log('Web Server is listening at port '+ (process.env.PORT || 8081));
