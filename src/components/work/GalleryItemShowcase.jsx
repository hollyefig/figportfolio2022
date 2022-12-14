import React, { useState } from "react";

export default function GalleryItemShowcase({
  selectedData,
  galleryDisplay,
  galleryReturn,
}) {
  const galleryLength = selectedData.display.length;
  const [galleryNum, setGalleryNum] = useState(0);

  const slideLeft = () => {
    galleryNum === 0
      ? setGalleryNum(galleryLength - 1)
      : setGalleryNum((num) => num - 1);
  };

  const slideRight = () => {
    galleryNum === galleryLength - 1
      ? setGalleryNum(0)
      : setGalleryNum((num) => num + 1);
  };

  return (
    <div
      className={`galleryItemDisplay ${
        galleryDisplay ? "" : "galleryItemShow"
      }`}
    >
      <div className='galleryLeft'>
        {selectedData.display.length > 1 ? (
          <div className='sliderWrapper'>
            <div className='sliderLeft' onClick={() => slideLeft()}>
              <span class='material-symbols-outlined'>arrow_back</span>
            </div>

            {selectedData.display.map((url, index) => {
              return (
                <div
                  className={`sliderImgwrapper slideTransition ${
                    index === galleryNum ? "active" : ""
                  }`}
                >
                  {index === galleryNum && (
                    <img
                      src={url}
                      className={
                        selectedData.id === 1 ? "sliderImg2" : "sliderImg"
                      }
                    />
                  )}
                </div>
              );
            })}
            <div className='sliderRight' onClick={() => slideRight()}>
              <span class='material-symbols-outlined'>arrow_forward</span>
            </div>
          </div>
        ) : (
          <>
            <img src={selectedData.display} className='galleryDisplayImg' />
          </>
        )}
      </div>
      <div className='galleryRight seablue' onClick={() => galleryReturn()}>
        <div className='galleryRightTitleBlurb'>
          <h1>{selectedData.name}</h1>
          <div className='galleryDescription'>{selectedData.description}</div>
        </div>

        <div className='galleryRightButtons'>
          {selectedData.id === 2 || selectedData.id === 4 ? null : (
            <>
              <div className='viewAndGithub'>
                {selectedData.url === false ? null : (
                  <a href={selectedData.url} target='_blank'>
                    <div className='viewLink'>
                      View Website
                      <span class='material-symbols-outlined'>
                        arrow_outward
                      </span>
                    </div>
                  </a>
                )}

                {selectedData.github === false ? null : (
                  <>
                    <a href={selectedData.github} target='_blank'>
                      <div className='viewLink'>
                        View GitHub
                        <span class='material-symbols-outlined'>
                          arrow_outward
                        </span>
                      </div>
                    </a>
                  </>
                )}
              </div>
            </>
          )}

          <button className='galleryBack' onClick={() => galleryReturn()}>
            <span class='material-symbols-outlined'>undo</span>
            back
          </button>
        </div>
      </div>
    </div>
  );
}
