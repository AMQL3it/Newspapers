// External Imports
const express = require('express');
const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Internal Imports
const logger = require('./common/logger');
const DB = require('./databases/dbloader');
const initRoutes = require('./modules');
// const adminRouter = require('./routes/adminRouter');
// const loginRouter = require('./routes/loginRouter');
// //const membersRouter = require('./routes/membersRouter');
const Error = require('./common/errorHandler');


const app = express();

dotenv.config();
app.use(cors("*"));
app.use(bodyParser.json());



// Database connection
DB.DBconnection();
// DB.modelsAutoLoader();


// Request parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Parse cookies
// app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
// const areaRouter = require('./modules/area/index.js');
// app.use('/area', areaRouter);
// Initialize routes
initRoutes(app);

// Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack); // Log the error stack
//   res.status(err.status || 500).json({
//     message: err.message || "An unexpected error occurred",
//   });
// });

// app.use('/admin', adminRouter);
//app.use('/members', membersRouter);

// 404 not found handler
app.use(Error.notFoundHandler);

// Default error handler
app.use(Error.errorHandler)

// App starting point
const port = process.env.PORT || 5000;

app.listen(port, () => {
  logger.info(`App listening to port: ${port}`);

});
