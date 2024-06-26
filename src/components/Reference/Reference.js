import React from "react";
import "./Reference.css";
import { Link } from "react-router-dom";

function Reference() {
  const referencesData = [
    {
      title: "An Open IoT Framework Based on Microservices Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/7733707",
    },
    {
      title: "Microservices approach for the internet of things",
      path: "https://ieeexplore.ieee.org/abstract/document/7868163",
    },
    {
      title:
        "Microservices in IoT Security: Current Solutions, Research Challenges, and Future Directions",
      path: "https://www.sciencedirect.com/science/article/pii/S1877050921017440",
    },
    {
      title:
        "IoT Applications: From Mobile Agents to Microservices Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/8605967?casa_token=t9t3S7TfBUQAAAAA:AQlF-A0JLL3OCy24-55wBkAPLUHFEdScZ_AqxL70Uq_e3-wyrmUpFfGjvrZNxlKxC3fAZrzrh3M",
    },
    {
      title: "A Secure Microservice Framework for IoT",
      path: "https://ieeexplore.ieee.org/abstract/document/7943286",
    },
    {
      title:
        "Enhancing the Microservices Architecture for the Internet of Things",
      path: "https://ieeexplore.ieee.org/abstract/document/8622557?casa_token=t0De6PlDLKQAAAAA:2PK3-0vCPD0I9ShP3kPWRClJ3wtNvEXBYasj-RfZdECg5d0GS5pOide41kXioWA5NKY0-a6eRVc",
    },
    {
      title:
        "Towards a Methodology for creating Internet of Things (IoT) Applications based on Microservices",
      path: "https://ieeexplore.ieee.org/abstract/document/9284589?casa_token=EOmDfefHcz4AAAAA:TFPkFq_00TGnSgCPJW7L7iiSCdQdYRdXwHhVDwKNWHUBYgj7AyhYop0nTu6xZmc0bEw9BbaK-4w",
    },
    {
      title: "A Comparative Study of Microservices-based IoT Platforms",
      path: "https://d1wqtxts1xzle7.cloudfront.net/73824863/Paper_50-A_Comparative_Study_of_Microservices-libre.pdf?1635529132=&response-content-disposition=inline%3B+filename%3DA_Comparative_Study_of_Microservices_bas.pdf&Expires=1718390590&Signature=NUmWxvW4geNgsXYTVkb0rdr0znK4RCvtDDS5L2O2-HoLDltiCItk2eLVR1GncWPI4TxZM98frTr8Wm7nJPVHaUiPtDk4XwXd9B2rnSvmMqLNA914XG3KJ~Xu8V-~AapcwVpnwd8gZv0Db4~ao~9jhfV4dirIOr4JKgVQBSDbWe4U1SZK5Ua3xzeEqgw~QYVWFqQKIcLeAKqvV~bwxCaAg7OTGRxhB6p0zu0Jstm7ImWu0aR1R5W17v4yf4yeW4H0Sh6LqtgBL8XDuRr9AwkQs9-AtD721i~wB52he~IPwg1qKPMO-FJl4KFtaS2wbEbjU9zjXP1E4metGdGOzco50w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    },
    {
      title:
        "Orchestration of Microservices for IoT Using Docker and Edge Computing",
      path: "https://ieeexplore.ieee.org/abstract/document/8466366?casa_token=aVAbF_sibJoAAAAA:6a6lgffTfB2crZ33vEYhyHhvToqCDLsDmUj6d_4H5TLLedR0XKP9_7VZF42y63yJ2VSBWWrJy4Y",
    },
    {
      title: "Securing IoT microservices with certificates",
      path: "https://ieeexplore.ieee.org/abstract/document/8406189?casa_token=ZHyfhpK8ItoAAAAA:0FsxHBNcPuS3t26lkoz4xh8yl3mhVVszkHuPpEUk8y-nAzadJ73jZ1UPHL1fRfDikt_qZgepGz4",
    },
    {
      title: "Load Balancing for Interdependent IoT Microservices",
      path: "https://ieeexplore.ieee.org/abstract/document/8737450?casa_token=BN9hvxR8f28AAAAA:lf_9gpuw-XWfOyqFRzroSwDWFxKMVUXYg5K2IdRLBRmIzWFly_CJSDHfGB7vfmcHb5derKetvQQ",
    },
    {
      title:
        "A reliable architecture based on reactive microservices for IoT applications",
      path: "https://dl.acm.org/doi/pdf/10.1145/3323503.3345027",
    },
    {
      title:
        "Design Methodology of Microservices to Support Predictive Analytics for IoT Applications",
      path: "https://www.mdpi.com/1424-8220/18/12/4226",
    },
    {
      title: "Microservices: A Mapping Study for Internet of Things Solutions",
      path: "https://ieeexplore.ieee.org/abstract/document/8548331?casa_token=lFGeDTF9_OIAAAAA:pnRm2fG65ZrXcSgBTXekNPNvr2tpL7wmiLQ9EI1hoglAGAO0Fo9Y9-UuqLud2XyPC1Vf2YrQPbs",
    },
    {
      title:
        "Modelling and executing IoT-enhanced business processes through BPMN and microservices",
      path: "https://www.sciencedirect.com/science/article/abs/pii/S0164121221002363",
    },
    {
      title:
        "Next-Generation, Data Centric and End-to-End IoT Architecture Based on Microservices",
      path: "https://ieeexplore.ieee.org/abstract/document/8552135?casa_token=_EjR76k5yMYAAAAA:ngSvx2S7QCeWao5wQ21CU6ucNoke-0dRNyq3d2pPMAKp9infnQiRIT488TJAYyrTfoMOQRaWJc",
    },
    {
      title:
        "An IoT Platform Based on Microservices and Serverless Paradigms for Smart Farming Purposes",
      path: "https://www.mdpi.com/1424-8220/20/8/2418",
    },
    {
      title: "Graph-based IoT microservice security",
      path: "https://ieeexplore.ieee.org/abstract/document/8406118?casa_token=ga3jsz-WqNEAAAAA:vVfaYQr2RC68cNZzyl-gN2TIMWX4OGm2OtjTooyIS2goaaeIphbN2H61QitBfsZUSEB6Pf45unk",
    },
    {
      title: "IoT and Microservices Based Testbed for Connected Car Services",
      path: "https://ieeexplore.ieee.org/abstract/document/8449768?casa_token=laST5-2vBG4AAAAA:w2twm7ABbrrJXjXbirTCSURBoSiGDzVKT9-Fc7tA3ZT33ElvU2pF6BPUrSz7qvvJm99tQ234pLw",
    },
    {
      title:
        "DevOps Contract for Assuring Execution of IoT Microservices in the Edge",
      path: "https://www.sciencedirect.com/science/article/pii/S2542660519301726",
    },
    {
      title:
        "Cyber-physical microservices: An IoT-based framework for manufacturing systems",
      path: "https://ieeexplore.ieee.org/abstract/document/8387665",
    },
    {
      title:
        "Smart ITS Sensor for the Transportation Planning Based on IoT Approaches Using Serverless and Microservices Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/8344774?casa_token=3DQ1RJ_bWiAAAAAA:YZpQIcYKCPL6HXjnHowedqFtGUp_rO1vBFFC0b66yUbCvn1jbzp6-enqyCLAqQNuN6W_muAQGDQ",
    },
    {
      title:
        "All Eyes on You: Distributed Multi-Dimensional IoT Microservice Anomaly Detection",
      path: "https://ieeexplore.ieee.org/abstract/document/8584985?casa_token=iuvJN5CZPyoAAAAA:P8qw7qaZ4BKQbk-AQ41uxbGNXDqnyR4pa6LoGSWnyoFXlx9zSzujMo18QOR2dmJyLd8cNdFiY08",
    },
    {
      title:
        "Placement of Microservices-based IoT Applications in Fog Computing: A Taxonomy and Future Directions",
      path: "https://dl.acm.org/doi/abs/10.1145/3592598?casa_token=HnmO9I8PFlcAAAAA:EnBV6Q4qgDj25BjJHciVzo1-O1M1eEquhyglQwaL3O0biO2vk2K_4G9UOfCh9SbTtvOg4lnCEH0Etw",
    },
    {
      title:
        "Design of a Cattle-Health-Monitoring System Using Microservices and IoT Devices",
      path: "https://www.mdpi.com/2073-431X/11/5/79",
    },
    {
      title:
        "Microservices-based IoT Application Placement within Heterogeneous and Resource Constrained Fog Computing Environments",
      path: "https://dl.acm.org/doi/abs/10.1145/3344341.3368800?casa_token=f2rw5iEuWf4AAAAA:ucqO_glsbaXwi6JbX-EA2VDcAhd2GykiRnNNS0ArQaB489rxftF8dtJX74U9BojQxwS6F4cfhPI1KA",
    },
    {
      title:
        "Microservices based architectures for IoT systems - State-of-the-art review",
      path: "https://www.sciencedirect.com/science/article/abs/pii/S2542660519301453",
    },
    {
      title:
        "IoT Microservice Deployment in Edge-Cloud Hybrid Environment Using Reinforcement Learning",
      path: "https://ieeexplore.ieee.org/abstract/document/9162056?casa_token=wrDQBF2feNYAAAAA:g5JVQ15foyQhwpcNANqePWAaCNgHMVR1gegvsI1gHMogOGUwjbY_us1ana3_KU23stDLtD-d25A",
    },
    {
      title:
        "A Microservices Architecture for Reactive and Proactive Fault Tolerance in IoT Systems",
      path: "https://ieeexplore.ieee.org/abstract/document/8449789?casa_token=gjoK8OKJ_bMAAAAA:bx8LqBIy3pqv3IHMlQFh6U3amHz1S0LuN_cM-ZCbvXtHLE3_GdI56fyMwDzd bXJK3Ob4pn_9OQI",
    },
    {
      title:
        "Microservices Scheduling Model Over Heterogeneous Cloud-Edge Environments As Support for IoT Applications",
      path: "https://ieeexplore.ieee.org/abstract/document/8255573?casa_token=HOuKVJF6EeoAAAAA:iw4K6L06OQyIPxVJ_4Y4chn2PcQVc5P4zBbL_c9uR6rVe95qtVFXFykVbaYd0MD8ZbfJqn6N5Pc",
    },
    {
      title: "Microservice-Based IoT for Smart Buildings",
      path: "https://ieeexplore.ieee.org/abstract/document/7929694?casa_token=gWEf49ylLBAAAAAA:MiY1EV9XvcroRfHn_qQo8FQhdfdUuoG43Ei2Nm7I_URlDuG4i9eDYpmGNEEH5lwN2qRk54keyms",
    },
    {
      title:
        "Microservices in Web Objects Enabled IoT Environment for Enhancing Reusability",
      path: "https://www.mdpi.com/1424-8220/18/2/352",
    },
    {
      title:
        "A Progressive Web Application Based on Microservices Combining Geospatial Data and the Internet of Things",
      path: "https://ieeexplore.ieee.org/abstract/document/8782470",
    },
    {
      title:
        "Utilizing Microservices Architecture for Enhanced Service Sharing in IoT Edge Environments",
      path: "https://ieeexplore.ieee.org/abstract/document/9864183",
    },
    {
      title:
        "On the Continuous Processing of Health Data in Edge-Fog-Cloud Computing by Using Micro/Nanoservice Composition",
      path: "https://ieeexplore.ieee.org/abstract/document/9129708",
    },
    {
      title:
        "Decentralized IoT Edge Nanoservice Architecture for Future Gadget-Free Computing",
      path: "https://ieeexplore.ieee.org/abstract/document/8808867",
    },
    {
      title:
        "Nanoservices as Generalization Services in Service-Oriented Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/8262556?casa_token=t-vGtQOPvG8AAAAA:Djy2CqkzBmvgdaBkYwTRsXDbC5jnkaGPtSD8kClxfLyQO9GQvY4901lT6bGnPfrDXkHnlNL9tY",
    },
    {
      title:
        "Decentralized IoT Edge Nanoservice Architecture for Local Service Provisioning",
      path: "https://www.researchgate.net/profile/Madhusanka-Liyanage/publication/334696214_Decentralized_IoT_Edge_Nanoservice_Architecture_for_Future_Gadget-Free_Computing/links/5d3a897392851cd04686cb7f/Decentralized-IoT-Edge-Nanoservice-Architecture-for-Future-Gadget-Free-Computing.pdf",
    },
    {
      title:
        "The Nanoservices Framework: Co-Locating Microservices in the Cloud-Edge Continuum",
      path: "https://ieeexplore.ieee.org/abstract/document/10355592?casa_token=tc3o_lFNhlIAAAAA:UML6UsYbliYJdcv2vcSW1LN7mDarkFni_zZaDgn1aKgfuA6QY-GA-gORKGLnnirwQOsMpQxJji8",
    },
    {
      title: "Disaggregated Applications Using Nanoservices",
      path: "https://wuklab.github.io/words/words21-wang.pdf",
    },
    {
      title:
        "Resource-Aware Dynamic Service Deployment for Local IoT Edge Computing: Healthcare Use Case",
      path: "https://ieeexplore.ieee.org/abstract/document/9507488",
    },
    {
      title:
        "AI-Enabled Secure Microservices in Edge Computing: Opportunities and Challenges",
      path: "https://ieeexplore.ieee.org/abstract/document/9723563?casa_token=5inT5C2NwLAAAAAA:9m74IbMLcoC4RoT-mVVp2EmxvVrMWz-qxAKPc3g1MmAR7-F8dRgA3LKvqDvgORvtCG7MowCM-vQ",
    },
    {
      title:
        "Introducing Cloud-Assisted Micro-Service-Based Software Development Framework for Healthcare Systems",
      path: "https://ieeexplore.ieee.org/abstract/document/9739683",
    },
    {
      title:
        "Nanoservices as Generalization Services in Service-Oriented Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/8262556?casa_token=bAVxn_J2GdYAAAAA:3woVYu7muiXS1kjVquFOODe6iGRMHrfWfU1Rk6lu8dN5X2BUmHxdMUAJTVAhevEPhbNcqegZSJs",
    },
    {
      title:
        "The Nanoservices Framework: Co-Locating Microservices in the Cloud-Edge Continuum",
      path: "https://ieeexplore.ieee.org/abstract/document/10355592?casa_token=F_kcOA9uWOkAAAAA:MmsnVSpu22YTRzWp7PCu7UXsAOfxTPjgOTd-ZJlLxl2_RU5WMKi_yqhxSv8NuDs5HQoNLrK1AkA",
    },
    {
      title:
        "AI-Enabled Secure Microservices in Edge Computing: Opportunities and Challenges",
      path: "https://ieeexplore.ieee.org/abstract/document/9723563?casa_token=sLHAJfajIZ0AAAAA:jXSodGq6ynoeW8CTdL0fimMRfGBsV3K-oQhp3pG-vxJZ3blz8zNF50plfktmG5VLjy2FU5_chNg",
    },
    {
      title:
        "Nanoservices as Generalization Services in Service-Oriented Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/8262556?casa_token=ngnVJdUPhvMAAAAA:8PTPSaqBOeG4wIoEJxLC1bdq1KuVHPsnxH8NWeh4ps7AzeZH2b6xZDDLkiujCSTrtPD2zGrn-vQ",
    },
    {
      title:
        "The Nanoservices Framework: Co-Locating Microservices in the Cloud-Edge Continuum",
      path: "https://ieeexplore.ieee.org/abstract/document/10355592?casa_token=lbiB2Fer-KUAAAAA:whh2KalKa7Cuc4PobnSDBRqafphEBd8HdW4Lu9el62SwR3GKiVCcpzdyYFkN8LLJ_5JtBDgkhO8",
    },
    {
      title:
        "Nanoservices as Generalization Services in Service-Oriented Architecture",
      path: "https://ieeexplore.ieee.org/abstract/document/8262556?casa_token=6cqn1oNG0ioAAAAA:K_jU9YVIr7tGmmDo193X_Sa6Tk7q1bC45iqYFsSJyJbTnH5bgf7FIcy3zoYgMgoMJv1QhQj95Ls",
    },
    {
      title:
        "Decentralized Serverless IoT Dataflow Architecture for the Cloud-to-Edge Continuum",
      path: "https://ieeexplore.ieee.org/abstract/document/10073502?casa_token=-jx9pw-NwloAAAAA:-nVnqBPBrriHVfwxfotrugK5SiU-oxwl0th2zNpK_4XADGUZN7b-uMq6e71q7KuQpQTOliu-TCk",
    },
  ];

  return (
    <>
      <div class="common-page-header">
        <div class="body_container ">
          <h1 className="head_page">References</h1>
        </div>
      </div>
      <div className="body_container">
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
      </div>
    </>
  );
}

export default Reference;
