module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("news", {
        title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      image:{
        type: DataTypes.STRING,
      }
    
    });
    return News;
  };