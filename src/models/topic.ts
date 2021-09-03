import {BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript'
import User from "./user";
import UsersTopics from "./userTopics";

@Table({tableName: 'topics'})
export default class Topic extends Model {
  @Column({primaryKey: true, autoIncrement: true})
  id?: number

  @Column
  english_name?: string

  @Column
  klingon_name?: string

  @BelongsToMany(() => User, () => UsersTopics)
  users?: User[]

  @CreatedAt
  createdAt?: Date

  @UpdatedAt
  updatedAt?: Date

}

// export const Topic = sequelize.define<TopicModel>(
//   'Topic',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     english_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     klingon_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   }, {
//     createdAt: false,
//     updatedAt: false,
//     underscored: true,
//     tableName: 'topics',
//   },
// );
