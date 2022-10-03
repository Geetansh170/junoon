import React, { Component } from "react";
import "./membercard.css";
import team from "./team-data/meet-team";
class TeamCard extends Component {
  state = {};
  render() {
    const instalink = "https://www.instagram.com/";
    return (
      <React.Fragment>
      <div className="team_head">Meet The Developers</div>
    
      <div className="team_card_w">
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {team.members.map((member) => (
          <div className="card-team">
            <div className="team-left">
              <div className="image">
                <img src={member.image} alt="AVATAR" />
              </div>
            </div>
            <div className="team-right">
              <div className="name">{member.name}</div>
              <div className="year">{member.year} Year</div>
            </div>
            <div className="description">
              <h3 style={{fontSize:"14px"}}>{member.description}</h3>
              <div className="insta-member">
                <a href={instalink.concat(member.insta)}>
                  <i class="fab fa-instagram"> {member.insta}</i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </React.Fragment>
    );
  }
}

export default TeamCard;
