const Router = require('@koa/router');
const serve = require('koa-static');

const router = new Router();
// const tokens = require('./tokens.json');

// router.get('/', async (ctx, next) => {
//     console.log('working..');
// })

// const route = async function(ctx, next){
//     if(shouldRedirect){
//         ctx.redirect('www.google.com.br'); // redirect to another page
//         return;
//     }

//     // ctx.someData = getSomeData(); // ctx.someData will be available in the next middleware
//     await next(); // go to next middleware
// }


router.get('/:movieId', async (ctx, next) => {
  const movieId = ctx.params.movieId;

  if(typeof movieId === 'undefined') {
    ctx.status = 400;
    ctx.body = {
      error: `movieId ${ctx.params.movieId} does not exist`
    };
    return;
  }

  console.log(typeof(movieId));

  if(parseInt(movieId) === 0){
      ctx.body = {
        result: 'it works'
      }

    }

//   ctx.body = {
//     movieId: ctx.params.movieId,
//     result: movieId
//   };

// await     next();

});

module.exports = router;
