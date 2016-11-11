import log from '../service/logger';

export default (err, req, res, next) => {
    log.info(err);
    res.send({ status: 500, message: 'internal error', type: 'internal' });
};
