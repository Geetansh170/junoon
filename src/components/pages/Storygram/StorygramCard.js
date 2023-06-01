import React, { Fragment } from "react";
import "./Storygram.css";

export default function StorygramCard(props) {
  var str = "./storygramImages/" + props.title + ".jpg";
  return (
    <Fragment>
      <div className='box bg-inverse sg-out d-inline-block m-3 rounded'>
        <figure className='main mb-30 overlay overlay1 rounded'>
          <a
            href={props.href}
            target='_blank'
            rel='noreferrer noopener'
            className='img-box sg-imgBox'
          >
            {" "}
            <img
              src={require(str + "").default}
              alt=''
              className='whiteBorder sg-img'
            />
          </a>
          <figcaption>
            <h5 className='text-uppercase from-top mb-0'>{props.figcaption}</h5>
          </figcaption>
        </figure>

        <h5 className='post-title text-white'>
          <a href={props.href} target='_blank' rel='noreferrer noopener'>
            Storygram {props.title}
          </a>
        </h5>
        <div className='post-content'>
          <div className='sg-content'>
            {props.postContent.split("\n").map((r, key) => (
              <p key={key} className='m-0 small text-white'>
                {r}
              </p>
            ))}
          </div>
        </div>
        {/* /.post-content */}
        <hr className='sg-hr' />
        <div className='meta meta-footer d-flex justify-content-center mb-0 text-white'>
          <span className='date '>{props.date}</span>
        </div>
      </div>
    </Fragment>
  );
}
