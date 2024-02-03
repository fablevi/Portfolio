import GithubIcon from "../../icons_set/GithubIcon";
import GmailIcon from "../../icons_set/GmailIcon";
import InstaIcon from "../../icons_set/InstaIcon";
import LinkedInIcon from "../../icons_set/LinkedInIcon";

function Contact(props) {

    const components= <>
            <div className="contact-link">
                <GithubIcon width={"48"} height={"48"} />
            </div>
            <div className="contact-link">
                <LinkedInIcon width={"48"} height={"48"} />
            </div>
            <div className="contact-link">
                <GmailIcon width={"48"} height={"48"}/>
            </div>
            <div className="contact-link">
                <InstaIcon width={"48"} height={"48"}/>
            </div>
        </>

    return <>
        <div className="contact">
            {props.width > 768 ?
                null
            :
                components
            }
        </div>
    </>

}

export default Contact;

//<a href = "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example">Send Email</a>