import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const users = [
    { id: 1, name: 'Hiển', email: 'Hien@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Hoàng', email: 'Hoang@gmail.com', address: 'Đà Nẵng' },
    { id: 3, name: 'Hưng', email: 'Hung@gmail.com', address: 'TPHCM' },
  ];

  const user = users.find(user => user.id === Number(userId));

  if (!user) {
    return <div className="container mx-auto p-4">Người dùng không tồn tại</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chi tiết người dùng</h1>
      <p className="text-xl font-semibold">{user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserDetail;
