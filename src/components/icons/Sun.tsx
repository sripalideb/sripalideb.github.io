import React from 'react';

const Sun: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="m12 1 0 6m0 10 0 6M4.22 4.22l4.24 4.24m8.48 8.48 4.24 4.24M1 12l6 0m10 0 6 0M4.22 19.78l4.24-4.24m8.48-8.48 4.24-4.24"></path>
  </svg>
);

export default Sun;