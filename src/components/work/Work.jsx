import React, { useState, useRef } from "react";
import "./work.css";
import GalleryBox from "./GalleryBox";
import { GalleryData } from "../../galleryData.js";
import GalleryItemShowcase from "./GalleryItemShowcase";

export default function Work({ workRef, workVisible }) {
  // gallery settings
  ///////////////////////////

  const [galleryDisplay, setGalleryDisplay] = useState(true);
  const [galleryNum, setGalleryNum] = useState(0);
  const workGalleryBoxes = useRef(null);

  const [selectedData, setSelectedData] = useState();

  const galleryShowcase = (data) => {
    setGalleryDisplay(false);
    setSelectedData(data);
  };

  const galleryReturn = () => {
    setGalleryDisplay(true);
    setTimeout(() => {
      setGalleryNum(0);
    }, 500);
  };

  setTimeout(() => {
    workGalleryBoxes.current.style.gridTemplateColumns = `repeat(${GalleryData.length}, 300px)`;
  }, 500);

  return (
    <div className='workWrapper scrollSnap'>
      <div className='workContent' ref={workRef}>
        <div
          className={`titleAndGallery ${
            galleryDisplay ? null : "titleAndGallerySlideUp"
          }`}
        >
          <div
            className={`workTitle seablue elsie ${
              workVisible ? "workTitleFadeIn" : null
            }`}
          >
            <h1>Work</h1>
          </div>
          <div
            ref={workGalleryBoxes}
            className={`workGalleryBoxes ${
              workVisible ? "galleryFadeIn" : null
            }`}
          >
            {GalleryData.map((obj) => (
              <GalleryBox data={obj} galleryShowcase={galleryShowcase} />
            ))}
          </div>
        </div>

        {selectedData === undefined ? null : (
          <>
            <GalleryItemShowcase
              selectedData={selectedData}
              galleryReturn={galleryReturn}
              galleryDisplay={galleryDisplay}
              galleryNum={galleryNum}
              setGalleryNum={setGalleryNum}
            />
          </>
        )}
      </div>
    </div>
  );
}
