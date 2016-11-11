import Express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { server as config, api } from '../config/server';

import './database/mongoDB';

const app = new Express();
const port = process.env.PORT || config.port || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', api.url);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up ${api.url} in your browser.`);
    }
});
