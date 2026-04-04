import React from 'react';

export const AllenKey: React.FC<{ size?: number; color?: string }> = ({ size = 40, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18V6H17V10" />
  </svg>
);

export const WobblyChair: React.FC<{ size?: number; color?: string }> = ({ size = 60, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18V6H17V10" />
    <path d="M7 10H17" />
    <path d="M9 18V22" />
    <path d="M15 18V22" />
    <path d="M11 6V2" />
    <path d="M13 6V2" />
  </svg>
);

export const WrenchIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const WarningBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ 
    border: '2px solid var(--manual-black)', 
    padding: '20px', 
    margin: '20px 0', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px',
    backgroundColor: '#fff'
  }}>
    <div style={{ flexShrink: 0 }}><WrenchIcon size={48} /></div>
    <div>{children}</div>
  </div>
);
