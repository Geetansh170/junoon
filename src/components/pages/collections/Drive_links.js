import React, { Fragment } from "react";
import "./Collections.css";

import Cardcollection from "./Cardcollection";
import sportsday2021 from "../imgs/sportsday.jpg";
import worldrecord2021 from "../imgs/worldrecord.jpg";
import fdp2021 from "../imgs/fdp2021.jpg";
import edwardmaya from "../imgs/edwardmaya.jpg";
import mirageatnsit from "../imgs/mirageatnsit.png";
import esummit from "../imgs/esummit.jpg";
import capellaperf from "../imgs/capellaperf.png";
import colloquium from "../imgs/colloquium.jpg";
import consolium from "../imgs/consolium.jpg";
import netaji from "../imgs/netaji.jpg";
import ethnicday19 from "../imgs/ethnic19.jpg";
import etc from "../imgs/ethniccardimg.jpeg";
import ethnicday2022 from "../imgs/ethnicday2022.png";
import scribbleday2022 from "../imgs/scribbleday2022.png";
import moksha2022 from "../imgs/moksha2022.png";
import collegeho from "../imgs/collegehotonsitho.png";
import creseve from "../imgs/creseve.jpg";
import farewell2022 from "../imgs/farewell2022.png";
import ethnic2022 from "../imgs/ethnic2022.jpg";
import farewell2018 from "../imgs/farewell2018.png";
import reso2022 from "../imgs/reso2022.jpg";
import FooterBlack from "../FooterBlack";
import NavbarWhite from "../NavbarWhite";
const Drive_links = () => {
  const Y2022 = [
    {
      name: "Ethnic Day",
      link: "https://drive.google.com/drive/folders/19CmrJBhs5gdUmyAZAnqIcDczgfm3jrjC",
      img: ethnic2022,
    },
    {
      name: "Resonanz",
      link: "https://drive.google.com/drive/folders/1Vb4jwVBmxMXApviG4KLK7JbP99lmwIMA",
      img: reso2022,
    },
    {
      name: "Farewell",
      link: "https://drive.google.com/drive/folders/1UCrsxPlEyUaF5EtZW7hBqmpx3cqRNkMD",
      img: farewell2022,
    },
    {
      name: "Scribble Day",
      link: "https://drive.google.com/drive/folders/1NZcbM2MsvhxwdpAdcL8qOgrjZ0ULvKOp",
      img: scribbleday2022,
    },
    {
      name: "Ethnic Day batch of '22",
      link: "https://drive.google.com/drive/folders/1Y_bbWyx3kMu5eJIiz5PjgqEHHLjdkkzk",
      img: ethnicday2022,
    },
    {
      name: "Moksha",
      link: "https://drive.google.com/drive/folders/1TRcNoAhShlr4hjbG3efoLX_ayc7u2Pyt",
      img: moksha2022,
    },
  ];

  const Y2021 = [
    {
      name: "Ethnic Day",
      link: "https://drive.google.com/drive/u/5/folders/1kCvchFn_Roo4s2M7fioHJAxTZt3HytST",
      img: etc,
    },
    {
      name: "Sports Day",
      link: "https://drive.google.com/drive/u/5/folders/1Wet4M8VsGMLFyK9Ksb4EQ6JKQfRZ30kb",
      img: sportsday2021,
    },
    {
      name: "World Record Attempt",
      link: "https://drive.google.com/drive/u/1/folders/1b5-iPbqawv6ecTuSZ6JGsq01YUuNdEwg",
      img: worldrecord2021,
    },
    {
      name: "FDP 2021",
      link: "https://drive.google.com/drive/folders/1XhOyxyDbZH3B7uSmtHnLuOz3igpgO-Ug",
      img: fdp2021,
    },
  ];

  // const Y2020 = [

  // ];

  const Y2019 = [
    {
      name: "Ethnic Day",
      link: "https://drive.google.com/drive/folders/1dY-dSI54Okm9n6cwopTjRt29bfS4Rd5h",
      img: ethnicday19,
    },
    {
      name: "Colloquium",
      link: "https://drive.google.com/drive/folders/196K7YVOtcdsLX1AkfwHaMo7GRaMAIKs7",
      img: colloquium,
    },
    {
      name: "Parakram Divas",
      link: "https://drive.google.com/drive/folders/1Qtvnp3uUJ7SEaXBgYZBIhUuVs4bp9z-P",
      img: netaji,
    },
  ];

  const Y2018 = [
    {
      name: "Consollium",
      link: "https://drive.google.com/drive/folders/1_iaqm99wWh-y1_8x0LoatTXumdQPK4bY",
      img: consolium,
    },
    {
      name: "E-Summit",
      link: "https://drive.google.com/drive/folders/1s72NcvIecT44MYLhK0RQ8gFdrPYsz7zT",
      img: esummit,
    },
    {
      name: "Crescendo Eve",
      link: "https://drive.google.com/drive/folders/1hqVXxmdRxgJShWVHzZ4EuVBU5nwNCE33",
      img: creseve,
    },
  ];

  // const DATA = [

  // ];

  const YDATA = [
    {
      name: "College Ho Toh NSIT Ho",
      link: "https://www.youtube.com/watch?v=2Es8VBtzAUU",
      img: collegeho,
    },
    {
      name: "Farewell 2018 Batch",
      link: "https://www.youtube.com/watch?v=CMB5__0ohdg",
      img: farewell2018,
    },
    {
      name: "Capella Performance",
      link: "https://www.youtube.com/watch?v=vYhuj1A9HwA",
      img: capellaperf,
    },
    {
      name: "Mirage Moksha Performance",
      link: "https://www.youtube.com/watch?v=CJ8mzPMi9oA",
      img: mirageatnsit,
    },
    {
      name: "Edward Maya At Moksha",
      link: "https://www.youtube.com/watch?v=wbQuUz14088",
      img: edwardmaya,
    },
  ];
  return (
    <Fragment>
      <div class='slider alignTop'>
        <div class='slider-row'></div>
      </div>
      <div className='content-wrapper'>
        <NavbarWhite />
        <div className='drive_links'>
          {/* <div className="dl_txt">Drive Links</div>
          <div className="drive_links_e">
            {DATA.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div> */}
          <div className='dl_txt' style={{ fontWeight: "bold" }}>
            DRIVE LINKS
          </div>
          <div className='dl_txt'>2022</div>
          <div className='drive_links_e'>
            {Y2022.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
          <div className='dl_txt'>2021</div>
          <div className='drive_links_e'>
            {Y2021.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>

          <div className='dl_txt'>2019</div>
          <div className='drive_links_e'>
            {Y2019.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
          <div className='dl_txt'>2018</div>
          <div className='drive_links_e'>
            {Y2018.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
          <div className='dl_txt' style={{ fontWeight: "bold" }}>
            Youtube Links
          </div>
          <div className='drive_links_e'>
            {YDATA.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
        </div>

        <FooterBlack />
      </div>
    </Fragment>
  );
};

export default Drive_links;
