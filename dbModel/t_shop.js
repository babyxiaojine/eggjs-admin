/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tShop', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    shopName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'shop_name'
    },
    shopCode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      field: 'shop_code'
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
    },
    enableFlag: {
      type: DataTypes.STRING(1),
      allowNull: false,
      field: 'enable_flag'
    }
  }, {
    tableName: 't_shop'
  });
};
