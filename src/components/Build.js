import React from 'react';

const Build = () => (
  <div className="build">
    <div className="build__box">
      <div className="build__box-row">
        <div className="build__cover">
          {/* Cover image and decorations */}
        </div>
        <div className="build__main">
          <div className="build__main-title">Create an impressive brand on schedule and within budget</div>
          <div className="build__main-note">Kickstart your business with thousands of expert resources. <b>ready-to-use</b> design assets.</div>
          <div className="build__main-list">
            {/* List of items */}
          </div>
          <div className="build__main-action">
            <a href="#" target="_blank" className="build__main-action-btn ui-btn ui-btn--size-normal ui-btn--theme-light" rel="noreferrer">
              <span className="ui-btn__box" tabindex="-1">
                <svg className="ico-svg ico-svg--out">
                  <use xlinkHref="#"></use>
                </svg>
                See best assets
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Build;
