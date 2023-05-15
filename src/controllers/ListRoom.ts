import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepository";

export class ListRoomController {
  async list(req: Request, res: Response) {
    try {
      const rooms = await roomRepository.find({
        relations: {
          subjects: true,
          videos: true,
        },
      });

      return res.status(200).json(rooms);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
