import logo from "./logo512.png";
import "./About.css";

export default function About() {
    return (
        <div className="About">
            <div className="App-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="descMain">
                <p id="descAbout">
                    Computer Hardware Performance is a Progressive 
                    Web App that shows the best computer parts based on benchmarks. 
                    Computer Hardware Performance shows 6 different categories of computer parts, which are CPU, GPU, RAM, SSD, HDD, and USB. 
                    Each part contains 10 top performances based on benchmarks. This Progressive Web App is made for 
                    the final project of mobile programming practicum.
                </p>
            </div>
        </div>
    );
}
