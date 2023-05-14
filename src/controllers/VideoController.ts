import { Request, Response } from "express";
import { videoRepository } from "../repositories/videoRepository";

export class VideoController {
  async create(req: Request, res: Response) {
    const { video_title, url } = req.body;

    if (!video_title)
      return res.status(400).json({ msg: "Video title is required" });

    if (!url) return res.status(400).json({ msg: "URL is required" });

    try {
      const newVideo = videoRepository.create({
        title: video_title,
        url: url,
      });

      await videoRepository.save(newVideo);

      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
