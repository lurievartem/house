import { Router } from 'express';
import validate from '../service/validate';
import createToken from '../service/token';
import { sign, register } from '../controllers/authCtrl';

const router = new Router();

const sendToken = (req, res, next) => {
    let data = {};
    if(!req.user || !req.user._id) {
        data = { error: req.user };
    } else{
        const { email, name, lastname, gender, birthday, logo } = req.user;
        const token = createToken(req.user._id);
        const user = { email, name, lastname, gender, birthday, logo };
        data = { token, user };
    }
    res.status(200).json(data);
};

router.post('/signup', validate('signup'), register, sendToken);
router.post('/signin', validate('signin'), sign, sendToken);

export default router;
