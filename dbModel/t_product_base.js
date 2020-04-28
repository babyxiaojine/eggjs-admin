/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tProductBase', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    shopId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'shop_id'
    },
    barcode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'barcode'
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'sku'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'price'
    },
    productName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'product_name'
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
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'create_by'
    },
    createByName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'create_by_name'
    },
    updateBy: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'update_by'
    }
  }, {
    tableName: 't_product_base'
  });
};
