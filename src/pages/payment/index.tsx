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

            <div className="container__middle">
                <div className="container__input1">
                <RavenInputField label="First Name" labelColor="black-light" placeholder="Eg, 'Abigail'" className="container__input1--theInput" color="black-light"/>
                <RavenInputField label="Last Name" placeholder="Eg, 'Godwin'" className="container__input1theInput" color="black-light"/>
                </div>
                <div className="container__input2">
                <RavenInputField label="Email Address" placeholder="Eg, 'yourname@gmail.com'" color="black-light"/>
                <RavenInputField label="Amount" placeholder="5000,000,00'" type="number" color="black-light"/>
                </div>
                <div className="container__input3">
                <RavenInputField  className="container__footer--submit" value="Pay NGN 5000,000.00" color="deep-green-light" type="submit"/>
                </div>
            </div>
           </div>
           <div className="container__footer">
            <p style={{fontSize:"1,4rem",fontWeight:600,color:"#0B8376"}}>Raven Bank: <span style={{fontSize:"1,4rem",fontWeight:400,color:"#0B8376"}}>The peoples bank of Africa</span></p>
            <img style={{width:"10.7rem", height:"3.3rem"}} className="container__footer--images" src={image1} alt="google"/>
            <img  style={{width:"10.7rem", height:"3.3rem"}} src={image2} alt="appStore" className="container__footer--images"/>
           </div>
    </div>
    )
}