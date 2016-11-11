import { User } from '../database/models';
import msg from '../../config/errorMsg';

const resDone = (req, res, next) => (err, data) => {
    if(err) next(err);

    req.user = data;
    next();
};

const local = async ({ email, password }, done) => {
    try{
        const user = await User.findOne({ email });
        if(!user) return done(null, msg.wrongEmail);

        const passwordCheck = await user.comparePassword(password);
        const data = passwordCheck ? user : msg.wrongPassword;
        done(null, data);
    } catch(err){
        done(err);
    }
};

const social = async (name, data, done) => {
    done(new Error(), null);
    try{
        const options = { upsert: true, new: true };
        const oauth = { [`${name}ID`]: data.id };
        const setdata = { ...data, oauth };
        const user = await User.findOneAndUpdate({ oauth }, { $set: setdata }, options);
        done(null, user);
    } catch(err){
        done(err);
    }
};

export const sign = (req, res, next) => {
    const { type, user: data } = req.body;
    const done = resDone(req, res, next);

    switch(type){
        case 'local':
            local(data, done); break;
        case 'facebook':
        case 'google':
            social(type, data, done); break;
        default:
            next();
    }
};

export const register = async (req, res, next) => {
    const { user: data } = req.body;
    const done = resDone(req, res, next);
    try{
        if(await User.findOne({ email: data.email })){
            next(null, msg.userExist);
        }
        const user = await (new User(data)).save();

        done(null, user);
    } catch(err){
        done(err);
    }
};
