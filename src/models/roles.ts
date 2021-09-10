import mongoose from 'mongoose';
interface IRole {
  name: string;
  description?: string;
  permissions: Array<{ type: mongoose.Types.ObjectId; ref: string }>;
}
const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    permissions: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Permission',
      },
    ],
  },
  {
    collection: 'roles',
  },
);

const Role = mongoose.model<IRole>('Role', RoleSchema);
export default Role;
