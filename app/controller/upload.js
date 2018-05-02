'use strict';
const Controller = require('egg').Controller;

class UploadController extends Controller {
  /**
 * @api {post} /upload 上传文件
 * @apiName upload
 * @apiGroup Upload
 *
 * @apiParam {FromData} file 文件对象 required
 *
 * @apiSuccess {String} fieldname 参数名
 * @apiSuccess {String} originalname 原始文件名
 * @apiSuccess {String} encoding 文件编码
 * @apiSuccess {String} mimetype 文件类型
 * @apiSuccess {String} destination 文件存储路径
 * @apiSuccess {String} filename 文件名
 * @apiSuccess {String} path 完整文件路径
 * @apiSuccess {String} size 文件大小
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '用户登录成功',
 *       data: {"fieldname": "file",
 *           "originalname": "default.jpg",
 *           "encoding": "7bit",
 *           "mimetype": "image/jpeg",
 *           "destination": "public/upload/2018-4-3",
 *           "filename": "file-1525241755117.jpg",
 *           "path": "public\\upload\\2018-4-3\\file-1525241755117.jpg",
 *           "size": 20267
 *       }
 *     }
 *
 * @apiError 500 上传文件失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '上传文件失败'
 *     }
 */
  async uploadFile() {
    const { ctx } = this;
    const file = ctx.req.file;
    file.destination = file.destination.substring(file.destination.indexOf('/') + 1);
    file.path = file.path.substring(file.path.indexOf('\\') + 1);
    if (file) {
      ctx.success(file, '上传文件成功');
    } else ctx.fail('上传文件失败');
  }
}

module.exports = UploadController;