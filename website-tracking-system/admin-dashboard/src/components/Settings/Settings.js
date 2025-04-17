import React, { useEffect, useState } from "react";
import { fetchBlockedSites } from "../../api";

const Settings = () => {
  const [blockedSites, setBlockedSites] = useState([]);

  useEffect(() => {
    const getSites = async () => {
      const res = await fetchBlockedSites();
      setBlockedSites(res.data);
    };
    getSites();
  }, []);

  return (
    <div>
      <h2>Blocked Sites</h2>
      <ul>
        {blockedSites.map((site, i) => (
          <li key={i}>{site.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
