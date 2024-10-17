// src/components/atoms/SubmittedData.tsx
import React from 'react';

type SubmittedDataProps = {
  email: string;
  password: string;
};

const SubmittedData: React.FC<SubmittedDataProps> = ({ email, password }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold">Submitted Data:</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
    </div>
  );
};

export default SubmittedData;
