'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('menu', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'name'
    },
    href: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'href'
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
      allowNull: false,
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
    }
  }, {
    tableName: 'menu',
  });
};
