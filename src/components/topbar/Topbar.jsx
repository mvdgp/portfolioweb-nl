import "./topbar.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">mvd.</a>
                </div>
                <div className="right">
                <div className="itemContainer">
                <div className="taalswitch">
                    <a href="https://www.manoukvandraanen.com" className="switchEN">ENG</a>
                    <span> / </span>
                    <a href="https://nl.manoukvandraanen.com" className="switchNL">NL</a>
                    </div>
                        <a href="https://www.linkedin.com/in/manouk-van-draanen-5ba112154" target="blank"><LinkedInIcon className="linkedin" /></a>
                        <a href="https://www.instagram.com/manoukvd" target="blank"><InstagramIcon className="instagram" /></a>
                        <a href="https://www.twitter.com/mvdraanen" target="blank"><TwitterIcon className="twitter" /></a>
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
