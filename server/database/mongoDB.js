import mongoose from 'mongoose';
import db from '../../config/db';

mongoose.Promise = global.Promise;
mongoose.connect(db.url, db.options)
    .then(() => console.log('mongodb connection success'))
    .catch(err => console.log('db connection error', err));
