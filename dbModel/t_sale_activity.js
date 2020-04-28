/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tSaleActivity', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    activityName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'activity_name'
    },
    shopId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'shop_id'
    },
    activityStatus: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0',
      field: 'activity_status'
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
    createByName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'create_by_name'
    },
    receiveListName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'receive_list_name'
    }
  }, {
    tableName: 't_sale_activity'
  });
};
