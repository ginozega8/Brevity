const {Router} = require("express")
const router = Router()

const { getUser, createUser, findUser, deleteUser, updateUser } = require("../controller/userController") //Get requests from controller

router.route("/") //Assign methods
    .get(getUser)
    .post(createUser)

router.route('/:id') //Assign methods for specific users.
        .get(findUser)
        .delete(deleteUser)
        .put(updateUser)

module.exports = router;