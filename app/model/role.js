'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('role', {
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
    ename: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'ename'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    },
    roleType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role_type'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time'
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
    tableName: 'role'
  });
};
