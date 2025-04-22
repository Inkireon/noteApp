import User from './Users.js';
import Note from './Notes.js';

User.hasMany(Note, { foreignKey: 'userId' });
Note.belongsTo(User, { foreignKey: 'userId' });

export { User, Note };

