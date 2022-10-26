import React from "react";

export default function galleryBox({ galleryShowcase, galleryDisplay, data }) {
  return (
    <div className='displayWrapper'>
      <div className='displayName seablue'>{data.name}</div>
      <div
        className='displayBox'
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => galleryShowcase(data)}
      >
        <img src={data.preview} />
      </div>
    </div>
  );
}
