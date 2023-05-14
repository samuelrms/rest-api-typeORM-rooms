import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { discipline_name } = req.body;

    if (!discipline_name)
      return res.status(400).json({ msg: "Course name is required" });

    try {
      const newSubject = subjectRepository.create({
        name: discipline_name,
      });

      await subjectRepository.save(newSubject);

      return res.status(201).json(newSubject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
