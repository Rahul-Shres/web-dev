module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull : false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      otp:{
        type: DataTypes.STRING,
        allowNull: true
      },
      otpGeneratedTime :{
        type: DataTypes.DATE, // Change the data type to DataTypes.DATE
        allowNull: true
      }
    
    });
    return User;
  };