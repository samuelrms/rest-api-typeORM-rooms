import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";
import { RoomController } from "../controllers/RoomController";
import { VideoController } from "../controllers/VideoController";

const router = Router();

router.post("/subject", new SubjectController().create);
router.post("/room", new RoomController().create);
router.post("/room/:id_class/create", new VideoController().create);

export default router;
