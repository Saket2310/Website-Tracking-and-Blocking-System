import React, { useEffect, useState } from "react";
import { fetchLogs } from "../../api";

const Dashboard = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const getLogs = async () => {
      const res = await fetchLogs();
      setLogs(res.data);
    };
    getLogs();
  }, []);

  return (
    <div>
      <h2>Access Logs</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log.url} - {new Date(log.timestamp).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
