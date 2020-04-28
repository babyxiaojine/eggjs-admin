/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tRoleMenu', {
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
    tableName: 't_role_menu'
  });
};
