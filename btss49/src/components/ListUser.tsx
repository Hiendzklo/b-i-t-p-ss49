import React from 'react';
import { Link } from 'react-router-dom';

const ListUser: React.FC = () => {
  const users = [
    { id: 1, name: 'Hiển', email: 'Hien@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Hoàng', email: 'Hoang@gmail.com', address: 'Đà Nẵng' },
    { id: 3, name: 'Hưng', email: 'Hung@gmail.com', address: 'TPHCM' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách người dùng</h1>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="p-4 border rounded">
            <p className="text-xl font-semibold">{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <Link
              to={`/user/${user.id}`}
              className="text-blue-500 underline mt-2 inline-block"
            >
              Xem chi tiết
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
