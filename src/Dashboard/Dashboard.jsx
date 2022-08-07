import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Dashboard = () => {
  const INTERVAL = 15000;

  const [resources, setResources] = useState([
    { label: "accounts", data: null },
    { label: "assets", data: null },
    { label: "customers", data: null },
    { label: "datapoints", data: null },
    { label: "devices", data: null },
    { label: "documents", data: null },
    { label: "forms", data: null },
    { label: "invites", data: null },
    { label: "media", data: null },
    { label: "messages", data: null },
    { label: "namespaces", data: null },
    { label: "orders", data: null },
    { label: "patients", data: null },
    { label: "relationships", data: null },
    { label: "rules", data: null },
    { label: "templates", data: null },
    { label: "users", data: null },
    { label: "workflows", data: null },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResources = async () => {
    setIsLoading(true);

    for (const resource of resources) {
      let result = null;
      try {
        const { data } = await axios.get(
          `https://api.factoryfour.com/${resource.label}/health/status`
        );
        result = {
          success: true,
          message: data.hostname,
          timestamp: data.time,
        };
      } catch (error) {
        result = { success: false, message: error.message };
      }
      resource.data = result;
    }

    setResources([...resources]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchResources();
    setInterval(async () => await fetchResources(), INTERVAL);
  }, []);

  return (
    <div className="container-fluid dashboard">
      {isLoading && <div>LOADING</div>}
      {
        <div className="row">
          {!isLoading &&
            resources
              .map((e) => ({ ...e, label: e.label.toUpperCase() }))
              .map((e, idx) => (
                <div key={idx} className="col-3" style={{ minHeight: "100%" }}>
                  <Card title={e.label} data={e.data} />
                </div>
              ))}
        </div>
      }
    </div>
  );
};

export default Dashboard;
