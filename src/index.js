import app from './app.js';
//import '@babel/polyfill';

async function main() {
    //app.listen(4000);
    app.listen(process.env.PORT || 4000)
    console.log('Server on port 4000');
}

main();