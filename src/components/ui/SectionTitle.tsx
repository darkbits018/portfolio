import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="relative mb-12">
      <h2 className="text-3xl font-bold text-white text-center">
        {children}
      </h2>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-blue-500 rounded-full"></div>
    </div>
  );
}