import path from 'path';
import { Router } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfigDev from '../../webpack/webpack.config.dev';
import webpackConfigProd from '../../webpack/webpack.config.prod';

let compiler;
const router = new Router();

if (process.env.NODE_ENV !== 'production'){
    compiler = webpack(webpackConfigDev);
    router.use(webpackDevMiddleware(compiler,
        { noInfo: true, publicPath: webpackConfigDev.output.publicPath }
    ));
    router.use(webpackHotMiddleware(compiler));
} else{
    compiler = webpack(webpackConfigProd);
}

router.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) return next(err);

        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

export default router;
