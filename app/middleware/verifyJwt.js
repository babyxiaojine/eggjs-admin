'use strict';
module.exports = (option, app) => {
  return async function verifyJwt(ctx, next) {
    const whiteList = [
      '/user/login',
      '/user',
    ]
    if (whiteList.indexOf(ctx.request.url) > -1) {
      await next();
      const body = ctx.body;
      ctx.body = body;
    } else {
      const token = ctx.request.query.dToken;
      if (!token) {
        ctx.body = {
          code: '10001',
          message: '没有登录',
        };
      }else{
        try {
          const jwtBody = await app.jwt.verify(token, app.config.jwt.secret);
          ctx.request.header.userBody = {
            id: jwtBody.id,
            loginName: jwtBody.loginName,
          };
          await next();
          const body = ctx.body;
          ctx.body = body;
        } catch (err) {
          if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError' || err.name === 'NotBeforeError') {
            ctx.body = {
              code: '10001',
              message: '登录过期了:JsonWebTokenError',
            };
          }

        }
      }

    }
  };
};
