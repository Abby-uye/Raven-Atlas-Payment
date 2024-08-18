import { RavenActionBar, RavenInputField} from "@ravenpay/raven-bank-ui"
import logo from "../../assets/images/payment/Ellipse 1.png"
import image1 from "../../assets/images/payment/image 1.png"
import image2  from "../../assets/images/payment/image 2.png"
import "./index.css"

export const Payment = () =>{
    return(
        <div className="container">
            <RavenActionBar 
            actionText="Hey! You are viewing this payment link ON preview Mode" type="info" visible />
           <div className="container__payment">
            <img src={logo} alt="logo" className="container__payment--logo" />
            <h5 className="container__payment--bd">B.D Game Store</h5>

            <div className="container__payment--gameStore">
                <h5 className="container__payment--ps5">Payment For PS5</h5>
                <p className="container__payment--thePayment">This payment is for the PS5 purchase in our <span className="container__payment--span">store earlier today</span></p>
            </div>

            <div>
                <div className="container__input1">
                <RavenInputField label="First Name" placeholder="Eg, 'Abigail'" className="container__theInput" color="black-light"/>
                <RavenInputField label="Last Name" placeholder="Eg, 'Godwin'" className="container__theInput" color="black-light"/>
                </div>
                <div className="container__input2">
                <RavenInputField label="Email Address" placeholder="Eg, 'yourname@gmail.com'" color="black-light"/>
                <RavenInputField label="Amount" placeholder="5000,000,00'" type="number"/>
                </div>
                <div className="container__input3">
                <RavenInputField value="Pay NGN 5000,000,00"/>
                </div>
            </div>
           </div>
           <div className="container__footer">
            <p>Raven Bank: <span>The peoples bank of Africa</span></p>
            <img style={{width:"10.7rem", height:"3.3rem"}} className="container__footer--images" src={image1} alt="google"/>
            <img  style={{width:"10.7rem", height:"3.3rem"}} src={image2} alt="appStore" className="container__footer--images"/>
           </div>
    </div>
    )
}