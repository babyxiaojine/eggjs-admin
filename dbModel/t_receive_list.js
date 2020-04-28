/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tReceiveList', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    activityId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'activity_id'
    },
    orderCode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'order_code'
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'sku'
    },
    productName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'product_name'
    },
    applyQty: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'apply_qty'
    },
    createBy: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'create_by'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    },
    updateBy: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'update_by'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time'
    }
  }, {
    tableName: 't_receive_list'
  });
};
