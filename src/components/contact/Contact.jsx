import "./contact.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CV_Manouk_vanDraanen_NL from "../../assets/Manouk van Draanen - Curriculum Vitae.pdf"

export default function Contact() {
    return (
        <div className="contact" id="contact">
                <div className="left">
                <h1>Contact</h1>
                <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/manouk-van-draanen-5ba112154" target="blank"><LinkedInIcon className="linkedin" /></a>
                        <a href="https://www.instagram.com/manoukvd" target="blank"><InstagramIcon className="instagram" /></a>
                        <a href="https://www.twitter.com/mvdraanen" target="blank"><TwitterIcon className="twitter" /></a>
                    </div>
                    <h2>Tot de volgende keer! ;-)</h2>
                    </div>
                <div className="right">
                <a href={CV_Manouk_vanDraanen_NL} target="blank" download className="cv"><h3>Download CV</h3></a>
                    </div>
        </div>
    )
}
