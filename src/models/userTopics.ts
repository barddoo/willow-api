import {Column, CreatedAt, ForeignKey, Model, Table, UpdatedAt} from "sequelize-typescript";
import User from "./user";
import Topic from "./topic";

@Table({tableName:'users_topics'})
export default class UsersTopics extends Model {
  @ForeignKey(() => User)
  @Column
  user_id?: number;

  @ForeignKey(() => Topic)
  @Column
  topic_id?: number;

  @CreatedAt
  createdAt?: Date

  @UpdatedAt
  updatedAt?: Date
}

