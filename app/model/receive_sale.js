'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('receiveSale', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    shopId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'shop_id'
    },
    activityId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'activity_id'
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
    saleQty: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'sale_qty'
    },
    differentQty: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'different_qty'
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'sku'
    },
    createBy: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'create_by'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    },
    updateBy: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'update_by'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time'
    }
  }, {
    tableName: 'receive_sale'
  });
};
