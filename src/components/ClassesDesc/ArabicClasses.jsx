import React, { useEffect } from 'react';

export default function ArabicClasses() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <div>ArabicClasses</div>;
}
