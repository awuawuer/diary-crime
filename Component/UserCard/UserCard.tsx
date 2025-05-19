import { FC } from "react";
import { Package } from "lucide-react";

interface UserCardProps {
  type: string;
  value: number;
  bgColor: string;
}

const UserCard: FC<UserCardProps> = ({ type, value, bgColor }) => {
  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Package className="text-gray-800 w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">{type}</p>
          <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
