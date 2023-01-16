import { Link } from "models/components/Link";
import { SocialMediaLink } from "models/components/SocialMediaLink"
import { PropsWithChildren } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { ReactComponent as LinkedInLogo } from "assets/icons/social/linkedin.svg";
import { ReactComponent as GitHubLogo } from "assets/icons/social/github.svg";

const socialMediaLinks: SocialMediaLink[] = [
  {image: <LinkedInLogo/>, url: "https://linkedin.com/in/thiagosmarques"},
  {image: <GitHubLogo/>, url: "https://github.com/thiagomarqs"},
];

const copyright = `© ${new Date().getFullYear()} github.com/thiagomarqs.`;

const links: Link[] = [
  {label: "Privacy", url: "#"},
  {label: "Terms", url: "#"},
  {label: "Help", url: "#"},
  {label: "Devices", url: "#"},
];

export const MasterPage = (props: PropsWithChildren) => {

  return (
    <div className="w-screen bg-black h-full">
      <Navbar/>
      {props.children}
      <Footer socialMedia={socialMediaLinks} copyright={copyright} links={links}/>
    </div>
  )
}