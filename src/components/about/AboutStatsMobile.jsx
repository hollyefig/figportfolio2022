import React, { useState } from "react";
import figmaIcon from "../../imageAssets/figmaIcon.png";
import adobeIcon from "../../imageAssets/adobeIcon.png";
import ipadIcon from "../../imageAssets/ipadIcon.png";
import html5Icon from "../../imageAssets/html5Icon.png";
import css3Icon from "../../imageAssets/css3Icon.png";
import jsIcon from "../../imageAssets/jsIcon.png";
import reactIcon from "../../imageAssets/reactIcon.png";
import jqIcon from "../../imageAssets/jqIcon.png";
import vscIcon from "../../imageAssets/vscIcon.png";

export default function AboutStatsMobile({
  radius,
  circleMobile,
  cxcy,
  aboutVisible,
}) {
  const [designActive, setDesignActive] = useState(true);

  const [devActive, setDevActive] = useState(false);

  const designTabClicked = () => {
    setDesignActive(true);
    setDevActive(false);
  };

  const devTabClicked = () => {
    setDevActive(true);
    setDesignActive(false);
  };

  return (
    <div className='aboutStatsMobile'>
      <div className='aboutStatsMobileWrapper'>
        <div className='aboutStatsTabs'>
          <div
            className={`designTab ${
              designActive ? "tabActive" : "tabInactive"
            }`}
            onClick={() => designTabClicked()}
          >
            <div className='designIcon'>
              <span class='material-symbols-outlined'>palette</span>
            </div>
          </div>
          <div className={`devTab ${devActive ? "tabActive" : "tabInactive"}`}>
            <div className='devIcon' onClick={() => devTabClicked()}>
              <span class='material-symbols-outlined'>
                <span class='material-symbols-outlined'>code_blocks</span>
              </span>
            </div>
          </div>
        </div>
        <div className='aboutStatsDisplay'>
          {/* design active  */}
          {designActive ? (
            <div className='designTabShow'>
              <div className='designStatsWrapper'>
                <div className='adobeAndFigmaWrapper'>
                  {/* adobe skill  */}
                  <div className='adobeSkillWrapper'>
                    <div className='adobeOuter'>
                      <div className='adobePercent'>
                        <img src={adobeIcon} className='adobeIcon' />
                      </div>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      version='1.1'
                      width={circleMobile}
                      height={circleMobile}
                      className='adobeHp'
                    >
                      <defs>
                        <linearGradient id='GradientColor'>
                          <stop offset='0%' stop-color='#e91e63' />
                          <stop offset='100%' stop-color='#673ab7' />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={cxcy}
                        cy={cxcy}
                        r={radius}
                        stroke-linecap='round'
                        className={
                          aboutVisible ? "adobeHpTransition" : "adobeHpStart"
                        }
                      />
                    </svg>
                  </div>
                  {/* figma skill  */}
                  <div className='figmaSkillWrapper'>
                    <div className='figmaOuter'>
                      <div className='figmaPercent'>
                        <img src={figmaIcon} className='figmaIcon' />
                      </div>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      version='1.1'
                      width={circleMobile}
                      height={circleMobile}
                      className='figmaHp'
                    >
                      <defs>
                        <linearGradient id='GradientColor'>
                          <stop offset='0%' stop-color='#e91e63' />
                          <stop offset='100%' stop-color='#673ab7' />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={cxcy}
                        cy={cxcy}
                        r={radius}
                        stroke-linecap='round'
                        className={
                          aboutVisible ? "figmaHpTransition" : "figmaHpStart"
                        }
                      />
                    </svg>
                  </div>
                </div>
                <div className='designStatsOtherWrapper'>
                  {/* Other stats  */}
                  <div className='adobePrograms'>
                    <h4 className='strong'>Adobe Programs</h4>
                    <ul>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>Dreamweaver</li>
                      <li>InDesign</li>
                      <li>Animate</li>
                    </ul>
                  </div>
                  <div className='otherDesignPrograms'>
                    <h4 className='strong'>Other</h4>
                    <ul className='noStyle'>
                      <li>
                        <img src={ipadIcon} />
                        Ipad &amp; Procreate
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* dev active  */}
          {devActive ? (
            <div className='devTabShow'>
              <div className='devStatsWrapper'>
                {/* html skill  */}
                <div className='htmlSkillWrapper'>
                  <div className='htmlOuter'>
                    <div className='htmlPercent'>
                      <img src={html5Icon} className='html5Icon' />
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width={circleMobile}
                    height={circleMobile}
                    className='htmlHp'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stop-color='#e91e63' />
                        <stop offset='100%' stop-color='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={cxcy}
                      cy={cxcy}
                      r={radius}
                      stroke-linecap='round'
                      className={
                        aboutVisible ? "htmlHpTransition" : "htmlHpStart"
                      }
                    />
                  </svg>
                </div>
                {/* css skill  */}
                <div className='cssSkillWrapper'>
                  <div className='cssOuter'>
                    <div className='cssPercent'>
                      <img src={css3Icon} className='css3Icon' />
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width={circleMobile}
                    height={circleMobile}
                    className='cssHp'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stop-color='#e91e63' />
                        <stop offset='100%' stop-color='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={cxcy}
                      cy={cxcy}
                      r={radius}
                      stroke-linecap='round'
                      className={
                        aboutVisible ? "cssHpTransition" : "cssHpStart"
                      }
                    />
                  </svg>
                </div>
              </div>
              <div className='devOtherStatsWrapper'>
                <div className='codeLanguages'>
                  <h4 className='strong'>
                    Other Code<p>Languages</p>{" "}
                  </h4>
                  <ul className='noStyle'>
                    <li>
                      <img src={jsIcon} />
                      Javascript
                    </li>
                    <li>
                      <img src={reactIcon} />
                      React
                    </li>
                    <li>
                      <img src={jqIcon} />
                      jQuery
                    </li>
                  </ul>
                </div>
                <div className='devPrograms'>
                  <h4 className='strong'>Programs</h4>
                  <ul className='noStyle'>
                    <li>
                      <img src={vscIcon} />
                      Visual Studio Code
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
