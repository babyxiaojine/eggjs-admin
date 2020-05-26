'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('seq', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    seqName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
      field: 'seq_name'
    },
    seqIndex: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'seq_index'
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
    version: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'version'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'description'
    }
  }, {
    tableName: 'seq'
  });
};
