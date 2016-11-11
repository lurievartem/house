import mongoose from 'mongoose';
import { regexs } from '../../../lib/validator';
import { compare, hashPasswordAsync } from '../../service/crypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, lowercase: true, required: true, unique: true, match: regexs.email },
    password: { type: String, required: true, match: regexs.password },
    name: { type: String, required: true, match: regexs.name },
    lastname: { type: String, required: true, match: regexs.name },
    gender: { type: Number, enum: [0, 1, 2], required: true, default: 0 },
    birthday: { type: Date, required: true },
    logo: { type: String },
    oauth: {
        facebookID: { type: String, unique: true },
        googleID: { type: String, unique: true }
    }
});

UserSchema.set('toJSON', { getters: true });

UserSchema.methods.comparePassword = function comparePassword(tryPassword){
    return new Promise((resolve, reject) =>
        compare(tryPassword, this.password, (err, res) => {
            if(err) return reject(err);
            return resolve(res);
        })
    );
};

UserSchema.pre('save', function preSave(next){
    const user = this;
    hashPasswordAsync(user.password, (err, res) => {
        if(err) return next(err);
        user.password = res;
        next();
    });
});

export default mongoose.model('Users', UserSchema);
