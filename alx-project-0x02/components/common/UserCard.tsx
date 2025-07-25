// components/common/UserCard.tsx

import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 mb-4 border border-gray-200">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
}
