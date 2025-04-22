
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './Users.js';


const Note = sequelize.define('Note', {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Text: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  
  export default Note ;
  

