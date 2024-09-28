import React from 'react';

const ContributionGraph = () => {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const days = ['Mon', 'Wed', 'Fri'];

  // Generate random contribution data
  const generateContributions = () => {
    return Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5));
  };

  const contributions = generateContributions();

  const getContributionColor = (value) => {
    if (value === 0) return 'bg-gray-800';
    if (value === 1) return 'bg-green-900';
    if (value === 2) return 'bg-green-700';
    if (value === 3) return 'bg-green-500';
    return 'bg-green-300';
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="flex">
        <div className="w-8 mt-6">
          {days.map((day, index) => (
            <div key={day} className="h-[30px] text-xs text-gray-500">{day}</div>
          ))}
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            {months.map((month) => (
              <div key={month} className="text-xs text-gray-500">{month}</div>
            ))}
          </div>
          <div className="grid grid-cols-52 gap-[2px]">
            {contributions.map((value, index) => (
              <div
                key={index}
                className={`w-[10px] h-[10px] ${getContributionColor(value)}`}
                title={`${value} contributions`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
        <span>Learn how we count contributions</span>
        <div className="flex items-center">
          <span className="mr-1">Less</span>
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((value) => (
              <div
                key={value}
                className={`w-[10px] h-[10px] ${getContributionColor(value)}`}
              />
            ))}
          </div>
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;