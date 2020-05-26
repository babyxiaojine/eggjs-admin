'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('roleMenu', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    roleId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'role_id'
    },
    menuId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'menu_id'
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
      allowNull: true,
      field: 'create_by'
    },
    updateBy: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'update_by'
    }
  }, {
    tableName: 'role_menu'
  });
};
