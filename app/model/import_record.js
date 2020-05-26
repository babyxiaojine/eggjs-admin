'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('importRecord', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    typeCode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'type_code'
    },
    typeName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'type_name'
    },
    originalFilePath: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'original_file_path'
    },
    createBy: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'create_by'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'create_time'
    },
    updateBy: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'update_by'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time'
    }
  }, {
    tableName: 'import_record'
  });
};
