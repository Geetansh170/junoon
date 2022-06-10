import React, { Fragment, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./About.css";
import teamimg from "./imgs/sundarGroupPic.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Data = [
  {
    head: "Core Team (2022-2023)",
    members: ["Co-ordinator Incharge - Ms. Aastha Singh"],
    color: "white",
    memcolor: "whitesmoke",
  },
  {
    head: "Seniors",
    members: [
      "Deepak Verma - President Managerial",
      "Aditya Singh - President Operations",
      "Aasritha Lingam - Vice President",
      "Aryan Verma - Vice President",
      "Jaydeep Madhudiya - General Secretary",
      "Ishkaran Kochar - Joint General Secretary",
      "Divyanshu Kumar - Editor-In-Chief",
      "Divyanshu Kumar - Head, Technical Dept.",
      "Arunav Goel - Head, Event Management",
      "Armaan Chauhan - Head, Design Dept",
      "Parth Stark - Head, Creative Dept",
      "Siddharth Gupta - Head, Public Relations",
      "Shristi Agarwal - Head, External Affairs",
      "Naman Gogia - Head, External Affairs",
      "Sanjay Chowdhary - Head, Media Dept.",
      "Naman Singh - Senior Executive Member",
      "Unnat Mittal - Senior Executive Member",
      "Raghav Garg - Senior Executive Member",
      "Atharv Rustagi - Senior Executive Member",
      "Vishal Vishwakarma - Senior Executive Member",
    ],
    color: "white",
    memcolor: "whitesmoke",
  },
  {
    head: "Juniors",
    members: [
      "Adarsh Kumar",
      // "Aditya Kumar",
      "Amrutanshu Tyagi",
      "Aryan Maurya",
      // "Arsh Poddar",
      "Ayush Kumar",
      "Bhavya Mittal",
      "Bhavya Singh",
      "Darsh Mittal",
      "Devanshi Sharma",
      "Divy Kant",
      "Harsh Tomar",
      "Jatin Rawat",
      "Kartikeya Chhikara",
      "Kartikeya Gupta",
      "Prakash Choudhary",
      "Pranav Chauhan",
      "Pratap Ranjan",
      "Priyanka Kumari",
      "Rohan Singh",
      "Sankalp Roy",
      "Tanuj Vats",
      "Yashasvee Suri",
    ],
    color: "white",
    memcolor: "whitesmoke",
  },
  {
    // head: "Sophomores",
    members: [
      // "Aayush Yadav",
      // "Abhigya Gupta",
      // "Akshana Prasad",
      // "Akshatra Chauhan",
      // "Allen Singh",
      // "Amit Biswas",
      // "Ansh Saxena ",
      // "Ayush Sinha ",
      // "Harshdeep Kaur",
      // "Harshwardhan",
      // "Hitesh Khati",
      // "Khushi Sharma",
      // "Ojas ",
      // "Rahul Batra ",
      // "Rishita Gupta",
      // "Shreya Khatry",
      // "Snehal Kaur",
      // "Udit Pal",
      // "Ananya Mishra",
      // "Nandini Srivastava ",
      // "Aniket Kumar",
      // "Utkarsh Shrivastava",
      // "Safal Gupta",
      // "Priyanshu Khanda"
    ],
    color: "white",
    memcolor: "whitesmoke",
  },
  // {
  //   head: "First Years",
  //   members: [
  //     "Aayush Yadav",
  //     "Abhigya Gupta",
  //     "Akshana Prasad",
  //     "Akshatra Chauhan",
  //     "Allen Singh",
  //     "Amit Biswas",
  //     "Ansh Saxena ",
  //     "Ayush Sinha ",
  //     "Harshdeep Kaur",
  //     "Harshwardhan",
  //     "Hitesh Khati",
  //     "Khushi Sharma",
  //     "Ojas ",
  //     "Rahul Batra ",
  //     "Rishita Gupta",
  //     "Shreya Khatry",
  //     "Snehal Kaur",
  //     "Udit Pal",
  //     "Ananya Mishra",
  //     "Priyanshu khanda",
  //     "Nandini Srivastava ",
  //     "Aniket Kumar",
  //     "Utkarsh Shrivastava",
  //     "Safal Gupta",
  //     "Priyanshu Khanda"
  //   ],
  //   color: "white",
  //   memcolor: "whitesmoke",
  // },
];



