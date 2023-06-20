import React, { Fragment, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./About.css";
import Developers from "./Developers";
import FooterBlack from "../FooterBlack";
import OurProjects from "./OurProjects";
import NavbarWhite from "../NavbarWhite";
// import teamimg from "./imgs/sundarGroupPic.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Data = [
  {
    head: "Core Team (2023-2024)",
    members: ["Co-ordinator Incharge - Ms. Aastha Singh"],
    color: "white",
    memcolor: "whitesmoke",
  },
  {
    head: "Seniors",
    members: [
      "Prakash Choudhary - President Managerial",
      "Sankalp Roy - President Operational",
      "Aryan Maurya - Vice President",
      "Bhavya Singh - Vice President",
      "Rohan Singh - General Secretary",
      "Kartikeya Chhikara - Joint General Secretary",
      "Bhavya Mittal - Editor-In-Chief",
      "Amrutanshu Tyagi - Head Technical Dept.",
      "Jatin Rawat - Head Technical Dept.",
      "Kartikeya Gupta - Head Event Management",
      "Darsh Mittal - Head Design",
      "Priyanka - Head External Affairs",
      "Devanshi Sharma - Head Media Dept.",
      "Ayush Kumar - Head Creative",
      "Divy Kant - Head Public Relations",
      "Pratap Ranjan - Senior Executive Members",
      "Pranav Chauhan - Senior Executive Members",
      "Adarsh Kumar - Senior Executive Members",
      "Harsh Tomar - Senior Executive Members",
      "Tanuj Vats - Senior Executive Members",
      "Yashasvee Suri - Senior Executive Members",
    ],
    color: "white",
    memcolor: "whitesmoke",
  },
  // {
  //   head: "Juniors",
  //   members: [
  //     "Aayush Yadav",
  //     "Abhigya Gupta",
  //     "Akshana Prasad",
  //     "Allen Singh",
  //     "Amit Biswas",
  //     "Ananya Mishra",
  //     "Aniket Kumar",
  //     "Ansh Saxena",
  //     "Arpit Gupta",
  //     "Arsh Poddar",
  //     "Aryan Duhan",
  //     "Ayush Sinha",
  //     "Harshwardhan ",
  //     "Hitesh Khati",
  //     "Khushi Sharma ",
  //     "Ojas",
  //     "Priyanshu Khanda",
  //     "Rahul Batra",
  //     "Rishita Gupta",
  //     "Kumar Samarendra",
  //     "Sudhansh Chavan",
  //     "Udit Pal",
  //     "Utkarsh Shrivastava",
  //     "Vasudha Gupta",
  //   ],
  //   color: "white",
  //   memcolor: "whitesmoke",
  // },
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
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='style/images/favicon.png' />
        <title>Junoon</title>
        <link
          rel='stylesheet'
          type='text/css'
          href='style/css/bootstrap.min.css'
        />
        <link rel='stylesheet' type='text/css' href='style/css/plugins.css' />
        <link
          rel='stylesheet'
          type='text/css'
          href='style/revolution/css/settings.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='style/revolution/css/layers.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='style/revolution/css/navigation.css'
        />
        <link rel='stylesheet' type='text/css' href='style/type/icons.css' />
        <link rel='stylesheet' type='text/css' href='style.css' />
        <link
          rel='stylesheet'
          type='text/css'
          href='style/css/color/lavender.css'
        />
        <div className='content-wrapper'>
          <NavbarWhite />
          {/* Meet the team */}
          <div className='wrapper light-wrapper'>
            <div className='container inner pt-70'>
              <h1 className='heading text-center'>Meet the Team</h1>

              <div className='row boxed grid-view'>
                {/*/column */}
                <div className='col-md-11' style={{ margin: "0 auto" }}>
                  <div className='box bg-white shadow p-90'>
                    <div className='main-1'>
                      {Data.map((e, key) => {
                        return (
                          <div key={key} className='teampic'>
                            <div
                              className='about_teampic_header'
                              style={{ color: e.color }}
                            >
                              {e.head}
                            </div>
                            <div className='about_teampic_member'>
                              {e.members.map((p, key) => {
                                return (
                                  <span
                                    key={key}
                                    className='about_teampic_member_each'
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
                    <h4 className='mb-5'>JUNOON</h4>
                    <div className='meta mb-10'></div>
                    <p>Junoon The Photography club of NSUT</p>
                    <ul className='social social-mute'>
                      <li>
                        <a
                          href='https://www.instagram.com/junoon.nsut/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa fa-instagram' />
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
          <div className='wrapper '>
            <div
              className='container inner'
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100vw",
                maxBlockSize: "90%",
              }}
            >
              <Document
                file='./reels.pdf'
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
                  type='button'
                  className='btn btn-outline-dark'
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  type='button'
                  className='btn btn-outline-dark'
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
                <a href='./reels.pdf' download='Reels-4.0.pdf' target='_blank'>
                  <button
                    type='button'
                    className='btn btn-outline-dark download'
                    style={{ width: "205.71px", backgroundColor: "#101" }}
                  >
                    Download{" "}
                  </button>
                </a>
              </div>

              {/*/.row */}
              <div className='space10' />
            </div>
            {/* /.container */}
          </div>
          <h1 className='heading text-center'>Developers</h1>
          <Developers />
          <div className='wrapper '>
            <div className='container inner'>
              <h1 className='heading text-center'>Our Projects</h1>
              <OurProjects />
              {/*/.row */}
              <div className='space10' />
              {/* <div className='text-center'>
                <a href='#' className='btn'>
                  Hire Us
                </a>
              </div> */}
            </div>
            {/* /.container */}
          </div>
          <div className='wrapper '>
            <div className='container inner'>
              <h1 className='heading text-center'>Our Departments</h1>
              <div className='row'>
                {/*/column */}
                <div className='col-md-6'>
                  <h4 className='mb-20'>Photography</h4>
                  <p>
                    At Junoon, the Photography Department is the heart and soul
                    of our esteemed photography club at NSUT. Our passion for
                    photography runs deep, and it is our primary focus. We are
                    the eyes that capture the essence of every event organized
                    by the admin, the exhilarating energy of college fests, and
                    the memorable moments shared during society events. When you
                    think of photography, you think of Junoon. With a team of
                    highly skilled and talented photographers, we pride
                    ourselves on being the best in our college. We strive to
                    deliver exceptional visuals that preserve the spirit and
                    significance of each occasion. Through our lenses, we
                    transform fleeting moments into everlasting memories,
                    encapsulating the true essence of Junoon.
                  </p>
                </div>
                <div className='col-md-6'>
                  <h4 className='mb-20'>Content Writers</h4>
                  <p className='text-justify'>
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

                <div className='col-md-6'>
                  <h4 className='mb-20'>Graphic Design</h4>
                  <p className='text-justify'>
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
                <div className='col-md-6'>
                  <h4 className='mb-20'>Videography</h4>
                  <p className='text-justify'>
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
                    and engaging experience to the audience.
                    {/* A video can show
                    the enthusiasm of a videographer around the globe and
                    establish an emotional relationship that compels the
                    onlookers to cherish the efforts pushed in the video! */}
                  </p>
                </div>

                <div className='col-md-6'>
                  <h4 className='mb-20'>Tech-Department</h4>
                  <p className='text-justify'>
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
                <div className='col-md-6'>
                  <h4 className='mb-20'>Social Media</h4>
                  <p>
                    The Social Media Department at Junoon is the vibrant and
                    interactive face of our photography society. They take
                    charge of our Instagram handle and Facebook page, connecting
                    with our followers and showcasing the essence of Junoon.
                    With a keen eye for creativity, they curate and feature our
                    finest photographs, captivating videos from the Videography
                    Department, and stunning posters designed by the Graphic
                    Design Department. Moreover, they actively engage with our
                    community through the hashtag #junoonnsut, where every user
                    who shares their exceptional photograph using the hashtag
                    has the chance to be featured on our page. Through their
                    dedication, the Social Media Department ensures that
                    Junoon's captivating visuals reach a wider audience,
                    fostering a sense of excitement and appreciation for the art
                    of photography.
                  </p>
                </div>

                {/* /column */}
              </div>
              {/*/.row */}
              <div className='space10' />
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
            className='wrapper image-wrapper bg-image inverse-text'
            data-image-src='style/images/art/bg3.jpg'
          >
            {/* /.container */}
          </div>
          {/* Words of alumni */}
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

          {/* Best Insta Shots */}
          {/* <div className='wrapper gray-wrapper'>
            <div className='container inner'>
              <h2 className='section-title text-center'>Instagram Feed</h2>
              <p className='lead text-center'>
                Here you will find the latest shots from our Instagram feed.
              </p>
              <div className='space20' />
              <div className='tiles tiles-s'>
                <div id='instafeed' className='items row' />
              </div>
              <div className='space40' />
              <div className='text-center'>
                <a href='#' className='btn'>
                  Instagram Page
                </a>
              </div>
            </div>
          </div> */}

          {/* Footer */}
          <FooterBlack />
        </div>
        {/* /.content-wrapper */}
      </div>
    </Fragment>
  );
};

export default About;
