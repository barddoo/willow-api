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
