'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define(
    'tUser',
    {
      id: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
        field: 'id',
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'name',
      },
      loginName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        field: 'login_name',
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'password',
      },
      sex: {
        type: DataTypes.INTEGER(2),
        allowNull: true,
        field: 'sex',
      },
      userNo: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        field: 'user_no',
      },
      createTime: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'create_time',
      },
      updateTime: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'update_time',
      },
      createBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'create_by',
      },
      userType: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        field: 'user_type',
      },
      email: {
        type: DataTypes.STRING(32),
        allowNull: true,
        field: 'email',
      },
      mobile: {
        type: DataTypes.STRING(32),
        allowNull: false,
        field: 'mobile',
      },
      photo: {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'photo',
      },
      loginIp: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'login_ip',
      },
      loginDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'login_date',
      },
      loginFlag: {
        type: DataTypes.STRING(64),
        allowNull: true,
        field: 'login_flag',
      },
      updateBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'update_by',
      },
      remarks: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'remarks',
      },
      enableFlag: {
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: '0',
        field: 'enable_flag',
      },
      shopId: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'shop_id',
      },
      shopOwner: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
        field: 'shop_owner',
      },
    },
    {
      tableName: 't_user',
    }
  );
};
