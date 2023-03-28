import React from "react";
import "./App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="footer-box">
            <div>
              <h5>ONLINE SHOPING</h5>
              <br />
              <NavLink>men</NavLink>
              <br />

              <NavLink>women</NavLink>
              <br />
              <NavLink>home & living</NavLink>
              <br />
              <NavLink> gift & cards</NavLink>
              <br />
              <NavLink>beauty</NavLink>
              <br />
              <NavLink>myntra insider</NavLink>
              <br />
              <NavLink>fuck you</NavLink>
              <br />
            </div>
            <div>
              <h5>USTOMER POLICIES</h5>
              <br />
              <NavLink>men</NavLink>
              <br />
              <NavLink>women</NavLink>
              <br />
              <NavLink>home & living</NavLink>
              <br />
              <NavLink> gift & cards</NavLink>
              <br />
              <NavLink>beauty</NavLink>
              <br />
              <NavLink>myntra insider</NavLink>
              <br />
              <NavLink>fuck you</NavLink>
              <br />
            </div>
            <div></div>
          </div>

          <div className="footer-box2">
            <div>
              <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
              <br />
              <div className="play">
                <img
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  alt="the"
                />
                <img
                  src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  alt="the"
                />
              </div>
              <br />

              <h5>KEEP IN TOUCH</h5>

              <br />
              <div className="play">
                <FacebookIcon sx={{ fontSize: 30 }} />
                <LinkedInIcon sx={{ fontSize: 30 }} />
                <YouTubeIcon sx={{ fontSize: 30 }} />
                <InstagramIcon sx={{ fontSize: 30 }} />
              </div>
            </div>

            <div>
              <div className="one">
                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                  alt="the" />
                <p>100% ORIGINAL guarantee for all products at myntra.com</p>
              </div>
              <div className="one">
                <img
                  src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                  alt="the"
                />
                <p>100% ORIGINAL guarantee for all products at myntra.com</p>
              </div>
            </div>
          </div>
        </div>
        <h1>made by Pagal-M10</h1>
      </footer>
    </>
  );
};

export default Footer;
