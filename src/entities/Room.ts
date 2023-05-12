import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", length: 100 })
  name: string;

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];
}
