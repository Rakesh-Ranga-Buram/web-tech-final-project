import React from "react";
import "./Reference.css";
import { Link } from "react-router-dom";

function Reference() {
  const referencesData = [
    {
      title: "Microservices",
      path: "/microservices",
    },
    {
      title: "Nanoservices",
      path: "/nanoservices",
    },
  ];

  return (
    <>
      <div class="common-page-header">
        <div class="body_container ">
          <h1 className="head_page">References</h1>
        </div>
      </div>
      <div className="references">
        <ol className="references-list">
          {referencesData.map((reference, index) => (
            <li key={index}>
              <Link to={reference.path} target="_blank">
                {reference.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Reference;
