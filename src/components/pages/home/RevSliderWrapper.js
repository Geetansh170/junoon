import React from "react";

function RevSliderWrapper() {
  return (
    <div className='rev_slider_wrapper fullscreen-container'>
      <div
        id='slider10'
        className='rev_slider fullscreenbanner dark-wrapper'
        data-version='5.4.7'
      >
        <ul>
          <li data-transition='fade' data-thumb='style/images/cover-1.webp'>
            <img src='style/images/cover-1.webp' alt='' />
          </li>
          <li data-transition='fade' data-thumb='style/images/cover-2.webp'>
            <img src='style/images/cover-2.webp' alt='' loading="lazy" />
          </li>
          <li data-transition='fade' data-thumb='style/images/cover-3.webp'>
            <img src='style/images/cover-3.webp' alt='' loading="lazy" />
          </li>
          <li data-transition='fade' data-thumb='style/images/cover-4.webp'>
            <img src='style/images/cover-4.webp' alt='' loading="lazy" />
          </li>

          <li data-transition='fade' data-thumb='style/images/cover-5.webp'>
            <img src='style/images/cover-5.webp' alt='' loading="lazy" />
          </li>
        </ul>
        <div className='tp-static-layers'>
          <div
            className='tp-caption tp-static-layer tp-shape tp-shapewrapper tp-gradient'
            data-frames='[{"delay":0,"speed":300,"frame":"0","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
            data-x='center'
            data-y='bottom'
            data-width='full'
            data-height={200}
            data-startslide={0}
            data-endslide={4}
            data-responsive_offset='on'
            data-textalign="['center','center','center','center']"
            data-type='shape'
            data-basealign='slide'
            data-whitespace='nowrap'
            style={{ zIndex: 6 }}
          />
          <div
            className='tp-caption tp-static-layer font-weight-500 color-white text-center'
            data-x='center'
            data-y='middle'
            data-voffset="['-80','-80','-80','-60']"
            data-fontsize="['55','55','55','35']"
            data-lineheight="['65','65','65','45']"
            data-width="['800','800','680','340']"
            data-textalign="['center','center','center','center']"
            data-whitespace="['normal','normal','normal','normal']"
            data-frames='[{"delay":1000,"speed":1200,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
            data-startslide={0}
            data-endslide={4}
            data-responsive='on'
            data-responsive_offset='on'
            style={{ zIndex: 9 }}
          >
            Ethnic Day 2023
          </div>
          <div
            className='tp-caption tp-static-layer font-weight-200 color-white text-center'
            data-x='center'
            data-y='middle'
            data-voffset="['0','0','0','0']"
            data-fontsize="['26','26','26','20']"
            data-lineheight="['36','36','36','30']"
            data-width="['800','800','680','340']"
            data-textalign="['center','center','center','center']"
            data-whitespace="['normal','normal','normal','normal']"
            data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
            data-startslide={0}
            data-endslide={4}
            data-responsive='on'
            data-responsive_offset='on'
            style={{ zIndex: 9, letterSpacing: "1px" }}
          >
            Get your photos now!
          </div>
          <a
            className='tp-caption tp-static-layer btn btn-l btn-white scroll'
            data-x='center'
            data-y='middle'
            data-voffset="['90','90','90','70']"
            data-width="['auto','auto','auto','auto']"
            data-textalign="['center','center','center','center']"
            data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
            data-startslide={0}
            data-endslide={4}
            data-responsive='on'
            data-responsive_offset='on'
            style={{ width: "100%", zIndex: "9" }}
            href='https://drive.google.com/drive/folders/1-DceZlxks4exmhjr9jw5On0giWGNiH2L'
            target='_blank'
            rel='noopener noreferrer'
          >
            Google Drive
          </a>
        </div>
        <div className='tp-bannertimer tp-bottom' />
      </div>
      {/* /.rev_slider */}
    </div>
  );
}

export default RevSliderWrapper;
