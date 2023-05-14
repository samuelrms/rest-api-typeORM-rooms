import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";

export class RoomController {
  async create(req: Request, res: Response) {
    const { room_name, room_description } = req.body;

    if (!room_name)
      return res.status(400).json({ msg: "Room name is required" });

    if (!room_description)
      return res.status(400).json({ msg: "Room description is required" });

    try {
      const newRoom = roomRepository.create({
        name: room_name,
        description: room_description,
      });

      await roomRepository.save(newRoom);

      return res.status(201).json(newRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
