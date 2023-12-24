import { Router } from "./framework/Router.js";
import { Application } from "./framework/Application.js";

const PORT = 5000;
const host = '127.0.0.2';


const app = new Application();
app.listen(PORT, host, () => {
    console.log('server is  running on port' + PORT);
})

const router = new Router()

router.get('/test', (req, res) => {
    res.end('router test')
})

router.get('/post', (req, res) => {
    res.end('router post test')
})


app.addRouter(router);