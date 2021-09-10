import IUser from '@/interfaces/IUser';
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true, minLength: 10, select: false },
    email: { type: String, required: true },
    roles: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Role',
      },
    ],
  },
  { collection: 'users' },
);

const Users = mongoose.model<IUser>('User', usersSchema);

export default Users;
