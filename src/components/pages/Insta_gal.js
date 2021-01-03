import React, {useState, Fragment ,useContext,useEffect} from "react";
import axios from 'axios';

const Insta_gal = () => {

  const [user, setUsername] = useState({
    username:"junoon.nsut"
  });

  const [images, setImages] = useState([]);

  //var images= [];
  //const { arr } = images;
   
  useEffect(() => {
    callapi(user);
    console.log("use effect");
  },images);

 
  const callapi = async (post) => {

    console.log("hahahahha");

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      console.log("before")
      const res = await axios.get("https://graph.instagram.com/17841401475482155/media?access_token=IGQVJWb2Vod21HeW1CenZA1SkJMUl91UGc5LTFEQmhmWEx1aGZAnanhKYThHM1NzMmJsajlQcFFqanAwMnBCWkVNb3VYYi14RmxScXhtaG1yS1cxb0x5TFBDUXZAaYklXcjI5WXRSLXZAR&fields=id,timestamp");
      console.log("after");
      

      let useful_data=res.data.data.slice();//only id and timestamp
      let PicId={};//to store all the IDs

      for (let i = 0; i < useful_data.length; i++) {
          PicId[i]=useful_data[i].id;
        
      }
      
console.log(PicId);
      let PicUrl=[];
      let j=0;
      for (let i = 0; i <25 ; i++) {
        let url = await axios.get("https://graph.instagram.com/"+PicId[i]+"?access_token=IGQVJWb2Vod21HeW1CenZA1SkJMUl91UGc5LTFEQmhmWEx1aGZAnanhKYThHM1NzMmJsajlQcFFqanAwMnBCWkVNb3VYYi14RmxScXhtaG1yS1cxb0x5TFBDUXZAaYklXcjI5WXRSLXZAR&fields=media_url,media_type");
        console.log(url);
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

      console.log(PicUrl);
      
       setImages(PicUrl)
      console.log("images");
     
    } 
    
    
    catch (err) {
      console.error(err);
    }

  }

  
  if (images.length === 0) {
    console.log(images);
    setTimeout(() => { console.log("hello")}, 4000);

    return (
      <Fragment>
      <div>
        <div className='content-wrapper'>
        <nav className='navbar center navbar-expand-lg'>
            <div className='container flex-lg-column'>
              <div className='navbar-header'>
                <div className='navbar-brand'>
                  
                    <img
                      intrinsicsize="1268x512"
                      src='#'
                      srcSet='style/images/junoon-black.png 1x, style/images/junoon-black.png 3x'
                      alt=''
                    />
                 
                </div>
                <div className='navbar-hamburger ml-auto d-lg-none d-xl-none'>
                  <button
                    className='hamburger animate'
                    data-toggle='collapse'
                    data-target='.navbar-collapse'
                  >
                    <span />
                  </button>
                </div>
              </div>
              {/* /.navbar-header */}
              <div className='navbar-collapse collapse w-100 bg-light'>
                <ul className='navbar-nav nav-fill w-100'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Home
                    </a>
                    
                    {/*/.dropdown-menu */}
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/insta'>
                      Instagram
                    </a>
                    
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/drive'>
                      Drive
                    </a>
                    
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/about'>
                      About
                    </a>
                   
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/contact_us'>
                      Contact
                    </a>
                   
                  </li>
            
                  
                  
                </ul>
              </div>
            </div>
          </nav>
          <div className='wrapper light-wrapper'>
            <div className='container inner pt-70'>
              <h1 className='heading text-center'>THIS  IS  JUNOON</h1>
              <h2 className='sub-heading2 text-center'>
                Our recent Instagram feed
              </h2>
              <div className='space50' />
             <div className='tiles grid'>
                <div className='items row isotope boxed grid-view text-center'>
                  
                  {/*/.item */}
                  <div style={{ flexDirection:'column'}}>
                  <div style={{WebkitBoxOrient:"horizontal", WebkitBoxDirection:"normal", flexDirection:"row"}}>
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      
                          <img style={{width: "100%" , height:'auto', objectFit:'contain'}} src="style/images/loading.png" alt='' />
                        
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
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src="style/images/loading.png"/*{images[1]}*/ alt='' />
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
                  <div  style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4 '>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src="style/images/loading.png" alt='' />
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
                  <div style={{WebkitBoxOrient:"horizontal", WebkitBoxDirection:"normal", flexDirection:"row"}}>
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      
                          <img style={{width: "100%" , height:'auto', objectFit:'contain'}} src="style/images/loading.png" alt='' />
                        
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
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src="style/images/loading.png" alt='' />
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
                  <div  style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4 '>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src="style/images/loading.png" alt='' />
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
                  <div style={{WebkitBoxOrient:"horizontal", WebkitBoxDirection:"normal", flexDirection:"row"}}>
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      
                          <img style={{width: "100%" , height:'auto', objectFit:'contain'}} src="style/images/loading.png" alt='' />
                        
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
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src="style/images/loading.png" alt='' />
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
                  <div  style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4 '>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src="style/images/loading.png" alt='' />
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
          <footer className='dark-wrapper inverse-text'>
            <div className='container inner'>
              <div className='row d-md-flex align-items-md-center'>
                <div className='col-md-4 text-center text-md-left'>
                  
                </div>
                {/*/column */}
                <div className='col-md-4 text-center footy'>
                  <img
                    src='#'
                    srcSet='style/images/junoon-white.png 1x, style/images/junoon-white.png 4x'
                    alt=''
                  />
                </div>
                {/*/column */}
                <div className='col-md-4 text-center text-md-right'>
                  <ul className='social social-mute social-s mt-10'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.facebook.com/junoon.nsut/'>
                        <i className='fa fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-pinterest' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-vimeo' />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/junoon.nsut/'>
                        <i className='fa fa-instagram' />
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
    )
  }

  console.log(images);

  var potty = "https://instagram.fdel1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/91265085_903024476797666_6994931629509272609_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t9dbIYTA7W4AX8D-c1o&oh=f631d76991f4fb81ffcb118521bfb09f&oe=5F14FC9B";
  return (
    <Fragment>
      <div>
        <div className='content-wrapper'>
        <nav className='navbar center navbar-expand-lg'>
            <div className='container flex-lg-column'>
              <div className='navbar-header'>
                <div className='navbar-brand'>
                  
                    <img
                      intrinsicsize="1268x512"
                      src='#'
                      srcSet='style/images/junoon-black.png 1x, style/images/junoon-black.png 3x'
                      alt=''
                    />
                 
                </div>
                <div className='navbar-hamburger ml-auto d-lg-none d-xl-none'>
                  <button
                    className='hamburger animate'
                    data-toggle='collapse'
                    data-target='.navbar-collapse'
                  >
                    <span />
                  </button>
                </div>
              </div>
              {/* /.navbar-header */}
              <div className='navbar-collapse collapse w-100 bg-light'>
                <ul className='navbar-nav nav-fill w-100'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/home'>
                      Home
                    </a>
                    
                    {/*/.dropdown-menu */}
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/insta'>
                      Instagram
                    </a>
                    
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/drive'>
                      Drive
                    </a>
                    
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/about'>
                      About
                    </a>
                   
                  </li>
                  <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='/contact_us'>
                      Contact
                    </a>
                   
                  </li>
            
                  
                  
                </ul>
              </div>
            </div>
          </nav>
          <div className='wrapper light-wrapper'>
            <div className='container inner pt-70'>
              <h1 className='heading text-center'>THIS  IS  JUNOON</h1>
              <h2 className='sub-heading2 text-center'>
                Our recent Instagram feed
              </h2>
              <div className='space50' />
             <div className='tiles grid'>
                <div className='items row isotope boxed grid-view text-center'>
                  
                  {/*/.item */}
                  <div style={{ flexDirection:'column'}}>
                  <div style={{WebkitBoxOrient:"horizontal", WebkitBoxDirection:"normal", flexDirection:"row"}}>
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href={images[0]} target='_blank'>
                          <img style={{width: "100%" , height:'auto', objectFit:'contain'}} src={images[0]} alt='' />
                          </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[1]} target='_blank'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src={images[1]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div  style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4 '>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[2]} target='_blank'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src={images[2]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  </div>
                  <div style={{WebkitBoxOrient:"horizontal", WebkitBoxDirection:"normal", flexDirection:"row"}}>
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[3]} target='_blank'>
                          <img style={{width: "100%" , height:'auto', objectFit:'contain'}} src={images[3]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[4]} target='_blank'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src={images[4]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div  style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4 '>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[5]} target='_blank'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src={images[5]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  </div>
                  <div style={{WebkitBoxOrient:"horizontal", WebkitBoxDirection:"normal", flexDirection:"row"}}>
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[6]} target='_blank'>
                          <img style={{width: "100%" , height:'auto', objectFit:'contain'}} src={images[6]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[7]} target='_blank'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src={images[7]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div  style={{WebkitBoxFlex:"1" , flex:"100%" }} className='item grid-sizer col-md-6 col-lg-4 '>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                      <a href={images[8]} target='_blank'>
                          <img style={{width: "100%" , height:"auto", objectFit:'contain'}} src={images[8]} alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
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
          <footer className='dark-wrapper inverse-text'>
          <div className='container inner'>
            <div className='row d-md-flex align-items-md-center'>
              <div className='col-md-4 text-center text-md-left'>
                <p className='mb-0'></p>
              </div>
              {/*/column */}
              <div className='col-md-4 text-center footy'>
                <img
                  src='#'
                  srcSet='
                  style/images/junoon-white.png    1x,
                  style/images/junoon-white.png 4x
                '
                  alt=''
                />
              </div>
              {/*/column */}
              <div className='col-md-4 text-center text-md-right'>
                <ul className='social social-mute social-s mt-10'>
                  
                  <li>
                    <a href='https://www.facebook.com/junoon.nsut/' target="_blank">
                      <i className='fa fa-facebook-f' />
                    </a>
                  </li>
                  
                  <li>
                    <a href='https://www.instagram.com/junoon.nsut/' target="_blank">
                      <i className='fa fa-instagram' />
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
