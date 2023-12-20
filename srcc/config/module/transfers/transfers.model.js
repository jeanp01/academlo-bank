import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database.js';

const Transfer = sequelize.define('transfers', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Transfer;
