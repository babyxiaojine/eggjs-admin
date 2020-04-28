'use strict';
// app/middleware/notfound_handler.js
module.exports = () => {
  return async function errorHandle(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      ctx.logger.error(ctx);
      if (ctx.acceptJSON) {
        ctx.body = {
          code: '9999',
          message: '接口不存在或参数错误',
        };
      } else {
        ctx.body = '<h1>Page Not Found</h1>';
      }
    }
  };
};
