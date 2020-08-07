'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('menu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'name'
    },
    nameEn: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name_en'
    },
    href: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'href'
    },
    hrefAlias: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'href_alias'
    },
    parentId: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id'
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'sort'
    },
    permission: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'permission'
    },
    showFlag: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      field: 'show_flag'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time'
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'icon'
    },
    menuType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '0',
      field: 'menu_type'
    },
    createBy: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'create_by'
    },
    updateBy: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'update_by'
    },
    extend: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'extend'
    },
    more: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'more'
    }
  }, {
    tableName: 'cate'
  });
};
