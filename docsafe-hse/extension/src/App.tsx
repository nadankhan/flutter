import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [file, setFile] = useState<any>(null);
  const [res, setRes] = useState<any>(null);
  return (
    <div className="p-10 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800">DocSafe HSE Analyzer</h1>
      <div className="mt-5 p-5 bg-white rounded shadow">
        <input type="file" onChange={e => setFile(e.target.files![0])} />
        <button className="mt-3 bg-green-500 text-white p-2 rounded">Analyze</button>
      </div>
    </div>
  );
}
