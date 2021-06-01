import React from 'react';
import'./FAQ.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

export default class Faq extends React.Component{
    render(){
        return(

           <>
<div className="card card-body" id="con1">
    <h2> Frequently Asked Questions (FAQ)</h2>
    <hr/>
        <Accordion defaultActiveKey="0">
            <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    What is Foodaway?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            FoodAway is a leading online food delivery service that operates in Kuwait, Saudi Arabia, UAE, Bahrain, Oman, Qatar, Jordan, Egypt and Iraq. We seamlessly connect customers with their favorite restaurants. It takes just few taps from our platform to place an order through talabat from your favorite place.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
            <div className="crd">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    How much will it cost me to use talabat services?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>The only extra charges that might be applied are the restaurant’s delivery fees.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Do you have Debit Card/Credit Card services?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        Yes :MasterCard and Visa.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    Can I place an order without creating an account?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>No unfourtunately you can't</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    How do I place an order on FoodAway?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Go to FoodAway app, log in with your account, then place an order from your favorite restaurant.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    Can I make a payment online in a foreign currency?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>FoodAway currently only accepts Egyptian pounds.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    How do I pay for multiple orders?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>You can pay for multiple orders either by cash on delivery Or by Visa and Mastercard</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    Can I re-order a previous order?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body> Yes. In the app, you can simply go to the "My Orders" section and choose an order from your previous orders, and re-order it.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    How do I add an item as a favorite?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body>You can simply click on the icon ‘add as a favorite’ available on all menu items on restaurants. You can also easily go to my favorites section on My Account page re order these items.
      </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                    HHow can I view my order history?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                    <Card.Body>   Web
1- Open " www.otlob.com "
2- Click on "my account" button of top bar.
3- Click on " Activity " from the drop-down menu.
4- Choose " Recent Orders " from the lift side list.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    How do you calculate the delivery fee?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> All delivery fees posted on Otlob are provided by the restaurants and are not decided by Otlob. Otlob does not charge any additional delivery fees.
      </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
               
         </Accordion>


</div>
       </>
        )
    }

}