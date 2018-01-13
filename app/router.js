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
  router.post(api_v1 + "/user/register", controller.user.register);
  router.post(api_v1 + "/user/login", controller.user.login);
  router.patch(api_v1 + "/user/:data_id", controller.user.update);
  router.delete(api_v1 + "/user", controller.user.delete);
  router.get(api_v1 + "/user/verify", controller.user.verify);

  //站点管理
  router.get(api_v1 + "/station", controller.station.list);
  router.get(api_v1 + "/station/:data_id", controller.station.get);
  router.post(api_v1 + "/station", controller.station.create);
  router.patch(api_v1 + "/station/:data_id", controller.station.update);
  router.delete(api_v1 + "/station", controller.station.delete);

  //文件上传管理
  router.get(api_v1 + "/upload", controller.upload.list);
  router.get(api_v1 + "/upload/:data_id", controller.upload.get);
  router.post(api_v1 + "/upload", controller.upload.create);
  router.patch(api_v1 + "/upload/:data_id", controller.upload.update);
  router.delete(api_v1 + "/upload", controller.upload.delete);
  router.post(api_v1 + "/upload/upload", controller.upload.upload);
  router.post(api_v1 + "/upload/download", controller.upload.download);

  //图片上传管理
  router.get(api_v1 + "/image", controller.image.list);
  router.get(api_v1 + "/image/:data_id", controller.image.get);
  router.post(api_v1 + "/image", controller.image.create);
  router.patch(api_v1 + "/image/:data_id", controller.image.update);
  router.delete(api_v1 + "/image", controller.image.delete);
  router.post(api_v1 + "/image/upload", controller.image.upload);

  //站点管理
  router.get(api_v1 + "/news", controller.news.list);
  router.get(api_v1 + "/news/:data_id", controller.news.get);
  router.post(api_v1 + "/news", controller.news.create);
  router.patch(api_v1 + "/news/:data_id", controller.news.update);
  router.delete(api_v1 + "/news", controller.news.delete);

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
  //科研成果-专利
  router.get(api_v1 + "/patent", controller.achvPatent.list);
  router.get(api_v1 + "/patent/:data_id", controller.achvPatent.get);
  router.post(api_v1 + "/patent", controller.achvPatent.create);
  router.patch(api_v1 + "/patent/:data_id", controller.achvPatent.update);
  router.delete(api_v1 + "/patent", controller.achvPatent.delete);
  //科研成果-奖项
  router.get(api_v1 + "/awards", controller.achvAwards.list);
  router.get(api_v1 + "/awards/:data_id", controller.achvAwards.get);
  router.post(api_v1 + "/awards", controller.achvAwards.create);
  router.patch(api_v1 + "/awards/:data_id", controller.achvAwards.update);
  router.delete(api_v1 + "/awards", controller.achvAwards.delete);
  //科研成果-项目
  router.get(api_v1 + "/project", controller.project.list);
  router.get(api_v1 + "/project/:data_id", controller.project.get);
  router.post(api_v1 + "/project", controller.project.create);
  router.patch(api_v1 + "/project/:data_id", controller.project.update);
  router.delete(api_v1 + "/project", controller.project.delete);
};
