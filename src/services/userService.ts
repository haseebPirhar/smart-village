import { logout } from "@/controllers";
import { User } from "@/models/userModel";

export const getAllUsers = async () => {
  const users = await User.find().exec();
  return users;
};

export const getUserById = async (userId: string) => {
  let user = await User.findById(userId).exec();
  if (!user) {
    return null;
  }
  return user;
};

export const updateUser = async (userId: string, updateData: any) => {
  let user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  }).exec();
  if (!user) {
    return null;
  }
  return user;
};

export const deleteUser = async (userId: string) => {
  return await User.findByIdAndDelete(userId).exec();
};

export const findUserByEmail = async (email: string) => {
  let user = await User.findOne({ email }).exec();
  if (!user) {
    return null;
  }
  return user;
};

const getUsersInfo = async (userIds: string[]) => {
  let users = await User.find({ _id: { $in: userIds } }).exec();
  return users;
};

const Logout = async (user: { tokens: never[]; save: () => any; }) => {
  user.tokens = [];
  await user.save();
}

export default {
  getUserById,
  updateUser,
  deleteUser,
  findUserByEmail,
  getAllUsers,
  getUsersInfo,
  Logout,
};
