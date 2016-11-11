import { Router } from 'express';
import validateData from '../service/validate';

const router = new Router();

router.post('/passrecovery', validateData('passrecovery'), () => {});

export default router;
