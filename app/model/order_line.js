'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('orderLine', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    orderId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'order_id'
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'sku'
    },
    barcode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'barcode'
    },
    productName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'product_name'
    },
    qty: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'qty'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'price'
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
    tableName: 'order_line'
  });
};
