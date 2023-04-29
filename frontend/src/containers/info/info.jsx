import React from "react";
import "./info.css";
import Infobox from "../../components/InfoBox/infobox";
import axios from "axios";

const Info = () => {
  const [data, setData] = React.useState(null);
  const [gotData, setGotData] = React.useState(false);

  React.useEffect(() => {
    if (!gotData) {
      axios.get("http://localhost:5000/customer")
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setGotData(true);
        });
    }
  }, [gotData]);
  
  return (
    <div className="app__info-box ">

      <div className="app__info-right">
        <div className="app__info-avatar"></div>
        <div className="app__info-name">{data && data[0].STU_NAME}</div>
        <div className="app__info-mail">{data && data[0].STU_EMAIL}</div>

        <button className="app__info-button">SIGN OUT</button>
      </div>
      <div className="app__info-left app__padding">
        <div className="app__info-heading_box">
          <div className="app__info-heading">Personal Information</div>
          <div className="app__info-subtitle ">
            Manage your personal info, including phone numbers and email address
            where you can be contacted
          </div>
        </div>
        <div className="app__info-infobox">
          <Infobox title="Name" answer={data && data[0].STU_NAME} color="#E2D3FF" />
          <Infobox title="Phone" answer={data && data[0].STU_PH_NO} color="#FDE0AA" />
          <Infobox title="email" answer={data && data[0].STU_EMAIL} color="#BBE4F4" />
          <Infobox title="DOB" answer={data && (data[0].STU_DOB.substring(0,10))} color="#CCF0BF" />

        </div>
      </div>
    </div>
  );
};

export default Info;
