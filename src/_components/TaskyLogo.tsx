import { FC } from "react";

const TaskyLogo: FC<{ size?: number }> = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
    <rect x="8" y="10" width="13" height="2.5" rx="1.25" fill="white" fillOpacity="0.9" />
    <rect x="8" y="16.75" width="10" height="2.5" rx="1.25" fill="white" fillOpacity="0.7" />
    <rect x="8" y="23.5" width="7" height="2.5" rx="1.25" fill="white" fillOpacity="0.5" />
    <circle cx="26" cy="24" r="6" fill="white" fillOpacity="0.15" />
    <path d="M23 24l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

export default TaskyLogo;
