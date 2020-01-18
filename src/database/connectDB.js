const mongoose = require('mongoose');

mongoose.connect(process.env.MOBGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 }).then(()=>console.log('MONGO connected...'))
 .catch( err => console.log(err));

