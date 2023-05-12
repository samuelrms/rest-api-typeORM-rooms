import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./Room";

@Entity("videos")
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", length: 100 })
  title: string;

  @Column({ type: "text", length: 500 })
  url: string;

  @ManyToOne(() => Room, (room) => room.videos)
  @JoinColumn({ name: "room_id" })
  room: Room;
}
