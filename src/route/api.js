
import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsersAPI);
    router.post('/create-user-api', APIController.createNewUserAPI);
    router.put('/update-user-api', APIController.updateUserAPI);
    router.delete('/delete-user-api/:id', APIController.deleteUserAPI);

    return app.use('/api/v1', router);
}

export default initAPIRoute;