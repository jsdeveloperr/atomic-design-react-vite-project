
import React from 'react';
import Button from '@atoms/Button';

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="p-2 border rounded-lg focus:ring focus:ring-blue-500"
      />
    </div>
  );
};

export default LabeledInput;
