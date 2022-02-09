import React from "react";
import {Box, Button} from "@material-ui/core";

const AboutUserDetail =(props) => {
    return (
        <Box style={{lineHeight: 2}}>
            <div className="about-me-details">
            <h2>About Me</h2>
            <div className="details-flexbox">
              <div className="details">
                <p>Nickname: {props.nickname}</p>
                <p>Phone Number: {props.phone}</p>
                <p>City: {props.city}</p>
                <p>Email: {props.email}</p>
              </div>
              <div className="update-details">
                <Button className="detail-btn" variant="contained" color="primary" style={{borderRadius: "30px"}}>Update</Button>
              </div>
            </div>
            
          </div>
        </Box>
    )
}

export default AboutUserDetail;