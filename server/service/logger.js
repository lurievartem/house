import bunyan from 'bunyan';

const log = bunyan.createLogger({
    name: 'house',
    streams: [
        {
            level: 'debug',
            path: '../../house-error.log'
        }
    ],
    serializers: bunyan.stdSerializers,

});

export default log;
