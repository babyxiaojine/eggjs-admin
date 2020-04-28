/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tInterfaceConf', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
      field: 'name'
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'url'
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'description'
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
    }
  }, {
    tableName: 't_interface_conf'
  });
};
