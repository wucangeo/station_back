"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  let api_v1 = "/api/v1";

  router.get(api_v1 + "/", controller.home.index);

  //用户
  router.get(api_v1 + "/user", controller.user.list);
  router.post(api_v1 + "/user", controller.user.create);
  router.post(api_v1 + "/user/login", controller.user.login);
  router.get(api_v1 + "/user/:user_id", controller.user.get);
  router.patch(api_v1 + "/user/:user_id", controller.user.update);
};
