import { User } from '../../database/models';

const jwt = async (payload, done) => {
    try{
        const user = await User.findOne({ email: payload.email });
        done(null, user);
    } catch(err){
        done(err);
    }
};

export default jwt;
