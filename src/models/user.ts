import {BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt} from "sequelize-typescript";
import UsersTopics from "./userTopics";
import Topic from "./topic";

@Table({tableName: 'users'})
export default class User extends Model {
  @Column({primaryKey: true, autoIncrement: true})
  id?: number;

  @Column
  name?: string;

  @Column
  email?: string;

  @BelongsToMany(() => Topic, () => UsersTopics)
  topics?: Topic[]


  @CreatedAt
  createdAt?: Date

  @UpdatedAt
  updatedAt?: Date
}


// export const User = sequelize.define<UserModel>(
//   'User',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   }, {
//     createdAt: false,
//     updatedAt: false,
//     underscored: true,
//     modelName: 'users',
//   },
// );
