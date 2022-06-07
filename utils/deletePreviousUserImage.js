import User from "../models/User.js"
import * as fs from "node:fs/promises"

const deletePreviousUserImage = async (userId, imageUsed) => {
  try {
    const uploads = await fs.readdir(
      new URL("../client/public/uploads", import.meta.url)
    )
    const userImages = uploads.filter((image) => image.startsWith(userId))
    for (let image of userImages) {
      if (image === imageUsed.split("/")[2]) continue
      await fs.unlink(
        new URL(`../client/public/uploads/${image}`, import.meta.url)
      )
    }
  } catch (error) {
    console.log(error)
  }
}

export default deletePreviousUserImage
