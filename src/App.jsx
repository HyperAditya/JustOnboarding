import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hypervergeLogo from '/home/user/Downloads/HVLogo.jpeg'
import './App.css'

function App() {

  function starOnboarding() {
    const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ino5NWpxOCIsImhhc2giOiI0OGVjZWE0OGE3MmU3Njg0ZTY5Y2I3MDA1ZWZhOWQzMjI2MjIwZDk5MTdjZDk4OTdjYzM0ZDRmNzZkODMyYzFiIiwiaWF0IjoxNzM4NTY1MzMyLCJleHAiOjE3Mzg2NTE3MzIsImp0aSI6ImMwZWRmMWQwLWQyMGMtNDY4Mi04OTkwLTQ0NzU3OWFhZmE2MyJ9.ScPluLoiDNot5Vlz-5SvensfpGE_QFB9_i_Dwu-CVJ_oLb7iikhcaobiwCmx-pXVYufuU53gjGplbPW7MJPyzsIrehkR3DHGZWlwEuVYgKC6j4holYxgD-7IRfcL6cMpSOgUi_uLjorluJmsuo-bOPzb_1fYgIZa7R9Q4Jwu2Y4"
    const hyperKycConfig = new window.HyperKycConfig(
        accessToken,
        "first_workflow",
        "HyperAditya"
    );
    const inputs = {
      name: "Aditya",
      phone: "1234567890"
    };
    
      hyperKycConfig.setInputs(inputs);
      const handler = (HyperKycResult) => {
        switch (HyperKycResult.status) {
          case "user_cancelled":
            console.log("User cancelled the workflow");
            break;
          case "error":
            alert("Error");
            console.log(HyperKycResult);
            break;
          case "auto_approved":
            alert("User approved");
            break;
          case "auto_declined":
            console.log("Workflow auto-declined");
            break;
          case "needs_review":
            console.log("Workflow needs manual review");
            break;
          default:
            console.warn("Unknown status:", HyperKycResult.status);
            break;
        }
      };
      window.HyperKYCModule.launch(hyperKycConfig, handler);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={hypervergeLogo} className="logo" alt="Hyperverge logo" />
        </a>
      </div>
      <h1>Driver Onboarding</h1>
      <div className="card">
        <button onClick={starOnboarding}>
          Start Onboarding
        </button>
      </div>
    </>
  )
}

export default App
