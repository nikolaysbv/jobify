import { StatusCodes } from "http-status-codes"
import User from "../models/User.js"
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js"
import deletePreviousUserImage from "../utils/deletePreviousUserImage.js"

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values")
  }

  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use")
  }

  const user = await User.create({ name, email, password })

  const token = user.createJWT()

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError("Please provide all values")
  }

  const user = await User.findOne({ email }).select("+password")
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  const token = user.createJWT()
  user.password = undefined

  res.status(StatusCodes.OK).json({ user, token, location: user.location })
}

const updateUser = async (req, res) => {
  const { email, name, lastName, location, currency, image, profession, bio } =
    req.body
  const userId = req.user.userId

  if (
    !email ||
    !name ||
    !lastName ||
    !location ||
    !currency ||
    !image ||
    !profession
  ) {
    throw new BadRequestError("Please provide all values")
  }

  deletePreviousUserImage(userId, image)

  const user = await User.findOne({ _id: userId })

  user.email = email
  user.name = name
  user.lastName = lastName
  user.location = location
  user.currency = currency
  user.image = image
  user.profession = profession
  user.bio = bio

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token, location: user.location })
}

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  if (!oldPassword || !newPassword) {
    throw new BadRequestError("Please provide all values")
  }

  const user = await User.findOne({ _id: req.user.userId }).select("+password")
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  const isPasswordCorrect = await user.comparePassword(oldPassword)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  user.password = newPassword

  await user.save()

  res.status(StatusCodes.OK).json({ msg: "Password successfully changed!" })
}

const uploadImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError("No File Uploaded")
  }
  const productImage = req.files.image

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please Upload Image")
  }

  const maxSize = 1024 * 1024 * 10

  if (productImage.size > maxSize) {
    throw new BadRequestError("Please upload image smaller than 10MB")
  }

  const imagePath = new URL(
    `../client/public/uploads/${req.user.userId}-${productImage.name}`,
    import.meta.url
  )
  await productImage.mv(imagePath)

  res
    .status(StatusCodes.OK)
    .json({ image: `/uploads/${req.user.userId}-${productImage.name}` })
}

export { register, login, updateUser, changePassword, uploadImage }
