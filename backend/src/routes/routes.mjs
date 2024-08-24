import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send({msg: 'Welcome to Eat N Play'});
})

export default router;