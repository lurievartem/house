import bcrypt from 'bcryptjs';

export function hashPassword(password){
    return bcrypt.hashSync(password, 10);
}

export function hashPasswordAsync(password, cb){
    return bcrypt.hash(password, 10, cb);
}

export function compare(password, hash, cb){
    return password && hash && bcrypt.compare(password, hash, cb);
}
