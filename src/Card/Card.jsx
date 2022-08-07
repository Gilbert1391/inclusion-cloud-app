import React from "react";

const Card = ({ title, data }) => {
  //Format unix timestamp to 24 hour format
  function formatTimestamp(unixDate) {
    const date = new Date(unixDate);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const timestamp =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return timestamp;
  }

  return (
    <div className="card m-2" style={{ height: "150px" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div
          className={`p-1 text-center text-bg-${
            data?.success ? "success" : "danger"
          }`}
        >
          {data?.success ? "Healthy" : "Error"}
        </div>
        <div className="text-center card-text">
          <p className="mb-0">{data?.message}</p>
          <p className="mb-0">
            {data?.timestamp ? formatTimestamp(data?.timestamp) : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
