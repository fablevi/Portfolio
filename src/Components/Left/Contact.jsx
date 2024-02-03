import DiscordIcon from "../../icons_set/DiscordIcon";
import GithubIcon from "../../icons_set/GithubIcon";
import GmailIcon from "../../icons_set/GmailIcon";
import InstaIcon from "../../icons_set/InstaIcon";
import LinkedInIcon from "../../icons_set/LinkedInIcon";

function Contact(props) {

    const components = <>
        <a className="contact-link-a" href="https://github.com/fablevi" target="_blank">
            <div className="contact-link">
                <GithubIcon width={"48"} height={"48"} />
            </div>
        </a>
        <a className="contact-link-a" href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example" target="_blank">
            <div className="contact-link">
                <GmailIcon width={"48"} height={"48"} />
            </div>
        </a>
        <a className="contact-link-a" href="https://www.linkedin.com/in/f%C3%A1bi%C3%A1n-levente-01bb0b2b2/" target="_blank">
            <div className="contact-link">
                <LinkedInIcon width={"48"} height={"48"} />
            </div>
        </a>
        <a className="contact-link-a" href="https://www.instagram.com/fbnlvnt/" target="_blank">
            <div className="contact-link">
                <InstaIcon width={"48"} height={"48"} />
            </div>
        </a>
        <a className="contact-link-a" href="https://discordapp.com/users/434645575074447361" target="_blank">
            <div className="contact-link">
                <DiscordIcon width={"48"} height={"48"} />
            </div>
        </a>
    </>

    return <>
        <div className="contact">
            {props.width > 768 ?
                <>
                    <div style={{ width: props.width > 1350 ? "50%":"70%", display: "flex", justifyContent: "space-evenly" }}>
                        {components}
                    </div>
                    <div style={{ width: props.width > 1350 ? "50%":"30%"}}></div>
                </>
                :
                components
            }
        </div>
    </>

}

export default Contact;

//<a href = "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example">Send Email</a> className="contact-link"