/*
Navicat MySQL Data Transfer

Source Server         : 阿里云-47.93.225.139
Source Server Version : 50638
Source Host           : 47.93.225.139:3306
Source Database       : stations

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2018-01-11 23:49:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sta_achv_monography
-- ----------------------------
DROP TABLE IF EXISTS `sta_achv_monography`;
CREATE TABLE `sta_achv_monography` (
  `data_id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) DEFAULT NULL COMMENT '发表年份',
  `title` varchar(1000) DEFAULT NULL COMMENT '标题',
  `pub_type` varchar(255) DEFAULT NULL COMMENT '出版类别:1国内出版-中文;2?',
  `categories` varchar(255) DEFAULT NULL COMMENT '著作类别：1专著；2？',
  `word_count` int(11) DEFAULT '0' COMMENT '总字数（千）',
  `press` varchar(255) DEFAULT NULL COMMENT '出版社',
  `book_number` varchar(255) DEFAULT NULL COMMENT '书号（如 978-7-03-045836-0)',
  `pub_date` varchar(50) DEFAULT NULL,
  `rank_depart` int(11) DEFAULT NULL COMMENT '  单位排名',
  `rank_author` int(11) DEFAULT NULL COMMENT '本单位首位作者排名',
  `author` varchar(255) DEFAULT NULL COMMENT '封面作者',
  `co_author` varchar(500) DEFAULT NULL COMMENT '章节作者',
  `certified_path` varchar(500) DEFAULT NULL COMMENT '著作首页、版权页及章节作者证明页电子版',
  `enable` smallint(6) NOT NULL DEFAULT '1' COMMENT '是否启用',
  `created_user` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_achv_monography
-- ----------------------------
INSERT INTO `sta_achv_monography` VALUES ('1', '0', 'aaadfs', '国内出版-中文', '专著', '7', 'sdf', 'sdf', 'aa', '1', '1', 'sd', 'sdf', '\\public\\upload\\image\\20180110215245_v3zd7l.png', '1', '0', '2017-12-03 17:54:04', '16', '2018-01-10 22:22:28');
INSERT INTO `sta_achv_monography` VALUES ('3', '2015', '', '', '', '0', '', '', null, '0', '0', '', '', '', '0', '0', '2017-12-03 13:54:58', '16', '2018-01-10 21:35:58');
INSERT INTO `sta_achv_monography` VALUES ('5', null, 'aaa', null, null, '0', null, null, null, null, null, null, null, null, '1', '7', '2017-12-06 21:33:25', '7', '2017-12-06 21:33:39');
INSERT INTO `sta_achv_monography` VALUES ('6', '2018', 'test', '国内出版-中文', '专著', '123423', '234', '234', '2', '1', '1', 'aasdfw', '', '\\public\\upload\\image\\20180110222618_x52dfa.png', '1', '16', '2018-01-10 22:26:12', '16', '2018-01-10 22:26:18');

-- ----------------------------
-- Table structure for sta_achv_paper
-- ----------------------------
DROP TABLE IF EXISTS `sta_achv_paper`;
CREATE TABLE `sta_achv_paper` (
  `data_id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) DEFAULT NULL COMMENT '发表年份',
  `title` varchar(1000) DEFAULT NULL COMMENT '标题',
  `journal` varchar(255) DEFAULT NULL COMMENT '期刊名称',
  `volume` varchar(255) DEFAULT NULL COMMENT '年，卷期，页码',
  `issue_number` varchar(255) DEFAULT NULL COMMENT '标准刊号',
  `author` varchar(500) DEFAULT NULL COMMENT '全部作者',
  `co_author` varchar(255) DEFAULT NULL COMMENT '通讯作者',
  `abstract` text COMMENT '摘要',
  `rank_depart` int(11) DEFAULT NULL COMMENT '单位标注排名',
  `rank_author` int(11) DEFAULT NULL COMMENT '本单位首位作者排名',
  `journal_level` varchar(50) DEFAULT NULL COMMENT '刊物级别：1SCI；2专著；3中文；4其他',
  `index` double DEFAULT '0' COMMENT 'SCI/SSCI影响因子',
  `is_coop` smallint(6) DEFAULT NULL COMMENT '是否为国际合作论文',
  `file_path` varchar(500) DEFAULT NULL COMMENT '文件路径',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `enable` smallint(6) NOT NULL DEFAULT '1' COMMENT '是否启用',
  `created_user` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_achv_paper
-- ----------------------------
INSERT INTO `sta_achv_paper` VALUES ('1', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', null, null, '', '2.8', null, '', '', '0', '0', '2017-12-03 17:54:04', '16', '2018-01-10 21:03:42');
INSERT INTO `sta_achv_paper` VALUES ('2', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', null, null, '', null, null, '\\public\\upload\\image\\20180109233543_83uk6u.png', '', '1', '0', '2017-12-03 13:53:54', '16', '2018-01-09 23:35:43');
INSERT INTO `sta_achv_paper` VALUES ('3', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '0', '0', '', '0', '0', '', '', '0', '0', '2017-12-03 13:54:58', '0', '2018-01-08 23:17:09');
INSERT INTO `sta_achv_paper` VALUES ('4', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', null, null, '', null, null, '', '', '1', '0', '2017-12-05 14:58:45', '0', '2018-01-08 23:17:09');
INSERT INTO `sta_achv_paper` VALUES ('6', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', null, null, null, null, '0.1', null, null, null, '1', '7', '2017-12-06 13:17:52', '7', '2018-01-08 23:17:17');
INSERT INTO `sta_achv_paper` VALUES ('7', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', '', '0', '0', null, '', '1', '16', '2018-01-08 22:14:01', '16', '2018-01-08 23:17:17');
INSERT INTO `sta_achv_paper` VALUES ('8', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', 'a', '1', '1', 'SCI', '0', '0', '', '', '1', '16', '2018-01-08 22:15:03', '16', '2018-01-08 23:17:17');
INSERT INTO `sta_achv_paper` VALUES ('9', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', 'SCI', '0', '0', null, '', '1', '16', '2018-01-08 22:19:33', '16', '2018-01-08 23:17:17');
INSERT INTO `sta_achv_paper` VALUES ('10', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', 'SCI', '0', '0', null, '', '1', '16', '2018-01-08 22:19:51', '16', '2018-01-08 23:17:24');
INSERT INTO `sta_achv_paper` VALUES ('11', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', 'SCI', '0', '0', '\\public\\upload\\image\\20180109233921_h6klo.png', '', '1', '16', '2018-01-08 22:20:03', '16', '2018-01-09 23:39:21');
INSERT INTO `sta_achv_paper` VALUES ('12', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', 'SCI', '0', '0', '', '', '1', '16', '2018-01-08 22:49:04', '16', '2018-01-08 23:17:24');
INSERT INTO `sta_achv_paper` VALUES ('13', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', 'SCI', '2.97', '0', '', '', '1', '16', '2018-01-08 22:50:18', '16', '2018-01-08 23:16:49');
INSERT INTO `sta_achv_paper` VALUES ('14', '2018', 'N: P ratio of the grass Bothriochloa ischaemum mixed with the legume Lespedeza davurica under varying water and fertilizer supplies', 'Plant and Soil', '2016,400(1):67-79', '0032-079X', 'Bingcheng Xu,Zhijuan Gao,Jing Wang,Weizhou Xu,Jairo A. Palta,Yinglong Chen', '徐炳成', '', '1', '1', 'SCI', '2.97', '0', '\\public\\upload\\image\\20180109230502_y5zmmj.png', '', '1', '16', '2018-01-08 23:16:09', '16', '2018-01-09 23:05:05');

-- ----------------------------
-- Table structure for sta_achv_patent
-- ----------------------------
DROP TABLE IF EXISTS `sta_achv_patent`;
CREATE TABLE `sta_achv_patent` (
  `data_id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) DEFAULT NULL COMMENT '申请/授权年度',
  `title` varchar(255) NOT NULL COMMENT '专利名称',
  `apply_code` varchar(255) DEFAULT NULL COMMENT '申请号',
  `apply_date` datetime DEFAULT NULL COMMENT '申请日期',
  `patent_no` varchar(255) DEFAULT NULL COMMENT '专利号',
  `auth_date` datetime DEFAULT NULL COMMENT '授权日期',
  `patent_status` varchar(255) DEFAULT NULL COMMENT '专利状态 授权/申请',
  `patent_type` varchar(255) DEFAULT NULL COMMENT '专利类别：实用新型',
  `country_org` varchar(255) DEFAULT NULL COMMENT '国别/专利组织',
  `author` varchar(255) DEFAULT NULL COMMENT '专利权人',
  `rank_depart` int(11) DEFAULT NULL COMMENT '本台站所属单位排名',
  `co_author` varchar(255) DEFAULT NULL COMMENT '全部发明人',
  `rank_author` int(11) DEFAULT NULL COMMENT '本单位首位发明人排序',
  `file_path` varchar(255) DEFAULT NULL COMMENT '证明材料电子版',
  `enable` tinyint(4) NOT NULL DEFAULT '1',
  `created_user` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_achv_patent
-- ----------------------------

-- ----------------------------
-- Table structure for sta_data
-- ----------------------------
DROP TABLE IF EXISTS `sta_data`;
CREATE TABLE `sta_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '数据名称',
  `stations` varchar(200) DEFAULT NULL COMMENT '所属站点',
  `type` smallint(6) DEFAULT NULL COMMENT '数据分类：1土壤侵蚀数据；2土壤水分数据；3植被数据；4气象数据；5地理信息数据；6其他数据',
  `format` smallint(50) DEFAULT NULL COMMENT '格式：1电子；2纸质',
  `description` text COMMENT '数据描述',
  `start_date` date DEFAULT NULL COMMENT '采集起始时间',
  `end_date` date DEFAULT NULL COMMENT '采集截止时间',
  `position` varchar(255) DEFAULT NULL COMMENT '采集地点',
  `gatherer` varchar(255) DEFAULT NULL COMMENT '采集人',
  `gatherer_state` varchar(255) DEFAULT NULL COMMENT '采集人状态',
  `storage_position` varchar(255) DEFAULT NULL COMMENT '保管位置',
  `contact` varchar(255) DEFAULT NULL COMMENT '联系人',
  `enable` smallint(6) DEFAULT '1',
  `created_user` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_data
-- ----------------------------
INSERT INTO `sta_data` VALUES ('1', 'aa', null, null, null, null, null, null, null, null, null, null, null, '1', null, '2017-11-28 14:47:49', null, '2017-11-28 14:47:49');

-- ----------------------------
-- Table structure for sta_event
-- ----------------------------
DROP TABLE IF EXISTS `sta_event`;
CREATE TABLE `sta_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `content` text COMMENT '内容',
  `enable` smallint(6) DEFAULT NULL,
  `created_user` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_event
-- ----------------------------

-- ----------------------------
-- Table structure for sta_image
-- ----------------------------
DROP TABLE IF EXISTS `sta_image`;
CREATE TABLE `sta_image` (
  `data_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `path` varchar(500) DEFAULT NULL,
  `type` int(11) DEFAULT '0',
  `tag` int(11) NOT NULL DEFAULT '1',
  `order` int(11) NOT NULL DEFAULT '1',
  `enable` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_image
-- ----------------------------
INSERT INTO `sta_image` VALUES ('18', '上传的图片名称', '287255', '\\public\\upload\\default\\20171220202306_6a3u8g.jpg', '1', '1', '1', '1', '2017-12-20 20:23:39', '16', '2017-12-20 20:23:39', '16');
INSERT INTO `sta_image` VALUES ('19', '上传的图片名称sdfsdf', '287255', '\\public\\image\\20171220202456_gbiy2.jpg', '1', '1', '1', '1', '2017-12-20 20:24:56', '16', '2017-12-20 21:39:52', '16');
INSERT INTO `sta_image` VALUES ('20', '上传的图片名称', '287255', '\\public\\image\\20171220202456_gbiy2.jpg', '1', '1', '1', '1', '2017-12-20 20:24:56', '16', '2018-01-04 21:47:56', '16');
INSERT INTO `sta_image` VALUES ('21', '上传的图片名称sdfsdf', '287255', '\\public\\image\\20171220202456_gbiy2.jpg', '1', '1', '1', '1', '2017-12-20 20:24:56', '16', '2017-12-20 21:39:52', '16');
INSERT INTO `sta_image` VALUES ('22', '上传的图片名称sdfsdf', '287255', '\\public\\image\\20171220202456_gbiy2.jpg', '1', '1', '1', '1', '2017-12-20 20:24:56', '16', '2017-12-20 21:39:52', '16');
INSERT INTO `sta_image` VALUES ('23', '上传的图片名称sdfsdf', '287255', '\\public\\image\\20171220202456_gbiy2.jpg', '1', '1', '1', '1', '2017-12-20 20:24:56', '16', '2017-12-20 21:39:52', '16');
INSERT INTO `sta_image` VALUES ('24', '上传的图片名称sdfsdf', '287255', '\\public\\image\\20171220202456_gbiy2.jpg', '1', '1', '1', '1', '2017-12-20 20:24:56', '16', '2017-12-20 21:39:52', '16');
INSERT INTO `sta_image` VALUES ('26', '8', '876634', '\\public\\image\\20180104204354_eqf3c.png', '1', '1', '1', '1', '2018-01-04 20:43:54', '16', '2018-01-04 20:43:54', '16');
INSERT INTO `sta_image` VALUES ('27', '9', '1709526', '\\public\\image\\20180104204900_mcwbiz.png', '1', '1', '1', '1', '2018-01-04 20:49:00', '16', '2018-01-04 20:49:00', '16');
INSERT INTO `sta_image` VALUES ('28', '1', '562881', '\\public\\image\\20180104204908_9ad81n.png', '1', '1', '1', '1', '2018-01-04 20:49:08', '16', '2018-01-04 20:49:08', '16');
INSERT INTO `sta_image` VALUES ('29', '2', '113004', '\\public\\image\\20180104204928_emqfcf.png', '1', '1', '1', '1', '2018-01-04 20:49:28', '16', '2018-01-04 20:49:28', '16');
INSERT INTO `sta_image` VALUES ('30', '3', '54274', '\\public\\image\\20180104205052_gexu5.jpg', '1', '1', '1', '1', '2018-01-04 20:50:52', '16', '2018-01-04 20:50:52', '16');
INSERT INTO `sta_image` VALUES ('31', '2', '113004', '\\public\\image\\20180104205127_0ywwum.png', '1', '1', '1', '1', '2018-01-04 20:51:27', '16', '2018-01-04 20:51:27', '16');
INSERT INTO `sta_image` VALUES ('32', '5', '124881', '\\public\\image\\20180104205451_n0qdne.png', '1', '1', '1', '1', '2018-01-04 20:54:51', '16', '2018-01-04 20:54:51', '16');
INSERT INTO `sta_image` VALUES ('33', 'aa图片名称', '15122', '\\public\\image\\20180104211053_bvz4to.png', '1', '1', '1', '1', '2018-01-04 21:10:53', '16', '2018-01-04 22:06:26', '16');
INSERT INTO `sta_image` VALUES ('34', 'aa', '15122', '\\public\\image\\20180104222329_avf2y.png', '1', '1', '1', '1', '2018-01-04 22:23:29', '16', '2018-01-04 22:23:29', '16');
INSERT INTO `sta_image` VALUES ('35', 'aa', '15122', '\\public\\image\\20180104222411_0pwxt.png', '1', '1', '1', '1', '2018-01-04 22:24:11', '16', '2018-01-04 22:24:11', '16');
INSERT INTO `sta_image` VALUES ('36', 'aa', '15122', '\\public\\image\\20180104225152_pocnal.png', '2', '1', '1', '1', '2018-01-04 22:51:52', '16', '2018-01-04 22:51:52', '16');
INSERT INTO `sta_image` VALUES ('37', '20180102', '284547', '\\public\\image\\20180104225201_qttf2l.jpg', '2', '1', '1', '1', '2018-01-04 22:52:01', '16', '2018-01-04 22:52:08', '16');
INSERT INTO `sta_image` VALUES ('38', 'BingImageOfTheDay_20171207', '318655', '\\public\\image\\20180104225603_i66et9.jpg', '2', '1', '1', '1', '2018-01-04 22:56:03', '16', '2018-01-04 22:56:03', '16');
INSERT INTO `sta_image` VALUES ('39', 'BingImageOfTheDay_20171204', '347642', '\\public\\image\\20180104225636_onepve.jpg', '2', '1', '1', '1', '2018-01-04 22:56:36', '16', '2018-01-04 22:56:36', '16');

-- ----------------------------
-- Table structure for sta_news
-- ----------------------------
DROP TABLE IF EXISTS `sta_news`;
CREATE TABLE `sta_news` (
  `data_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(2) NOT NULL COMMENT '新闻类型，1.通知公告；2.综合新闻；3.科研动态；4.服务动态；5.合作交流；6.科普活动；7.专题报道',
  `title` varchar(200) NOT NULL COMMENT '站点名称',
  `content` text COMMENT '站点描述',
  `enable` smallint(6) NOT NULL DEFAULT '1' COMMENT '是否启用',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_news
-- ----------------------------
INSERT INTO `sta_news` VALUES ('10', '1', 'aaa1111', '<p>aaaasdf</p><p><br></p><p><br></p><p>sdf</p><p><br></p><p><br></p><p class=\"ql-align-center\">sdf<img src=\"http://127.0.0.1:7001\\public\\upload\\image\\20171218220544_301ad5.png\" width=\"530\"></p>', '1', '2017-12-18 21:50:56', '0', '2017-12-18 22:07:58', '16');
INSERT INTO `sta_news` VALUES ('11', '3', '11231231', '<p>aaa<strong>a12</strong>313</p>', '1', '2017-12-18 22:22:46', '16', '2017-12-18 22:22:46', '16');
INSERT INTO `sta_news` VALUES ('12', '1', 'aaa', '<p>aaa234</p>', '1', '2017-12-18 22:32:41', '16', '2017-12-18 22:32:41', '16');
INSERT INTO `sta_news` VALUES ('13', '5', '合作交流', '<p>合作交流细节内容g</p>', '1', '2017-12-18 22:47:16', '16', '2017-12-18 22:47:16', '16');
INSERT INTO `sta_news` VALUES ('14', '7', '科研活动', '<p>11</p>', '1', '2017-12-18 22:47:39', '16', '2017-12-18 22:47:39', '16');
INSERT INTO `sta_news` VALUES ('15', '7', 'test', '<p>saaa</p>', '1', '2017-12-19 22:22:59', '16', '2017-12-19 22:22:59', '16');

-- ----------------------------
-- Table structure for sta_paper
-- ----------------------------
DROP TABLE IF EXISTS `sta_paper`;
CREATE TABLE `sta_paper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL COMMENT '作者',
  `year` int(11) DEFAULT NULL COMMENT '发表年份',
  `title` varchar(500) DEFAULT NULL COMMENT '标题',
  `journal` varchar(255) DEFAULT NULL COMMENT '期刊名称',
  `volume` varchar(255) DEFAULT NULL COMMENT '卷刊号',
  `page` varchar(255) DEFAULT NULL COMMENT '页码',
  `abstract` text COMMENT '摘要',
  `stations` varchar(255) DEFAULT NULL COMMENT '所属站点',
  `type` smallint(6) DEFAULT NULL COMMENT '类型：1SCI；2专著；3中文；4其他',
  `cn_zone` smallint(6) DEFAULT NULL COMMENT '中科院分区',
  `jcr_zone` smallint(6) DEFAULT NULL COMMENT 'jcr分区',
  `image_path` varchar(255) DEFAULT NULL COMMENT '论文封面图片',
  `file_path` varchar(255) DEFAULT NULL COMMENT '文件路径',
  `enable` smallint(6) NOT NULL DEFAULT '1' COMMENT '是否启用',
  `created_user` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_paper
-- ----------------------------

-- ----------------------------
-- Table structure for sta_paper_top
-- ----------------------------
DROP TABLE IF EXISTS `sta_paper_top`;
CREATE TABLE `sta_paper_top` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `station_id` int(11) NOT NULL COMMENT '站点编号',
  `paper_id` int(11) NOT NULL COMMENT '论文编号',
  `order` int(11) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`,`station_id`,`paper_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_paper_top
-- ----------------------------

-- ----------------------------
-- Table structure for sta_project
-- ----------------------------
DROP TABLE IF EXISTS `sta_project`;
CREATE TABLE `sta_project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '项目名称',
  `level` varchar(255) DEFAULT NULL COMMENT '项目级别',
  `responsible_unit` varchar(255) DEFAULT NULL COMMENT '承担单位',
  `host` varchar(255) DEFAULT NULL COMMENT '主持人',
  `participant_unit` varchar(1000) DEFAULT NULL COMMENT '参与单位',
  `description` text COMMENT '项目介绍',
  `start_time` varchar(255) DEFAULT NULL COMMENT '其实时间',
  `end_time` varchar(255) DEFAULT NULL COMMENT '截止时间',
  `duration` smallint(6) DEFAULT NULL COMMENT '项目周期',
  `enable` smallint(6) DEFAULT '1',
  `created_user` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_project
-- ----------------------------

-- ----------------------------
-- Table structure for sta_staff
-- ----------------------------
DROP TABLE IF EXISTS `sta_staff`;
CREATE TABLE `sta_staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '姓名',
  `position` varchar(255) DEFAULT NULL COMMENT '职位',
  `type` smallint(6) DEFAULT NULL COMMENT '类型：1.现任领导；2.历任领导；3.著名学者；4.工作人员',
  `level` varchar(255) DEFAULT NULL COMMENT '级别',
  `phone` varchar(255) DEFAULT NULL COMMENT '电话',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `start_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '在任起始时间',
  `end_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '在任截止时间',
  `enable` smallint(6) DEFAULT '1' COMMENT '是否启用',
  `created_user` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_staff
-- ----------------------------

-- ----------------------------
-- Table structure for sta_station
-- ----------------------------
DROP TABLE IF EXISTS `sta_station`;
CREATE TABLE `sta_station` (
  `data_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(2) NOT NULL COMMENT '文章类型，1站点介绍；2.历史沿革；3.规章制度；4.生产与实践；5.服务科学研究；6.科普知识；',
  `title` varchar(200) NOT NULL COMMENT '站点名称',
  `content` text COMMENT '站点描述',
  `enable` smallint(6) NOT NULL DEFAULT '1' COMMENT '是否启用',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_station
-- ----------------------------
INSERT INTO `sta_station` VALUES ('1', '1', '测试预览ss', '<p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><strong>﻿水利部相关部门调研安塞站sss</strong></p><p class=\"ql-align-center\">作者: 安塞站　更新时间: 2017-11-10</p><p>11月9日，水利部水土保持监测中心主任沈雪建、处长李智广，黄河中上游管理局副局长张来章，梅州市农业局局长、广东省博士团团长刘玉涛，绥德管理监督局局长曹炜等一行8人调研安塞站，水保所所长刘国彬、副所长冯浩、安塞站站长陈云明及其他相关人员陪同。</p><p><br></p><p><br></p><p><br></p><p>沈雪建一行分别参观了纸坊沟流域把口站、半干旱区小流域生态水文过程科研样地，以及腰鼓山农田综合试验场。随后，沈雪建一行抵达安塞站办公生活区，听取了陈云明有关安塞站基本情况、主要进展、示范推广、主要成果、人才培养、工作设想及存在问题等方面的汇报。</p><p>沈雪建表示，此行彻底改变了他以往对黄土高原“千沟万壑、黄土漫天”的老印象，以纸坊沟小流域综合治理的黄土高原土壤侵蚀模数已经低于允许土壤流失量，归功于“政策好、人努力、天帮忙”。今后黄土高原水土保持工作应加强防灾减灾方面的工作，加强科研成果转化，科研应为国家宏观决策提供区域尺度的指标，并注重加强示范推广和科普宣传等相关工作，促进监测中心与水保所人员双向交流及项目合作。</p><p class=\"ql-align-center\"><img src=\"http://127.0.0.1:7001\\public\\upload\\image\\2017-12-17_13_12_14_g5b93n.jpg\" width=\"782\"></p><p>李 智广及其他随行人员认为水保所安塞站为水利部决策提供了翔实的一线数据，其中“黄土高原植被经过20年自然恢复进入良性循环”就是96年全国水保规划制定的基础，也是国家推行“退 耕还林（草）”工程的重要依据。水保所及安塞站在水土保持信息化方面的工作处于国内领先地位，《水土保持公报》有关黄土高原的很多数据就是来源于安塞站，同时也对王飞提出的WOCAT表示极大兴趣，认为监测中心应该借鉴，并以安塞站为模板在全国推广。</p><p>&nbsp;&nbsp;刘国彬对沈雪建一行提出的建议表示认可，认为新形势下科研单位及野外台站除了做好自己的本职工作外，应服务于地方，切合地方实际需求，使得认可度多元化，同时还应积极应对极端事件和国际前沿研究热点问题，增强科研成果的显示度和加强科普宣传等方面的工作。</p><p class=\"ql-align-center\"><img src=\"http://127.0.0.1:7001\\public\\upload\\image\\BingImageOfTheDay_20171204.jpg\" width=\"743\"></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span class=\"ql-cursor\">﻿</span><img src=\"http://127.0.0.1:7001\\public\\upload\\image\\20171217213010_bc69fg.png\" width=\"706\" style=\"cursor: nwse-resize;\"></p>', '1', '2017-12-17 11:04:08', '0', '2017-12-17 21:30:16', '16');
INSERT INTO `sta_station` VALUES ('2', '2', '历史沿革sss', '<p>在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\" target=\"_blank\">XSS 攻击</a>。只在可信内容上使用 <code>v-html</code>，<strong>永不</strong>用在用户提交的内容上。</p><p>sss</p>', '1', '2017-12-17 11:04:47', '0', '2017-12-17 23:35:06', '16');
INSERT INTO `sta_station` VALUES ('3', '3', '规章制度', 'aa', '1', '2017-12-17 11:04:54', '0', '2017-12-18 00:09:16', '0');
INSERT INTO `sta_station` VALUES ('4', '3', '规章制度2ssss', '<p>bbssss</p>', '0', '2017-12-17 11:05:04', '0', '2017-12-18 00:16:09', '16');
INSERT INTO `sta_station` VALUES ('5', '3', 'aaaa', '<p>aaa</p>', '1', '2017-12-18 00:19:31', '16', '2017-12-18 00:19:31', '16');
INSERT INTO `sta_station` VALUES ('6', '3', 'ddd', '<p>dd<strong>dd</strong></p>', '1', '2017-12-18 00:20:35', '16', '2017-12-18 00:20:35', '16');
INSERT INTO `sta_station` VALUES ('7', '3', 'sssaaa', '<p>sss</p>', '1', '2017-12-18 00:21:23', '16', '2017-12-18 00:21:23', '16');
INSERT INTO `sta_station` VALUES ('8', '3', 'aa222', '<p>2222</p>', '1', '2017-12-18 00:23:07', '16', '2017-12-18 00:23:07', '16');
INSERT INTO `sta_station` VALUES ('9', '3', '222', '<p>222</p>', '1', '2017-12-18 00:25:01', '16', '2017-12-18 00:25:01', '16');
INSERT INTO `sta_station` VALUES ('10', '4', '专题服务', '<p>专题服务</p>', '1', '2017-12-19 22:19:07', '16', '2017-12-19 22:20:28', '16');
INSERT INTO `sta_station` VALUES ('11', '5', '服务科学研究', '<p>服务科学研究</p>', '1', '2017-12-19 23:16:30', '16', '2017-12-19 23:16:30', '16');
INSERT INTO `sta_station` VALUES ('12', '6', 'aaa', '<p>ssss</p>', '1', '2018-01-03 20:06:08', '16', '2018-01-03 20:06:17', '16');
INSERT INTO `sta_station` VALUES ('13', '4', 'aa', '<p><span style=\"color: rgb(215, 186, 125);\">.image-list-row</span> {</p><p>  <span style=\"color: rgb(156, 220, 254);\">overflow-y</span>: <span style=\"color: rgb(206, 145, 120);\">auto</span>;</p><p>  <span style=\"color: rgb(215, 186, 125);\">.image-item</span> {</p><p>    <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">274px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">250px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span> <span style=\"color: rgb(181, 206, 168);\">4px</span>;</p><p>    <span style=\"color: rgb(215, 186, 125);\">.ivu-card</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-card-head</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">padding</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-footer</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#828282</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-upload</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">130px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-title</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-bottom</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">none</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-edit</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#0d98ff</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-right</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-remove</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#fa2d2d</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-body</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>      }</p><p>    }</p><p>    <span style=\"color: rgb(215, 186, 125);\">.image-item:hover</span> {</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">inherit</span>;</p><p>      }</p><p>    }</p><p><br></p><p>    <span style=\"color: rgb(215, 186, 125);\">img</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>    }</p><p>  }</p><p>  <span style=\"color: rgb(96, 139, 78);\">// @cap: 200px;</span></p><p>  <span style=\"color: rgb(96, 139, 78);\">// height:calc(100%- 200rem);</span></p><p>}</p><p><span style=\"color: rgb(215, 186, 125);\">.image-list-row</span> {</p><p>  <span style=\"color: rgb(156, 220, 254);\">overflow-y</span>: <span style=\"color: rgb(206, 145, 120);\">auto</span>;</p><p>  <span style=\"color: rgb(215, 186, 125);\">.image-item</span> {</p><p>    <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">274px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">250px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span> <span style=\"color: rgb(181, 206, 168);\">4px</span>;</p><p>    <span style=\"color: rgb(215, 186, 125);\">.ivu-card</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-card-head</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">padding</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-footer</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#828282</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-upload</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">130px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-title</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-bottom</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">none</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-edit</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#0d98ff</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-right</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-remove</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#fa2d2d</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-body</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>      }</p><p>    }</p><p>    <span style=\"color: rgb(215, 186, 125);\">.image-item:hover</span> {</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">inherit</span>;</p><p>      }</p><p>    }</p><p><br></p><p>    <span style=\"color: rgb(215, 186, 125);\">img</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>    }</p><p>  }</p><p>  <span style=\"color: rgb(96, 139, 78);\">// @cap: 200px;</span></p><p>  <span style=\"color: rgb(96, 139, 78);\">// height:calc(100%- 200rem);</span></p><p>}</p><p><span style=\"color: rgb(215, 186, 125);\">.image-list-row</span> {</p><p>  <span style=\"color: rgb(156, 220, 254);\">overflow-y</span>: <span style=\"color: rgb(206, 145, 120);\">auto</span>;</p><p>  <span style=\"color: rgb(215, 186, 125);\">.image-item</span> {</p><p>    <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">274px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">250px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span> <span style=\"color: rgb(181, 206, 168);\">4px</span>;</p><p>    <span style=\"color: rgb(215, 186, 125);\">.ivu-card</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-card-head</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">padding</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-footer</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#828282</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-upload</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">130px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-title</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-bottom</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">none</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-edit</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#0d98ff</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-right</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-remove</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#fa2d2d</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-body</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>      }</p><p>    }</p><p>    <span style=\"color: rgb(215, 186, 125);\">.image-item:hover</span> {</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">inherit</span>;</p><p>      }</p><p>    }</p><p><br></p><p>    <span style=\"color: rgb(215, 186, 125);\">img</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>    }</p><p>  }</p><p>  <span style=\"color: rgb(96, 139, 78);\">// @cap: 200px;</span></p><p>  <span style=\"color: rgb(96, 139, 78);\">// height:calc(100%- 200rem);</span></p><p>}</p><p><span style=\"color: rgb(215, 186, 125);\">.image-list-row</span> {</p><p>  <span style=\"color: rgb(156, 220, 254);\">overflow-y</span>: <span style=\"color: rgb(206, 145, 120);\">auto</span>;</p><p>  <span style=\"color: rgb(215, 186, 125);\">.image-item</span> {</p><p>    <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">274px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">250px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span> <span style=\"color: rgb(181, 206, 168);\">4px</span>;</p><p>    <span style=\"color: rgb(215, 186, 125);\">.ivu-card</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-card-head</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">padding</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-footer</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#828282</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-upload</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">130px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-title</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-bottom</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">none</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-edit</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#0d98ff</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-right</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-remove</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#fa2d2d</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-body</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>      }</p><p>    }</p><p>    <span style=\"color: rgb(215, 186, 125);\">.image-item:hover</span> {</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">inherit</span>;</p><p>      }</p><p>    }</p><p><br></p><p>    <span style=\"color: rgb(215, 186, 125);\">img</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>    }</p><p>  }</p><p>  <span style=\"color: rgb(96, 139, 78);\">// @cap: 200px;</span></p><p>  <span style=\"color: rgb(96, 139, 78);\">// height:calc(100%- 200rem);</span></p><p>}</p><p><span style=\"color: rgb(215, 186, 125);\">.image-list-row</span> {</p><p>  <span style=\"color: rgb(156, 220, 254);\">overflow-y</span>: <span style=\"color: rgb(206, 145, 120);\">auto</span>;</p><p>  <span style=\"color: rgb(215, 186, 125);\">.image-item</span> {</p><p>    <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">274px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">250px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span> <span style=\"color: rgb(181, 206, 168);\">4px</span>;</p><p>    <span style=\"color: rgb(215, 186, 125);\">.ivu-card</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-card-head</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">padding</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-footer</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#828282</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-upload</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">130px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-title</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-bottom</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">none</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-edit</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#0d98ff</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-right</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-remove</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#fa2d2d</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-body</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>      }</p><p>    }</p><p>    <span style=\"color: rgb(215, 186, 125);\">.image-item:hover</span> {</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">inherit</span>;</p><p>      }</p><p>    }</p><p><br></p><p>    <span style=\"color: rgb(215, 186, 125);\">img</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>    }</p><p>  }</p><p>  <span style=\"color: rgb(96, 139, 78);\">// @cap: 200px;</span></p><p>  <span style=\"color: rgb(96, 139, 78);\">// height:calc(100%- 200rem);</span></p><p>}<span style=\"color: rgb(215, 186, 125);\">.image-list-row</span> {</p><p>  <span style=\"color: rgb(156, 220, 254);\">overflow-y</span>: <span style=\"color: rgb(206, 145, 120);\">auto</span>;</p><p>  <span style=\"color: rgb(215, 186, 125);\">.image-item</span> {</p><p>    <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">274px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">250px</span>;</p><p>    <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span> <span style=\"color: rgb(181, 206, 168);\">4px</span>;</p><p>    <span style=\"color: rgb(215, 186, 125);\">.ivu-card</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-card-head</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">padding</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-footer</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#828282</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.ivu-upload</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">height</span>: <span style=\"color: rgb(181, 206, 168);\">130px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-item-title</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-bottom</span>: <span style=\"color: rgb(181, 206, 168);\">10px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">none</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-edit</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#0d98ff</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">margin-right</span>: <span style=\"color: rgb(181, 206, 168);\">8px</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra-remove</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>        <span style=\"color: rgb(156, 220, 254);\">color</span>: <span style=\"color: rgb(206, 145, 120);\">#fa2d2d</span>;</p><p>      }</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-body</span> {</p><p>        <span style=\"color: rgb(215, 186, 125);\">cursor</span>: <span style=\"color: rgb(206, 145, 120);\">pointer</span>;</p><p>      }</p><p>    }</p><p>    <span style=\"color: rgb(215, 186, 125);\">.image-item:hover</span> {</p><p>      <span style=\"color: rgb(215, 186, 125);\">.image-extra</span> {</p><p>        <span style=\"color: rgb(156, 220, 254);\">display</span>: <span style=\"color: rgb(206, 145, 120);\">inherit</span>;</p><p>      }</p><p>    }</p><p><br></p><p>    <span style=\"color: rgb(215, 186, 125);\">img</span> {</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-width</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>      <span style=\"color: rgb(156, 220, 254);\">max-height</span>: <span style=\"color: rgb(181, 206, 168);\">100%</span>;</p><p>    }</p><p>  }</p><p>  <span style=\"color: rgb(96, 139, 78);\">// @cap: 200px;</span></p><p>  <span style=\"color: rgb(96, 139, 78);\">// height:calc(100%- 200rem);</span></p><p>}</p><p><br></p>', '1', '2018-01-03 20:53:32', '16', '2018-01-03 20:53:32', '16');

-- ----------------------------
-- Table structure for sta_station_some
-- ----------------------------
DROP TABLE IF EXISTS `sta_station_some`;
CREATE TABLE `sta_station_some` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `station_id` int(11) NOT NULL COMMENT '站点编号',
  `type` int(11) DEFAULT NULL COMMENT '类型：1领导；2设备；3数据；4论文；5学生；6事件；7项目',
  `sec_type` int(11) DEFAULT NULL COMMENT '子类型',
  `some_id` int(11) DEFAULT NULL COMMENT '项编号',
  `order` int(11) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_station_some
-- ----------------------------

-- ----------------------------
-- Table structure for sta_student
-- ----------------------------
DROP TABLE IF EXISTS `sta_student`;
CREATE TABLE `sta_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `start_year` int(11) DEFAULT NULL COMMENT '入学年份',
  `end_year` int(11) DEFAULT NULL COMMENT '毕业年份',
  `degree` smallint(6) DEFAULT NULL COMMENT '学位：1本科；2硕士；3博士；4博士后；5其他',
  `school` varchar(255) DEFAULT NULL COMMENT '就读学校',
  `phone` varchar(255) DEFAULT NULL COMMENT '电话',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `work` varchar(255) DEFAULT NULL COMMENT '工作单位',
  `prize` text COMMENT '获得奖项',
  `enable` smallint(6) DEFAULT '1',
  `created_user` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_student
-- ----------------------------

-- ----------------------------
-- Table structure for sta_student_paper
-- ----------------------------
DROP TABLE IF EXISTS `sta_student_paper`;
CREATE TABLE `sta_student_paper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL COMMENT '学生编号',
  `paper_id` int(11) DEFAULT NULL COMMENT '论文编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_student_paper
-- ----------------------------

-- ----------------------------
-- Table structure for sta_token
-- ----------------------------
DROP TABLE IF EXISTS `sta_token`;
CREATE TABLE `sta_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(50) NOT NULL,
  `last_access` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_token
-- ----------------------------
INSERT INTO `sta_token` VALUES ('1', 'c8e564f9-41eb-4c36-b2e9-59af481fd34e', '2017-11-27 15:34:05', '1');

-- ----------------------------
-- Table structure for sta_upload
-- ----------------------------
DROP TABLE IF EXISTS `sta_upload`;
CREATE TABLE `sta_upload` (
  `data_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT '0' COMMENT '1.论文；2.著作',
  `path` varchar(500) DEFAULT NULL,
  `ext` varchar(50) DEFAULT NULL,
  `enable` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_user` int(11) NOT NULL DEFAULT '0',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_upload
-- ----------------------------
INSERT INTO `sta_upload` VALUES ('3', 'BingImageOfTheDay_20171207', '318655', '0', 'app\\public\\upload\\image\\BingImageOfTheDay_20171207.jpg', null, '1', '2017-12-17 15:27:13', '16', '2017-12-17 15:27:13', '16');
INSERT INTO `sta_upload` VALUES ('4', 'BingImageOfTheDay_20171207', '318655', '0', 'app\\public\\upload\\image\\BingImageOfTheDay_20171207.jpg', '.jpg', '1', '2017-12-17 15:28:36', '16', '2017-12-17 15:28:36', '16');
INSERT INTO `sta_upload` VALUES ('7', 'BingImageOfTheDay_20171204', '347642', '0', 'app\\public\\upload\\image\\BingImageOfTheDay_20171204.jpg', '.jpg', '1', '2017-12-17 16:31:07', '16', '2017-12-17 16:31:07', '16');
INSERT INTO `sta_upload` VALUES ('8', 'BingImageOfTheDay_20171204', '347642', '0', '\\public\\upload\\image\\BingImageOfTheDay_20171204.jpg', '.jpg', '1', '2017-12-17 16:40:47', '16', '2017-12-17 16:40:47', '16');
INSERT INTO `sta_upload` VALUES ('9', 'BingImageOfTheDay', '287255', '0', '\\public\\upload\\image\\BingImageOfTheDay.jpg', '.jpg', '1', '2017-12-17 16:42:35', '16', '2017-12-17 16:42:35', '16');
INSERT INTO `sta_upload` VALUES ('10', 'BingImageOfTheDay_20171204', '347642', '0', '\\public\\upload\\image\\BingImageOfTheDay_20171204.jpg', '.jpg', '1', '2017-12-17 16:44:28', '16', '2017-12-17 16:44:28', '16');
INSERT INTO `sta_upload` VALUES ('11', 'BingImageOfTheDay_20171217', '287255', '0', '\\public\\upload\\image\\BingImageOfTheDay_20171217.jpg', '.jpg', '1', '2017-12-17 20:36:24', '16', '2017-12-17 20:36:24', '16');
INSERT INTO `sta_upload` VALUES ('12', 'BingImageOfTheDay_20171207', '318655', '0', '\\public\\upload\\image\\BingImageOfTheDay_20171207.jpg', '.jpg', '1', '2017-12-17 20:36:47', '16', '2017-12-17 20:36:47', '16');
INSERT INTO `sta_upload` VALUES ('13', 'BingImageOfTheDay_20171217', '287255', '0', '\\public\\upload\\image\\2017-12-17_13_12_14_g5b93n.jpg', '.jpg', '1', '2017-12-17 21:12:14', '16', '2017-12-17 21:12:14', '16');
INSERT INTO `sta_upload` VALUES ('14', '8', '876634', '0', '\\public\\upload\\image\\2017_12_17_13_13_47_s596mi.png', '.png', '1', '2017-12-17 21:13:47', '16', '2017-12-17 21:13:47', '16');
INSERT INTO `sta_upload` VALUES ('15', '9', '1709526', '0', '\\public\\upload\\image\\20171217131610_og1ui4.png', '.png', '1', '2017-12-17 21:16:11', '16', '2017-12-17 21:16:11', '16');
INSERT INTO `sta_upload` VALUES ('16', '1', '562881', '0', '\\public\\upload\\image\\20171217213010_bc69fg.png', '.png', '1', '2017-12-17 21:30:10', '16', '2017-12-17 21:30:10', '16');
INSERT INTO `sta_upload` VALUES ('17', '1', '562881', '0', '\\public\\upload\\image\\20171218220544_301ad5.png', '.png', '1', '2017-12-18 22:05:44', '16', '2017-12-18 22:05:44', '16');
INSERT INTO `sta_upload` VALUES ('18', 'BingImageOfTheDay_20171220', '0', '1', '\\public\\upload\\image\\20180109224822_tiiadr.jpg', '.jpg', '1', '2018-01-09 22:48:23', '16', '2018-01-09 22:48:23', '16');
INSERT INTO `sta_upload` VALUES ('19', '%E6%B5%8B%E8%AF%95', '91173', '1', '\\public\\upload\\image\\20180109224952_qi2e4qd.png', '.png', '1', '2018-01-09 22:49:52', '16', '2018-01-09 22:49:52', '16');
INSERT INTO `sta_upload` VALUES ('20', '%E6%B5%8B%E8%AF%95', '91173', '1', '\\public\\upload\\image\\20180109225208_7ctam.png', '.png', '1', '2018-01-09 22:52:08', '16', '2018-01-09 22:52:08', '16');
INSERT INTO `sta_upload` VALUES ('21', '测试', '91173', '1', '\\public\\upload\\image\\20180109225229_0cc8h8.png', '.png', '1', '2018-01-09 22:52:30', '16', '2018-01-09 22:52:30', '16');
INSERT INTO `sta_upload` VALUES ('22', '测试', '91173', '1', '\\public\\upload\\image\\20180109225745_s9uwcb.png', '.png', '1', '2018-01-09 22:57:45', '16', '2018-01-09 22:57:45', '16');
INSERT INTO `sta_upload` VALUES ('23', '19', '863780', '1', '\\public\\upload\\image\\20180109230004_g70a3e.psd', '.psd', '1', '2018-01-09 23:00:04', '16', '2018-01-09 23:00:04', '16');
INSERT INTO `sta_upload` VALUES ('24', '6', '26137', '1', '\\public\\upload\\image\\20180109230248_g27i4k.png', '.png', '1', '2018-01-09 23:02:48', '16', '2018-01-09 23:02:48', '16');
INSERT INTO `sta_upload` VALUES ('25', '5', '127317', '1', '\\public\\upload\\image\\20180109230403_ji74sp.png', '.png', '1', '2018-01-09 23:04:03', '16', '2018-01-09 23:04:03', '16');
INSERT INTO `sta_upload` VALUES ('26', '6', '26137', '1', '\\public\\upload\\image\\20180109230502_y5zmmj.png', '.png', '1', '2018-01-09 23:05:02', '16', '2018-01-09 23:05:02', '16');
INSERT INTO `sta_upload` VALUES ('27', '8', '81020', '1', '\\public\\upload\\image\\20180109233543_83uk6u.png', '.png', '1', '2018-01-09 23:35:43', '16', '2018-01-09 23:35:43', '16');
INSERT INTO `sta_upload` VALUES ('28', '5', '127317', '1', '\\public\\upload\\image\\20180109233724_98widp.png', '.png', '1', '2018-01-09 23:37:24', '16', '2018-01-09 23:37:24', '16');
INSERT INTO `sta_upload` VALUES ('29', '22', '171492', '1', '\\public\\upload\\image\\20180109233921_h6klo.png', '.png', '1', '2018-01-09 23:39:21', '16', '2018-01-09 23:39:21', '16');
INSERT INTO `sta_upload` VALUES ('30', '2', '566168', '2', '\\public\\upload\\image\\20180110215245_v3zd7l.png', '.png', '1', '2018-01-10 21:52:45', '16', '2018-01-10 21:52:45', '16');
INSERT INTO `sta_upload` VALUES ('31', '8', '81020', '2', '\\public\\upload\\image\\20180110222618_x52dfa.png', '.png', '1', '2018-01-10 22:26:18', '16', '2018-01-10 22:26:18', '16');

-- ----------------------------
-- Table structure for sta_user
-- ----------------------------
DROP TABLE IF EXISTS `sta_user`;
CREATE TABLE `sta_user` (
  `data_id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `salt` varchar(50) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `name` varchar(50) DEFAULT NULL COMMENT '真是姓名',
  `department` varchar(255) DEFAULT NULL COMMENT '学校',
  `phone` varchar(255) DEFAULT NULL COMMENT '电话',
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `enable` smallint(6) DEFAULT '0' COMMENT '是否启用',
  `is_admin` smallint(6) NOT NULL DEFAULT '0' COMMENT '是否管理员',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_user` int(11) DEFAULT '0' COMMENT '创建者',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_user` int(11) DEFAULT '0' COMMENT '创建者',
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta_user
-- ----------------------------
INSERT INTO `sta_user` VALUES ('15', 'test', '248a019f52e6ae6360dbe2c983480c37', '8432f28942c75cffa66d4e78005d52e91659b6370025801f7c710cfecff8fb37edc400728c45d3015adeedf056743ccb9bf5af16e1643eb838c9e730801a1f0b', 'test', null, null, null, null, null, '1', '0', '2017-12-16 14:47:27', '0', '2017-12-16 14:47:42', '0');
INSERT INTO `sta_user` VALUES ('16', 'admin', '0ff02c74b2ae08940cb6f6bb13e28191', 'e15a81d31bdb2c718473b0aa2110d8b566ad7a3e5d1967d2ec9befc8f1ad3c303879b343f6e01930b1eb75ca74d920819d4e102d5b052b49222df2f21b97c979', '管理员', '', '', null, '', null, '1', '1', '2017-12-16 14:48:22', '0', '2017-12-16 14:49:22', '16');
INSERT INTO `sta_user` VALUES ('17', 'tt', '3eecccad42228f54e477939d34faab12', '5f2b743a3031c367e3c8c5b513f22386c7162aa0ada1f28ac3ab3b8126288940177512d8323754eda143967c7d4bf50d42ac7fda8e4877674ef630a181c616fe', 't', 't', '', null, 't@qq.com', null, '0', '0', '2017-12-16 18:14:00', '0', '2017-12-16 18:14:00', '0');
INSERT INTO `sta_user` VALUES ('18', 'q', '1a0e5be4b837c47689845077bad98077', '31b61876c0453d5e25b1b1138c5d2ffa1faf9f24f127295e76e454b30e503058cc8233b24a45424fa27b47dd9f1c09fbc9aad8ac46126513adb2fb59d83837a5', 'q', 'q', '', null, 'q@qq.com', null, '0', '0', '2017-12-16 18:22:46', '0', '2017-12-16 18:22:46', '0');
INSERT INTO `sta_user` VALUES ('19', 'a', '0db196c0254a503953c46f8661af54ae', '34e9d2643baf3f247702353af1466788bdb572091f23740ca150bd2d056099b7b249ae8d38bcacfc668ee7f16257f2f57e8d304288dc9ddde0165534bd8457ac', 'a', 'a', '', null, 'a@a.com', null, '1', '0', '2017-12-16 18:23:53', '0', '2017-12-16 18:24:21', '16');
