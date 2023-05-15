import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepository";

export class RoomSubjectController {
  async create(req: Request, res: Response) {
    const { subject_id } = req.body;
    const { id_class } = req.params;

    try {
      const room = await roomRepository.findOneBy({
        id: id_class as unknown as number,
      });

      if (!room) return res.status(404).json({ msg: "Room not found" });

      const subject = await subjectRepository.findOneBy({
        id: subject_id as unknown as number,
      });

      if (!subject) return res.status(404).json({ msg: "Subject not found" });

      const roomUpdate = {
        ...room,
        subjects: [subject],
      };

      await roomRepository.save(roomUpdate);

      return res.status(201).json(room);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
