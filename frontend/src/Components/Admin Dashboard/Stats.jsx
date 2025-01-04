import React from 'react';

const Stats = () => {
  const statsData = [
    { label: 'Total Users', value: '1,245' },
    { label: 'Active Sessions', value: '134' },
    { label: 'Revenue', value: '$24,580' },
    { label: 'New Customers', value: '56' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {statsData.map((stat, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-700 font-semibold text-lg">{stat.label}</h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
