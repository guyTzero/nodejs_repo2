import user from "../../models/users/user.model"
import * as R from "ramda"
import { findAndCreate } from "../../utils/domains"

export default async function insertUser(data) {
  try {
    const resp = await findAndCreate({
      model: user,
      filter: {
        where: {
          email: data.email,
        },
      },
      data: data,
    })
    return resp
  } catch (error) {
    return error
  }
}