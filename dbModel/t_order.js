/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tOrder', {
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
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'order_code'
    },
    userType: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      field: 'user_type'
    },
    userNo: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'user_no'
    },
    userName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'user_name'
    },
    userMobile: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'user_mobile'
    },
    cashierName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'cashier_name'
    },
    cashierNo: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'cashier_no'
    },
    orderAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_amount'
    },
    paymentStatus: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      field: 'payment_status'
    },
    payTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'pay_time'
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
    tableName: 't_order'
  });
};
