'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('userRole', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'user_id'
    },
    roleId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'role_id'
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
    tableName: 'user_role'
  });
};