const About = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Fragment>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="style/images/favicon.png" />
        <title>Junoon</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="style/css/bootstrap.min.css"
        />
        <link rel="stylesheet" type="text/css" href="style/css/plugins.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="style/revolution/css/settings.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="style/revolution/css/layers.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="style/revolution/css/navigation.css"
        />
        <link rel="stylesheet" type="text/css" href="style/type/icons.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="style/css/color/lavender.css"
        />
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
                    <a className="nav-link hover-color-about" href="/">
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
              <h2 className="section-title mb-40 text-center">Meet the Team</h2>
              <div className="row boxed grid-view">
                {/*/column */}
                <div className="col-md-11" style={{ margin: "0 auto" }}>
                  <div className="box bg-white shadow p-90">
                    <div className="main-1">
                      {Data.map((e) => {
                        return (
                          <div className="teampic">
                            <div
                              className="about_teampic_header"
                              style={{ color: e.color }}
                            >
                              {e.head}
                            </div>
                            <div className="about_teampic_member">
                              {e.members.map((p) => {
                                return (
                                  <span
                                    className="about_teampic_member_each"
                                    style={{ color: e.memcolor }}
                                  >
                                    {p}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <h4 className="mb-5">JUNOON</h4>
                    <div className="meta mb-10"></div>
                    <p>Junoon The Photography club of NSUT</p>
                    <ul className="social social-mute">
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
                  {/* /.box */}
                </div>
                {/*/column */}

                {/*/column */}

                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
          <div className="wrapper gray-wrapper">
            <div
              className="container inner"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100vw",
                maxBlockSize: "90%",
              }}
            >
              <Document
                file="./reels.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />

                {/* {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            } */}
              </Document>
              <div>
                <p>
                  Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                  {numPages || "--"}
                </p>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>

              <div>
                {/* <button
          type="button"
          className="btn btn-outline-dark"
          onClick={nextPage}
        >
          Next
        </button> */}
                <a href="./reels.pdf" download="Reels-4.0.pdf" target="_blank">
                  <button
                    type="button"
                    className="btn btn-outline-dark download"
                    style={{ width: "205.71px", "background-color": "#101" }}
                  >
                    Download{" "}
                  </button>
                </a>
              </div>

              {/*/.row */}
              <div className="space10" />
            </div>
            {/* /.container */}
          </div>

          <div className="wrapper gray-wrapper">
            <div className="container inner">
              <h1 className="heading text-center">Our Projects</h1>
              <div className="row">
                {/*/column */}
                <div className="col-md-6">
                  <h4 className="mb-20">Storygram</h4>
                  <p className="text-justify">
                    Every picture has a story behind it! The picture shows its
                    emotions through telling its unique story. A photographer is
                    the one who knows each and every chapter of the photograph
                    he takes. "Storygram" is a project of Junoon that admires
                    clicking pictures that describe a story. It is just a random
                    capturing of certain moments that are converted into a
                    story. Different sceneries and sentiments in the surrounding
                    are enough to encourage the cameraman to frame them. This
                    project has helped the people to take photos suitable for a
                    storygram. A kid, fruit-sellers, animals, roads, shelters,
                    people, that means anything or anybody can contribute in the
                    storygram. Storygram really makes the soul of a reader
                    cherished by reading such heart-touching posts.
                  </p>
                </div>
                {/* /column */}
                <div className="col-md-6">
                  <h4 className="mb-20">Project Perspective</h4>
                  <p className="text-justify">
                    An eye of the photographer can see the weirdest things in an
                    impressive fashion! The cameraman is always in a search of
                    such moments. One of the amazing projects of Junoon is
                    "Project Perspective" which is completely based on this
                    theme. This gives you the freedom of clicking anything that
                    may be real or illusionistic but it should blow the mind of
                    the viewers by its creativity. You can find imaginativeness
                    anywhere in this big sphere. To admire the scene in a
                    different perspective all you need is to grope flora-fauna,
                    architecture, monuments, people and many more things. This
                    project has been going on for many years. People in Junoon
                    have always come out with their unexpected innovativeness
                    followed by their super skills in photography.
                  </p>
                </div>
                <div className="col-md-6" style={{ margin: "0 auto" }}>
                  <h4 className="mb-20">Humans of NSUT</h4>
                  <p className="text-justify">
                    The world is a stage. We merely tell untold stories through
                    pictures and captions. We talk to different people who are a
                    part of the NSUT family. Be it the seniors who share
                    unfiltered experiences of their college life, the professors
                    who taught us well, or the bhaiya at McCain famous for his
                    Perri Perri fries! Inspired by the Humans of New York,
                    Humans of NSUT is for all the people who contribute directly
                    or indirectly to make these 145 acres in southwest Delhi
                    exciting and fun. Cheers to all the humans out there! we owe
                    it to you.
                  </p>
                </div>

                {/* <div className='col-md-6'>
                  <h4 className='mb-20'>Department 5</h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi porttitor ligula,
                    eget lacinia odio sem nec elit. Aenean eu leo quam.
                    Pellentesque ornare sem. Nullam id dolor id nibh ultricies
                    vehicula ut id elit ullamcorper.
                  </p>
                  <ol>
                    <li>Vivamus sagittis lacus vel augue laoreet.</li>
                    <li>Cras mattis consectetur purus sit amet.</li>
                    <li>Vestibulum id ligula porta felis euismod.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                  </ol>
                </div> */}
                {/* <div className='col-md-6'>
                  <h4 className='mb-20'>Department 6</h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi porttitor ligula,
                    eget lacinia odio sem nec elit. Aenean eu leo quam.
                    Pellentesque ornare sem. Nullam id dolor id nibh ultricies
                    vehicula ut id elit ullamcorper.
                  </p>
                  <ol>
                    <li>Vivamus sagittis lacus vel augue laoreet.</li>
                    <li>Cras mattis consectetur purus sit amet.</li>
                    <li>Vestibulum id ligula porta felis euismod.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                  </ol>
                </div> */}
                {/* /column */}
              </div>
              {/*/.row */}
              <div className="space10" />
              {/* <div className='text-center'>
                <a href='#' className='btn'>
                  Hire Us
                </a>
              </div> */}
            </div>
            {/* /.container */}
          </div>

          <div className="wrapper gray-wrapper">
            <div className="container inner">
              <h1 className="heading text-center">Our Departments</h1>
              <div className="row">
                {/*/column */}
                <div className="col-md-6">
                  <h4 className="mb-20">Junoon Design</h4>
                  <p className="text-justify">
                    Creativity is a speciality that is necessarily not possessed
                    by everyone, but a Graphic Designer is blessed with this
                    skill! Graphic designing is a way of interacting with people
                    through incredible ideas that craft informative content in a
                    beautiful piece of work. "Junoon Design" is a department
                    that has designers who are responsible for developing
                    different web designs, posters, brochures, logos, albums and
                    many more illustrations like this. This department
                    appreciates the beauty of the art of a designer who applies
                    suitable techniques to enhance the font, colour, animation,
                    shapes, images etcetera to make commendable designs. The
                    designs produced are usually displayed at the occasion of
                    festivals or some important events. The designers crave to
                    impress the viewers at first glance by putting immense hard
                    work and passion. Junoon Design invariably contributes
                    something irresistible, just we need an artistic eye to
                    praise that image.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="mb-20">VideoGraphy</h4>
                  <p className="text-justify">
                    Video means, just pick up the camera and move it all-around,
                    record and broadcast whatever that you want. Isn't it?
                    Fortunately, this is not true. "Videography" is a trend that
                    shows a video has become a medium that persuasively
                    describes all the essential facts anyone wants to convey to
                    the people. Junoon continues to promote the stage of
                    videography that has shared many happy moments on various
                    orientations, college festivals, farewells, etcetera. A
                    video is an efficacious blend of visuals, motion and sound
                    that convince the viewers to embrace the content. A
                    videographer does not merely shoot the footage but that
                    person is accountable for editing the film, checking the
                    sound production and applying designs to it. Videographers
                    are plentiful creative which is a really important part of
                    their profession as through video one can offer a fantastic
                    and engaging experience to the audience. A video can show
                    the enthusiasm of a videographer around the globe and
                    establish an emotional relationship that compels the
                    onlookers to cherish the efforts pushed in the video!
                  </p>
                </div>

                <div className="col-md-6">
                  <h4 className="mb-20">Content Writers</h4>
                  <p className="text-justify">
                    Every photograph ever clicked at Junoon has a story and we
                    are here to tell you those untold stories. We have many
                    stories of this 145 acres campus be it of utmost happiness
                    to sadness, success to disappointments, extreme positives to
                    negatives. We capture stories of various people including
                    the curious fresher who still has not toured the entire
                    campus, McCain uncle who is just having a usual busy day at
                    work, the security guard who asks for ID card even if you
                    are entering the college for the millionth time or maybe a
                    random student getting late for his class. We write
                    storygrams which give life to the photographs and make you
                    believe that a single photograph is capable of telling a
                    thousand stories.
                  </p>
                </div>

                <div className="col-md-6">
                  <h4 className="mb-20">Tech-Department</h4>
                  <p className="text-justify">
                    So we got pictures, we got videos and we got stories, but to
                    properly showcase this to the world, we needed a website.
                    This is where the tech department of Junoon comes in. This
                    department mainly deals with creating, maintaining and
                    improving the official website of Junoon. A website is as
                    good as its user experience and Junoon tries to provide an
                    easy, informative, seamless UI that both showcases our
                    talent but doesn't overwhelm the visitors with too much
                    content. It also provides an easier way to get in contact
                    with Junoon for collaborations. With time, we will also
                    conduct all the competitions on the website itself, giving a
                    dedicated space for budding and veteran photographers to
                    interact and improve together.
                  </p>
                </div>
                {/* <div className='col-md-6'>
                  <h4 className='mb-20'>Department 5</h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi porttitor ligula,
                    eget lacinia odio sem nec elit. Aenean eu leo quam.
                    Pellentesque ornare sem. Nullam id dolor id nibh ultricies
                    vehicula ut id elit ullamcorper.
                  </p>
                  <ol>
                    <li>Vivamus sagittis lacus vel augue laoreet.</li>
                    <li>Cras mattis consectetur purus sit amet.</li>
                    <li>Vestibulum id ligula porta felis euismod.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                  </ol>
                </div> */}
                {/* <div className='col-md-6'>
                  <h4 className='mb-20'>Department 6</h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi porttitor ligula,
                    eget lacinia odio sem nec elit. Aenean eu leo quam.
                    Pellentesque ornare sem. Nullam id dolor id nibh ultricies
                    vehicula ut id elit ullamcorper.
                  </p>
                  <ol>
                    <li>Vivamus sagittis lacus vel augue laoreet.</li>
                    <li>Cras mattis consectetur purus sit amet.</li>
                    <li>Vestibulum id ligula porta felis euismod.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                  </ol>
                </div> */}
                {/* /column */}
              </div>
              {/*/.row */}
              <div className="space10" />
              {/* <div className='text-center'>
                <a href='#' className='btn'>
                  Hire Us
                </a>
              </div> */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
          <div
            className="wrapper image-wrapper bg-image inverse-text"
            data-image-src="style/images/art/bg3.jpg"
          >
            {/* /.container */}
          </div>

          {/* /.wrapper */}
          {/* <div className='wrapper light-wrapper'>
            <div className='container inner'>
              <h2 className='section-title text-center'>Words of Alumuni</h2>
              <div className='cube-carousel cbp'>
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Connor Gibson
                      </footer>
                    </blockquote>
                  </div>
                 
                </div>
               
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Coriss Ambady
                      </footer>
                    </blockquote>
                  </div>
                 
                </div>
                
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Barclay Widerski
                      </footer>
                    </blockquote>
                  </div>
                
                </div>
               
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Nikola Brooten
                      </footer>
                    </blockquote>
                  </div>
                 
                </div>
              
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Jackie Sanders
                      </footer>
                    </blockquote>
                  </div>
                  
                </div>
               
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>Cory Zamora</footer>
                    </blockquote>
                  </div>
                 
                </div>
              
                <div className='cbp-item'>
                  <div className='box bg-white shadow'>
                    <blockquote className='icon icon-left'>
                      <p>
                        Sed posuere consectetur est at lobortis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        mollis, est non commodo luctus, nisi erat porttitor
                        ligula lacinia odio.
                      </p>
                      <footer className='blockquote-footer'>
                        Pierce Bailey
                      </footer>
                    </blockquote>
                  </div>
                  
                </div>
               
              </div>
             
            </div>
           
          </div> */}
          {/* /.wrapper */}
          {/* <div className='wrapper gray-wrapper'>
            <div className='container inner'>
              <h2 className='section-title text-center'>Instagram Feed</h2>
              <p className='lead text-center'>
                Here you will find the latest shots from our Instagram feed.
              </p>
              <div className='space20' />
              <div className='tiles tiles-s'>
                <div id='instafeed' className='items row' />
              </div> */}
          {/*/.tiles */}
          {/* <div className='space40' />
              <div className='text-center'>
                <a href='#' className='btn'>
                  Instagram Page
                </a>
              </div>
            </div> */}
          {/* /.container */}
          {/* </div> */}
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

export default About;
