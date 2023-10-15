import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello you are authenticated")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello, you are authorized and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin")
// })

router.put("/:id", verifyUser, updateUser)

router.delete("/:id", verifyUser, deleteUser)

router.get("/:id", verifyUser, getUser)

router.get("/", verifyAdmin, getAllUsers)


export default router