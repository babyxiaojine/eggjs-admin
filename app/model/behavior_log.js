'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('behaviorLog', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    userName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'user_name'
    },
    entrance: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'entrance'
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'url'
    },
    moduleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'module_name'
    },
    subModuleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'sub_module_name'
    },
    operationName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'operation_name'
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'content'
    },
    browserInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'browser_info'
    },
    createBy: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'create_by'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    },
    updateBy: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'update_by'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time'
    }
  }, {
    tableName: 'behavior_log'
  });
};
