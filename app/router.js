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
  router.get(api_v1 + "/user/:data_id", controller.user.get);
  router.post(api_v1 + "/user", controller.user.create);
  router.post(api_v1 + "/user/login", controller.user.login);
  router.patch(api_v1 + "/user/:data_id", controller.user.update);
  router.delete(api_v1 + "/user", controller.user.delete);
  router.get(api_v1 + "/user/verify", controller.user.verify);

  //数据管理
  router.get(api_v1 + "/data", controller.data.list);
  router.get(api_v1 + "/data/:data_id", controller.data.get);
  router.post(api_v1 + "/data", controller.data.create);
  router.patch(api_v1 + "/data/:data_id", controller.data.update);
  router.delete(api_v1 + "/data", controller.data.delete);

  //科研成果-论文
  router.get(api_v1 + "/paper", controller.achvPaper.list);
  router.get(api_v1 + "/paper/:data_id", controller.achvPaper.get);
  router.post(api_v1 + "/paper", controller.achvPaper.create);
  router.patch(api_v1 + "/paper/:data_id", controller.achvPaper.update);
  router.delete(api_v1 + "/paper", controller.achvPaper.delete);

  //科研成果-专著
  router.get(api_v1 + "/monography", controller.achvMonography.list);
  router.get(api_v1 + "/monography/:data_id", controller.achvMonography.get);
  router.post(api_v1 + "/monography", controller.achvMonography.create);
  router.patch(
    api_v1 + "/monography/:data_id",
    controller.achvMonography.update
  );
  router.delete(api_v1 + "/monography", controller.achvMonography.delete);
};
