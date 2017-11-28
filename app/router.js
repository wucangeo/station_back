"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  let api_v1 = "/api/v1";

  router.get(api_v1 + "/", controller.home.index);

  //用户
  router.post(api_v1 + "/user/login", controller.user.login);
  router.get(api_v1 + "/user", controller.user.list);
  router.get(api_v1 + "/user/:id", controller.user.get);
  router.post(api_v1 + "/user", controller.user.create);
  router.patch(api_v1 + "/user/:id", controller.user.update);
  router.delete(api_v1 + "/user", controller.user.delete);

  //数据管理
  router.get(api_v1 + "/data", controller.data.list);
  router.get(api_v1 + "/data/:id", controller.data.get);
  router.post(api_v1 + "/data", controller.data.create);
  router.patch(api_v1 + "/data/:id", controller.data.update);
  router.delete(api_v1 + "/data", controller.data.delete);
};
