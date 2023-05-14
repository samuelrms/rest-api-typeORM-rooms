import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";
import { VideoController } from "../controllers/VideoController";
import { RoomController } from "../controllers/RoomController";

const router = Router();

router.post("/subject", new SubjectController().create);
router.post("/video", new VideoController().create);
router.post("/room", new RoomController().create);

export default router;
