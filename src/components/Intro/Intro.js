import React from "react";
import "./Intro.css";
import iot from "../../assets/iot.png";
import scalability from "../../assets/scalability.jpg";
import flexibility from "../../assets/flexibility.jpg";
import deployment from "../../assets/deployment.jpg";
import tolerance from "../../assets/tolerance.png";
import agnosticism from "../../assets/agnosticism.jpg";

function Intro() {
  return (
    <div className="body_container">
      <div className="iot">
        <div>
          <h1>Introduction</h1>
          <div>
            The Internet of Things (IoT) is experiencing explosive growth,
            connecting billions of devices and generating a vast amount of data.
            This data needs processing across the entire cloud-edge-continuum,
            encompassing resource-constrained devices at the edge (sensors,
            wearables) to powerful servers in the cloud. Traditional monolithic
            architectures, where all functionalities are bundled together,
            struggle to handle this complexity and the ever-growing demands of
            the IoT world.
          </div>
        </div>
        <img src={iot} alt="iot" />
      </div>
      <div className="survey">
        <div className="survey_heading">
          This survey delves into the innovative solutions offered by
          microservices and nanoservices architectures for building robust and
          scalable IoT applications. We explore how these approaches decompose
          complex functionalities into smaller, independent services, enabling:
        </div>
        <div className="features_container">
          <div className="feature">
            <div className="feature_img">
              <img src={scalability} alt="scalability" />
            </div>
            <div>
              <b>Improved Scalability</b>
            </div>
            Scale individual services based on their specific needs, optimizing
            resource utilization across the edge-cloud continuum.
          </div>
          <div className="feature">
            <div className="feature_img">
              <img src={flexibility} alt="flexibility" />
            </div>
            <div>
              <b>Enhanced Flexibility</b>
            </div>
            Introduce new features or modify existing ones by deploying
            dedicated microservices or nanoservices, without affecting the
            entire application.
          </div>
          <div className="feature">
            <div className="feature_img">
              <img src={deployment} alt="deployment" />
            </div>
            <div>
              <b>Faster Development and Deployment</b>
            </div>
            Smaller, independent services facilitate faster development cycles
            and easier deployments at the edge or in the cloud.
          </div>
          <div className="feature">
            <div className="feature_img">
              <img src={tolerance} alt="tolerance" />
            </div>
            <div>
              <b>Increased Fault Tolerance</b>
            </div>
            Issues in one service are isolated, minimizing impact on the overall
            application's functionality.
          </div>
          <div className="feature">
            <div className="feature_img">
              <img src={agnosticism} alt="agnosticism" />
            </div>
            <div>
              <b>Technology Agnosticism</b>
            </div>
            Different microservices or nanoservices can be developed using
            various programming languages and technologies, allowing for
            flexibility in choosing the best tool for the job.
          </div>
        </div>
      </div>
      <div className="survey">
        This survey will not only explore the benefits of microservices and
        nanoservices for IoT applications, but also delve into the challenges
        associated with their implementation, such as increased complexity and
        distributed system management. We will analyze real-world use cases
        where these architectures are revolutionizing the IoT landscape,
        showcasing their practical applications in smart homes, industrial
        automation, and wearables. Finally, we will explore the future
        advancements in microservices and nanoservices designed specifically for
        the IoT-edge-cloud continuum, including the potential of nanoservices
        for ultra-resource-constrained edge devices.
      </div>
    </div>
  );
}

export default Intro;
