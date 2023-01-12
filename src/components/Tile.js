/** @format */

import React from "react";
import marker from "../images/marker-icon.png";

function Tile(props) {
  return (
    <div className="card">
      <img alt="" src={`${props.imageURL}`} className="card--main_image" />
      <div className="card--details">
        <div className="card--location_wrapper">
          <img alt="" src={marker} className="card--marker_icon" />
          <h3 className="card--location">{props.location.toUpperCase()}</h3>
          <a
            href={props.googleMapsLink}
            className="card--google_link text-gray"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--dates">
          <span>
            {props.startDate} - {props.endDate}
          </span>
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Tile;
