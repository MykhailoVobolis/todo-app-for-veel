'use client';

import React from 'react';

export interface GlobalErrorProps {
  message: string;
}

export default function GlobalError({ message }: GlobalErrorProps) {
  return (
    <div className="error-container">
      <p>An error occurred: {message}</p>
    </div>
  );
}
