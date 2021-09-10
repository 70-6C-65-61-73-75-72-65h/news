import mongoose from 'mongoose';
interface IPermission {
  name: string;
  description?: string;
}
const PermissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    collection: 'permissions',
  },
);

const Permission = mongoose.model<IPermission>('Permission', PermissionSchema);
export default Permission;
