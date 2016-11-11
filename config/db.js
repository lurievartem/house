const db = {
    url: 'mongodb://admin:house@ds029675.mlab.com:29675/house',
    options: {
        server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
    }
};

export default db;
