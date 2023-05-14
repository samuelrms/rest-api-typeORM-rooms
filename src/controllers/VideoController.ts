import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";

export class VideoController {
  async create(req: Request, res: Response) {
    const { video_title, url } = req.body;
    const { id_class } = req.params;

    if (!video_title)
      return res.status(400).json({ msg: "Video title is required" });

    if (!url) return res.status(400).json({ msg: "URL is required" });

    try {
      const room = await roomRepository.findOneBy({
        id: id_class as unknown as number,
      });

      if (!room) return res.status(404).json({ msg: "Room not found" });

      const newVideo = videoRepository.create({
        title: video_title,
        url,
        room,
      });

      await videoRepository.save(newVideo);

      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
