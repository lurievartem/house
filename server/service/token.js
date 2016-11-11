import jwt from 'jsonwebtoken';
import auth from '../../config/authentication';

export default function createToken(data){
    const { expiresIn, algorithm, secret } = auth;
    return jwt.sign(data, secret, { expiresIn, algorithm });
}
