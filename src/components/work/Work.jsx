import React, { useState, useEffect, useRef } from "react";
import "./work.css";
import GalleryBox from "./GalleryBox";
import { GalleryData } from "../../galleryData.js";
import GalleryItemShowcase from "./GalleryItemShowcase";

export default function Work({ workRef, workVisible }) {
  // gallery settings
  ///////////////////////////

  const [galleryDisplay, setGalleryDisplay] = useState(true);

  const [selectedData, setSelectedData] = useState();

  const galleryShowcase = (data) => {
    setGalleryDisplay(false);
    setSelectedData(data);
  };

  const galleryReturn = () => {
    setGalleryDisplay(true);
  };

  return (
    <div className='workWrapper scrollSnap'>
      <div className='workContent' ref={workRef}>
        <div
          className={`workTitle seablue elsie ${
            workVisible ? "workTitleFadeIn" : null
          } ${galleryDisplay ? null : "displayNone"}`}
        >
          <h1>Work</h1>
        </div>
        <div
          className={`workGalleryBoxes ${workVisible ? "galleryFadeIn" : null} 
              ${galleryDisplay ? null : "displayNone"}
            `}
        >
          {GalleryData.map((obj) => (
            <GalleryBox
              data={obj}
              galleryDisplay={galleryDisplay}
              galleryShowcase={galleryShowcase}
            />
          ))}
        </div>
        {galleryDisplay ? null : (
          <>
            <GalleryItemShowcase
              selectedData={selectedData}
              galleryReturn={galleryReturn}
              galleryDisplay={galleryDisplay}
            />
          </>
        )}
      </div>
    </div>
  );
}
