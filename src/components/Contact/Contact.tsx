import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:scrowley016@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:scrowley016@gmail.com">scrowley016@gmail.com</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}