import "./intro.scss"
import CV_Manouk_vanDraanen_NL from "../../assets/Manouk van Draanen - Curriculum Vitae.pdf"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                <h1>Manouk van Draanen</h1>
                <h2>IT Service Specialist</h2>
                </div>
                </div>
            <div className="right">
                <a href={CV_Manouk_vanDraanen_NL} target="blank" download><h3>Download CV</h3></a>
                </div>
        </div>
    )
}
