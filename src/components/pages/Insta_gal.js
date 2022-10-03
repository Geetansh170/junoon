import React, { useState, Fragment, useContext, useEffect } from "react";
import axios from "axios";
import fire from "../../firebase/firebase";
import { getDatabase, get, ref, onValue } from "firebase-old/firebase-database";
import firebase from "firebase-old";

const Insta_gal = () => {
  //let  db = getDatabase()

  const [user, setUsername] = useState({
    username: "junoon.nsut",
  });

  const [images, setImages] = useState([]);

  //var images= [];
  //const { arr } = images;

  useEffect(() => {
    getLink();
    //console.log("use effect");
  }, images);

  //get insta image  links

  function getLink() {
    let linkUrl = [];
    var links = firebase.database().ref("/-Moqz_7ML0Q6-FxThkFi/");
    links.on("value", (snapshot) => {
      links = snapshot.val();
      if (links) {
        linkUrl.push(links);
        setImages(links);
      } else {
        let PicUrl = [
          "https://scontent.cdninstagram.com/v/t51.29350-15/201134827_161535689292443_5104633663825440635_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=LaJhBYUK46QAX9Ys3MR&_nc_ht=scontent.cdninstagram.com&oh=53318419a71f03e1c1b28ea214d39166&oe=60CF6FA6",
          "https://scontent.cdninstagram.com/v/t51.29350-15/195917899_945780992944892_480151292404590393_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=tDYEKTnHP9IAX_TNRmH&_nc_ht=scontent.cdninstagram.com&oh=7ed33b5d318e5b70414691d5c9eb66dc&oe=60CF0F16",
          "https://scontent.cdninstagram.com/v/t51.29350-15/196519290_1163146470866888_516877498906679933_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=1RbirWaA2ZIAX8uOTvt&_nc_ht=scontent.cdninstagram.com&oh=a314eca94a2e720aeae7bed29c166f00&oe=60CF37E9",
          "https://scontent.cdninstagram.com/v/t51.29350-15/193876127_116509297228729_7117844722277867024_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=m1qQpzj91g4AX_KRmwP&_nc_ht=scontent.cdninstagram.com&oh=f05c8942477870b0d2164c101cacad53&oe=60CE456D",
          "https://scontent.cdninstagram.com/v/t51.29350-15/192772335_818066525504516_5366988579058408664_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=5R3cqr-MimIAX-hE80U&_nc_ht=scontent.cdninstagram.com&oh=ef6e3d89360012a74049d02ad60789ca&oe=60CEEE9D",
          "https://scontent.cdninstagram.com/v/t51.29350-15/188888550_188469959806435_5869336049369105270_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=0MN7YD3h_g8AX8hQAF0&_nc_ht=scontent.cdninstagram.com&oh=7b7c8cd0c1784788f504f63c7c240c03&oe=60CEFD5C",
          "https://scontent.cdninstagram.com/v/t51.29350-15/172972186_1062866520870274_7270002926756165642_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=7ijlsBOzJAIAX-HT3mr&_nc_oc=AQmlcLRYstEsWs1Tq5v6iTvjXnxfn-UoCMilRBIlpMEgNQesoplm2LSNYvtyczzd2LY&_nc_ht=scontent.cdninstagram.com&oh=157961fdae2717e0ed15952e0bad82d2&oe=60CF1334",
          "https://scontent.cdninstagram.com/v/t51.29350-15/166776600_149131107100530_6242025214745976116_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=70E87piE2tIAX-D0Ey6&_nc_ht=scontent.cdninstagram.com&oh=bd84838bb515882ff46ee94fca269285&oe=60CE7257",
          "https://scontent.cdninstagram.com/v/t51.29350-15/163608150_275500304228112_7663091167906913127_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=fD_4SXHaxq4AX_gUtNe&_nc_ht=scontent.cdninstagram.com&oh=68df767e26e479b0d49d930483fd58dc&oe=60CEF414",
          "https://scontent.cdninstagram.com/v/t51.29350-15/156675539_173443081255668_6898039024529153365_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Ie-3wvlREgkAX8RYg2P&_nc_ht=scontent.cdninstagram.com&oh=aaf89660ca41a94d6ece1f75919e5f95&oe=60CE8440",
        ];
        setImages(PicUrl);
      }
    });
  }

  //this function is not been called due to addition of above function
  /*
  const callapi = async (post) => {

    //console.log("hahahahha");

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      
      //console.log("before")
      let accessToken="IGQVJYQnRlNktaWlUxU0RuTjRmcEJrSGNtRXhTdGRmM1ZAYWkg3SmlvOFJ3VXRtWl9tTDB0MERUblJjNXFYV0phSG80b1VXc0ZAMZAHRWRmhBTnhnRkNMYTh3c3lienkyV01EUjhOY0tycnZAqWU1qR0NMegZDZD";
      const res = await axios.get("https://graph.instagram.com/17841401475482155/media?access_token="+accessToken+"&fields=id,timestamp");
      //console.log("after");
      

      let useful_data=res.data.data.slice();//only id and timestamp
      let PicId={};//to store all the IDs

      for (let i = 0; i < useful_data.length; i++) {
          PicId[i]=useful_data[i].id;
        
      }
      let PicUrl=[];
      
//console.log(PicId);
      let j=0;
      for (let i = 0; i <25 ; i++) {
        let url = await axios.get("https://graph.instagram.com/"+PicId[i]+"?access_token="+accessToken+"&fields=media_url,media_type");
        //console.log(url);
        if(url.data.media_type=="IMAGE")
         { PicUrl[j]=url.data.media_url;
          //console.log(PicUrl);
          j++;
         }

         if(j>=10)
         {
         break;
         }
      }

      // console.log(PicUrl);
      
       setImages(PicUrl)
      //console.log("images");
     
    } 
    
    
    catch (err) {
      // console.error(err);
      // console.log("error");
      let PicUrl=["https://scontent.cdninstagram.com/v/t51.29350-15/201134827_161535689292443_5104633663825440635_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=LaJhBYUK46QAX9Ys3MR&_nc_ht=scontent.cdninstagram.com&oh=53318419a71f03e1c1b28ea214d39166&oe=60CF6FA6", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/195917899_945780992944892_480151292404590393_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=tDYEKTnHP9IAX_TNRmH&_nc_ht=scontent.cdninstagram.com&oh=7ed33b5d318e5b70414691d5c9eb66dc&oe=60CF0F16", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/196519290_1163146470866888_516877498906679933_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=1RbirWaA2ZIAX8uOTvt&_nc_ht=scontent.cdninstagram.com&oh=a314eca94a2e720aeae7bed29c166f00&oe=60CF37E9", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/193876127_116509297228729_7117844722277867024_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=m1qQpzj91g4AX_KRmwP&_nc_ht=scontent.cdninstagram.com&oh=f05c8942477870b0d2164c101cacad53&oe=60CE456D", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/192772335_818066525504516_5366988579058408664_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=5R3cqr-MimIAX-hE80U&_nc_ht=scontent.cdninstagram.com&oh=ef6e3d89360012a74049d02ad60789ca&oe=60CEEE9D", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/188888550_188469959806435_5869336049369105270_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=0MN7YD3h_g8AX8hQAF0&_nc_ht=scontent.cdninstagram.com&oh=7b7c8cd0c1784788f504f63c7c240c03&oe=60CEFD5C", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/172972186_1062866520870274_7270002926756165642_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=7ijlsBOzJAIAX-HT3mr&_nc_oc=AQmlcLRYstEsWs1Tq5v6iTvjXnxfn-UoCMilRBIlpMEgNQesoplm2LSNYvtyczzd2LY&_nc_ht=scontent.cdninstagram.com&oh=157961fdae2717e0ed15952e0bad82d2&oe=60CF1334", 
      "https://scontent.cdninstagram.com/v/t51.29350-15/166776600_149131107100530_6242025214745976116_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=70E87piE2tIAX-D0Ey6&_nc_ht=scontent.cdninstagram.com&oh=bd84838bb515882ff46ee94fca269285&oe=60CE7257",
       "https://scontent.cdninstagram.com/v/t51.29350-15/163608150_275500304228112_7663091167906913127_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=fD_4SXHaxq4AX_gUtNe&_nc_ht=scontent.cdninstagram.com&oh=68df767e26e479b0d49d930483fd58dc&oe=60CEF414", 
       "https://scontent.cdninstagram.com/v/t51.29350-15/156675539_173443081255668_6898039024529153365_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Ie-3wvlREgkAX8RYg2P&_nc_ht=scontent.cdninstagram.com&oh=aaf89660ca41a94d6ece1f75919e5f95&oe=60CE8440"];
       setImages(PicUrl)
    }

  }*/

  if (images.length === 0) {
    //console.log(images);
    setTimeout(() => {
      console.log("WELCOME TO JUNOON");
    }, 4000);

    return (
      <Fragment>
        <div>
          <div className="content-wrapper">
            <nav className="navbar center navbar-expand-lg">
              <div className="container flex-lg-column">
                <div className="navbar-header">
                  <div className="navbar-brand">
                    <img
                      intrinsicsize="1268x512"
                      src="#"
                      srcSet="style/images/junoon-black.png 1x, style/images/junoon-black.png 3x"
                      alt=""
                    />
                  </div>
                  <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
                    <button
                      className="hamburger animate"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span />
                    </button>
                  </div>
                </div>
                {/* /.navbar-header */}
                <div className="navbar-collapse collapse w-100 bg-light">
                  <ul className="navbar-nav nav-fill w-100">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/insta">
                        Instagram
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/collection"
                      >
                        Collections
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/timeline">
                        Timeline
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/about">
                        About
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/contact_us"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="wrapper light-wrapper">
              <div className="container inner pt-70">
                <h1>
                  <a
                    href="https://www.instagram.com/junoon.nsut/"
                    target="_blank"
                  >
                    <i
                      className="fa fa-instagram"
                      style={{ "font-size": "45px", color: "#333" }}
                    />
                  </a>
                </h1>
                <h2 className="sub-heading2 text-center">
                  <img
                    src="style/images/instagram.png"
                    style={{ width: "18vw", "min-width": "152px" }}
                  ></img>
                </h2>
                <div className="space50" />
                <div className="tiles grid">
                  <div className="items row isotope boxed grid-view text-center">
                    {/*/.item */}
                    <div style={{ flexDirection: "column" }}>
                      <div
                        style={{
                          WebkitBoxOrient: "horizontal",
                          WebkitBoxDirection: "normal",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4"
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src="style/images/loading.png"
                                alt=""
                              />

                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                        {/*/.item */}
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4"
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <a href="#">
                                <img
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src="style/images/loading.png"
                                  /*{images[1]}*/ alt=""
                                />
                              </a>
                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                        {/*/.item */}
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4 "
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <a href="#">
                                <img
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src="style/images/loading.png"
                                  alt=""
                                />
                              </a>
                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                      </div>
                      <div
                        style={{
                          WebkitBoxOrient: "horizontal",
                          WebkitBoxDirection: "normal",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4"
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src="style/images/loading.png"
                                alt=""
                              />

                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                        {/*/.item */}
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4"
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <a href="#">
                                <img
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src="style/images/loading.png"
                                  alt=""
                                />
                              </a>
                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                        {/*/.item */}
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4 "
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <a href="#">
                                <img
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src="style/images/loading.png"
                                  alt=""
                                />
                              </a>
                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                      </div>
                      <div
                        style={{
                          WebkitBoxOrient: "horizontal",
                          WebkitBoxDirection: "normal",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4"
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src="style/images/loading.png"
                                alt=""
                              />

                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                        {/*/.item */}
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4"
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <a href="#">
                                <img
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src="style/images/loading.png"
                                  alt=""
                                />
                              </a>
                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                        {/*/.item */}
                        <div
                          style={{ WebkitBoxFlex: "1", flex: "100%" }}
                          className="item grid-sizer col-md-6 col-lg-4 "
                        >
                          <div className="box bg-white shadow p-30">
                            <figure className="main polaroid overlay overlay1">
                              <a href="#">
                                <img
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src="style/images/loading.png"
                                  alt=""
                                />
                              </a>
                              {/* <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption> */}
                            </figure>
                          </div>
                          {/* /.box */}
                        </div>
                      </div>
                    </div>
                    {/*/.item */}

                    {/*/.item */}

                    {/*/.item */}

                    {/*/.item */}

                    {/*/.item */}

                    {/*/.item */}
                  </div>
                  {/*/.row */}
                </div>
                {/* /.tiles */}
              </div>
              {/* /.container */}
            </div>
            {/* /.wrapper */}
            <footer className="dark-wrapper inverse-text">
              <div className="container inner">
                <div className="row d-md-flex align-items-md-center">
                  <div className="col-md-4 text-center text-md-left">
                    <p className="mb-0"></p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4 text-center footy">
                    <img
                      src="#"
                      srcSet="style/images/junoon-white.png 1x, style/images/junoon-white.png 4x"
                      alt=""
                    />
                  </div>
                  {/*/column */}
                  <div className="col-md-4 text-center text-md-right">
                    <ul className="social social-mute social-s mt-10">
                      <li>
                        <a
                          href="https://www.facebook.com/junoon.nsut/"
                          target="_blank"
                        >
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.instagram.com/junoon.nsut/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/* /.container */}
            </footer>
          </div>
          {/* /.content-wrapper */}
          {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
          {/*







*/}
        </div>
      </Fragment>
    );
  }

  //console.log(images);

  var potty =
    "https://instagram.fdel1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/91265085_903024476797666_6994931629509272609_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t9dbIYTA7W4AX8D-c1o&oh=f631d76991f4fb81ffcb118521bfb09f&oe=5F14FC9B";
  return (
    <Fragment>
      <div>
        <div className="content-wrapper">
          <nav className="navbar center navbar-expand-lg">
            <div className="container flex-lg-column">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <img
                    intrinsicsize="1268x512"
                    src="#"
                    srcSet="style/images/junoon-black.png 1x, style/images/junoon-black.png 3x"
                    alt=""
                  />
                </div>
                <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
                  <button
                    className="hamburger animate"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span />
                  </button>
                </div>
              </div>
              {/* /.navbar-header */}
              <div className="navbar-collapse collapse w-100 bg-light">
                <ul className="navbar-nav nav-fill w-100">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>

                    {/*/.dropdown-menu */}
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/insta">
                      Instagram
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/collection">
                      Collections
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/wallpaper">
                      Wallpapers
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/contact_us">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="wrapper light-wrapper">
            <div className="container inner pt-70">
              <h1>
                <a
                  href="https://www.instagram.com/junoon.nsut/"
                  target="_blank"
                >
                  <i
                    className="fa fa-instagram"
                    style={{ "font-size": "45px", color: "#333" }}
                  />
                </a>
              </h1>
              <h2 className="sub-heading2 text-center">
                <img
                  src="style/images/instagram.png"
                  style={{ width: "18vw", "min-width": "152px" }}
                ></img>
              </h2>
              <div className="space50" />
              <div className="tiles grid">
                <div className="items row isotope boxed grid-view text-center">
                  {/*/.item */}
                  <div style={{ flexDirection: "column" }}>
                    <div
                      style={{
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4"
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[0]} target="_blank">
                              <span className="bg"></span>
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[0]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                      {/*/.item */}
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4"
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[1]} target="_blank">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[1]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                      {/*/.item */}
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4 "
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[2]} target="_blank">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[2]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                    </div>
                    <div
                      style={{
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4"
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[3]} target="_blank">
                              <span className="bg"></span>
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[3]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                      {/*/.item */}
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4"
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[4]} target="_blank">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[4]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                      {/*/.item */}
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4 "
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[5]} target="_blank">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[5]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                    </div>
                    <div
                      style={{
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4"
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[6]} target="_blank">
                              <span className="bg"></span>
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[6]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                      {/*/.item */}
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4"
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[7]} target="_blank">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[7]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                      {/*/.item */}
                      <div
                        style={{ WebkitBoxFlex: "1", flex: "100%" }}
                        className="item grid-sizer col-md-6 col-lg-4 "
                      >
                        <div className="box bg-white shadow p-30">
                          <figure className="main polaroid overlay overlay1">
                            <a href={images[8]} target="_blank">
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "contain",
                                }}
                                src={images[8]}
                                alt=""
                              />
                            </a>
                            <figcaption>
                              <h5 className="text-uppercase from-top mb-0">
                                See Post
                              </h5>
                            </figcaption>
                          </figure>
                        </div>
                        {/* /.box */}
                      </div>
                    </div>
                  </div>
                  {/*/.item */}

                  {/*/.item */}

                  {/*/.item */}

                  {/*/.item */}

                  {/*/.item */}

                  {/*/.item */}
                </div>
                {/*/.row */}
              </div>
              {/* /.tiles */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
          <footer className="dark-wrapper inverse-text">
            <div className="container inner">
              <div className="row d-md-flex align-items-md-center">
                <div className="col-md-4 text-center text-md-left">
                  <p className="mb-0"></p>
                </div>
                {/*/column */}
                <div className="col-md-4 text-center footy">
                  <img
                    src="#"
                    srcSet="style/images/junoon-white.png 1x, style/images/junoon-white.png 4x"
                    alt=""
                  />
                </div>
                {/*/column */}
                <div className="col-md-4 text-center text-md-right">
                  <ul className="social social-mute social-s mt-10">
                    <li>
                      <a
                        href="https://www.facebook.com/junoon.nsut/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/junoon.nsut/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /.container */}
          </footer>
        </div>
        {/* /.content-wrapper */}
        {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
        {/*







*/}
      </div>
    </Fragment>
  );
};

export default Insta_gal;
