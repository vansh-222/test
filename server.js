// const express = require('express');
// const path = require('path');
// const app = express();

// // const logger = require('./middleware/logger')

// // app.use(logger);

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

// const port = 3000;
// app.listen(port, ()=> {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const connectDB = require('./db');
const postRouter = require('./routes/user')
const errorHandler = require('./middleware/errorHandler')
const userRoutes = require('./routes/userRoutes');

app.use(express.json());    

app.use("/posts", postRouter)
app.use('/users', userRoutes);

connectDB();

app.get("/", (req, res)=>{
    res.send("mongo connected and working")
})

app.use(errorHandler);

app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

