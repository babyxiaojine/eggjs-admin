'use strict';
const BaseController = require('../../core/base');
const path = require('path')
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
class SysFileController extends BaseController {
  // 查询用户
  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    console.log(23113232)
    console.log(23113232)

    const filename = Date.now() + path.extname(stream.filename).toLocaleLowerCase();
    const target = path.join('app/uploads', filename);
    const writeStream = fs.createWriteStream(target);
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      // 自定义方法
      this.error(err);
    }
    this.success(shops);
  }


}

module.exports = SysFileController;
