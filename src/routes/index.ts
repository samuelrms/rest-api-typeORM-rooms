import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";
import { RoomController } from "../controllers/RoomController";
import { VideoController } from "../controllers/VideoController";
import { RoomSubjectController } from "../controllers/RoomSubjectController";
import { ListRoomController } from "../controllers/ListRoom";

const router = Router();

router.post("/subject", new SubjectController().create);
router.post("/room", new RoomController().create);
router.post("/room/:id_class/create", new VideoController().create);
router.post("/room/:id_class/subject", new RoomSubjectController().create);
router.get("/room", new ListRoomController().list);

export default router;
