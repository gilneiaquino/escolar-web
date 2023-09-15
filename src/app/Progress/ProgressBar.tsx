import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Converter progress para número
  const progressNumber = Number(progress);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progressNumber}%` }}
        aria-valuenow={progressNumber}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
      {progressNumber}%
    </div>
  );
};

export default ProgressBar;
