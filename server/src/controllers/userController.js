import express from "express";
import { getAll, save} from "../services/userService";
import validators from "../models/request-models";
import {handleValidation} from "../middlewares";

const router = express.Router();

const getHandler = async (req, res, next) => {
    try {
        const items = await getAll();
        res.status(200).send(items);
    } catch (error) {
        return next(error, req, res);
    }
};

const postHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const id = await save(body);
        res.status(201).send(id);
    } catch (error) {
        return next(error, req, res);
    }
};

router.get('/',getHandler);
router.post('/', handleValidation(validators.userSchemaValidate), postHandler);

export default router;