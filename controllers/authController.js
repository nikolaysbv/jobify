import { StatusCodes } from "http-status-codes"
import User from "../models/User.js"

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new Error("please provide all values")
  }

  const user = await User.create({ name, email, password })
  res.status(StatusCodes.CREATED).json({ user })
}
const login = async (req, res) => {
  res.send("login")
}
const updateUser = async (req, res) => {
  res.send("update user")
}

export { register, login, updateUser }
