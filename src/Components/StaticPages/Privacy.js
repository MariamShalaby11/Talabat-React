import React from 'react';
import'./FAQ.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export default class Privacy extends React.Component{
    render(){
        return(

           <>
<div className="card card-body bg-transparent staticcard" id="con1">
    <h2 class="staticheader" id="Card-header"> Privacy</h2>
    <hr/>
        <Accordion defaultActiveKey="0">
            <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Personal Contact Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        FoodAway may collect the following information from users of our site: first name, last name, street address, area and city, phone and contact numbers, e-mail address, GPS location (mobile site) (collectively, "Personally Identifiable Information" or "PII").

In addition, Otlob may collect information regarding Otlob account holders' past Otlob orders, favorite restaurants, customer service inquiries, service/restaurant reviews and certain social networking preferences (e.g. pages you "Like" or "Recommend").

Otlob also uses web analytics software to track and analyze traffic on the site in connection with Otlob advertising and promotion of Otlob services. Otlob may publish these statistics or share them with third parties without including PII.

Non-Personally Identifiable Information (or "Non-PII") is aggregated information, demographic information and any other information that does not reveal your specific identity. We and our third party service providers may collect Non-PII from you, including your MAC address, your computer type, screen resolution, OS version, Internet browser and demographic data, for example your location, gender and date of birth and we may aggregate PII in a manner such that the end-product does not personally identify you or any other user of the Site, for example, by using PII to calculate the percentage of our users who have a particular telephone area code. We and our third party service providers may also use cookies, pixel tags, web beacons, and other similar technologies to better serve you with more tailored information and facilitate your ongoing use of our Site. If you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to decline the use of cookies. To learn more about cookies, please visit http://www.allaboutcookies.org/.

IP Addresses are the Internet Protocol addresses of the computers that you are using. Your IP Address is automatically assigned to the computer that you are using by your Internet Service Provider (ISP). This number is identified and logged automatically in our server log files whenever users visit the Site, along with the time(s) of such visit(s) and the page(s) that were visited. Collecting IP Addresses is standard practice on the Internet and is done automatically by many websites.
      </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
            <div className="crd">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Use of your information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>FoodAway uses PII to create users' Otlob accounts, to communicate with users about Otlob services, to offer users additional services, promotions and special offers and to charge for purchases made through Otlob. Users may affirmatively opt-out of receiving promotional communications from Otlob by visiting www.Otlob.com. Personal account page and providing Otlob with their e-mail address via the opt-out link. Otlob may also use PII to enforce Otlob terms of use and service.

Otlob uses cookies to remember users on the site and to enhance users' experience on the site. For example, when users with Otlob accounts return to the site, cookies identify those users and allow the site to provide certain user-specific information such as Otlob login information, choice of website language and country selection in addition to any other information we might collect in the future. Otlob does not sell the information it collects to third parties. Otlob shares collected PII to third-party vendors and service providers with whom Otlob works to provide application programming interfaces ("APIs") and other functions for the site in connection with the delivery of Otlob services. In addition, Otlob shares users' Otlob order content, special order instructions, first and last name, street address and telephone number with restaurants where users' orders are placed to the extent necessary to process those orders. Otlob may also disclose PII to third parties such as attorneys, collection agencies, tribunals or law enforcement authorities pursuant to valid requests in connection with alleged violations of Otlob terms of use and service or other alleged contract violations, infringement or similar harm to persons or property.

User generated content posted through the site such as service/restaurant reviews and certain social networking preferences (e.g. pages you "Like" or "Recommend") may be viewed by the general public. Accordingly, Otlob cannot ensure the privacy of any PII included in such user generated content.

Non-Personally Identifiable Information. Because Non-PII does not personally identify you, we may use such information for any purpose. In addition, we reserve the right to share such Non PII, which does not personally identify you, with our affiliates and with other third parties, for any purpose. In some instances, we may combine Non-PII with PII (such as combining your name with your geographical location). If we do combine any Non-PII with PII, the combined information will be treated by us as PII hereunder as long as it is so combined.

IP Addresses. We use IP addresses for purposes such as calculating site usage levels, helping diagnose server problems, and administering the site. We may also use and disclose IP Addresses for all the purposes for which we use and disclose PII. Please note that we treat IP Addresses, server log files and related information as Non-PII, except where we are required to do otherwise under applicable law.
     </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Your Email Address
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        To register for an account, we require you to supply us with your email address, or other information needed to contact you online and over the phone. We use your e-mail address and other contact information you provide us with to confirm your order and to communicate with you in case of an order problem, so one cannot register without an e-mail address. If you supply us with your email address, you may later access it, update it, modify it and delete any inaccuracies by accessing your account through my account information link on the user main page. You may also choose simply not to provide us with your email address; however you will not be able to register on the website and place orders. We communicate part of your contact information (name, surname, order delivery address and phone number) with the member restaurant from which you have placed an order. We also use this information to facilitate and improve your use of the website, to communicate with you, 
                        for internal purposes and to comply with any requirements of law. This information may be disclosed to our staff and to third parties involved in the delivery of your order or the analysis and support of your use of the website. We do not sell and will not divulge your personal contact information to third parties other than as specified in this Privacy Policy without your permission unless we are legally entitled or obliged to do so (for example, if required to do so by Court order or for the purposes of prevention of fraud or other crime).
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    ATM, Credit Cards and Payment Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>When you place an order through the website, you are required to select a method of payment. FoodAway is not interested in your debit/credit card information nor do store any of your debit/credit information, since orders could be paid at the door directly to the restaurant through methods of payment such as cash, credit card or payment checks. Online debit/ credit card payment is also an option and for some restaurants it can be the only method of payment. For transactions with online debit/credit cards, we transmit your entire card information to the appropriate debit/credit card company in an encrypted format with globally accepted rules and applications during order processing. Upon your choice, we keep a part of your card information in an encrypted format, taking precaution to maintain physical, electronic and procedural safeguards over your credit card information.
</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    Order Placement Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        Personal information required during the order process includes name, address, phone number, email address and other similar information used to identify you and complete an order. Personal information collected at our site will be shared with a restaurant when processing your order. We have an agreement with all member restaurants, restricting disclosure or further processing of personal information provided to them by us. Your personal information will be used to notify you of your order status. Personal information will not be shared with any of our business partners or affiliates without your permission. It is treated as confidential, and will not be disclosed to outside parties, unless compelled by applicable legislation. 
                        We only send marketing emails to those people who have specifically requested to receive this information.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    Navigation and Click stream Data
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                        As you browse our website, we gather navigational and click stream data that shows which pages you have websited, what kind of features you have used or how long you have stayed on a particular page etc.
                        This information will not reveal your identity or be linked to you personally. We use this information to complete, support and analyze your purchases from us; to facilitate and improve your use of the website; to comply with any requirements of law; to serve, 
                        or have a third party serve specialized or relevant advertising content and/or recommendations to you on the website or on a third party’s website and for internal purposes. This information may be disclosed only to our staff and to third parties involved in the completion of your transaction, the delivery of your order, and the analysis and support of your use of the website.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    We May Use Advertising Companies to Serve Ads For Us
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            These companies may employ cookies and action tags to measure advertising effectiveness. They may also use this technology to serve specialized or relevant advertising content and/or recommendations to you on the website or on their websites.
                            Any information that these third parties collect via cookies and action tags is completely anonymous and does not contain any personal contact information
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    Do We Disclose Your Personal Information?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body> 
                     We may disclose your information to our staff and to third parties involved in the delivery of your order, and the analysis and support of your use of the website. We may disclose your information if necessary to protect our legal rights, if the information relates to actual or threatened harmful conduct, or we have good faith belief that such action is necessary to (1) conform to the requirements of law or comply with governmental orders, court orders, or legal process served on us or (2) to protect and defend our property or other rights, the users of the website or the public. This includes exchanging information with other companies and organizations for fraud protection and credit risk protection.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    Cookies
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body> 
                        When you visit our site, our server sends your computer a "cookie." This cookie is a small packet of information that identifies you as a user of our system. Cookies save you time by retaining your contact information. Cookies do not deliver viruses, and can only be read by the server that sent you the cookie. You have the ability to accept or decline cookies by modifying the settings in your browser. Please bear in mind however, that you may not be able to use all the features of our site if cookies are disabled.
                     </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                    Protection of Your Personal Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                    <Card.Body>
                        Our website has secure pages to collect user information and most critical data is stored in encrypted form. We use various technical and management practices to help protect the confidentiality, security and integrity of data stored on our system. Our servers use Secure Sockets Layer (SSL)
                         and encryption technology that works with Netscape Navigator, Microsoft Internet Explorer, Firefox, Safari and Chrome.
                         </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Security
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                        We use reasonable organizational, technical and administrative measures to protect PII under our control. Unfortunately, no data transmission over the Internet or data storage system can be guaranteed to be 100% secure. Please do not send us sensitive information through email. 
                        If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of any account you might have with us has been compromised), you must immediately notify us of the problem by contacting us in accordance with the "Contacting Us" section below (note that if you choose to notify us via physical mail, this will delay the time it takes for us to respond to the problem).
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Contact
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    All comments, queries and requests relating to our use of your information are welcomed and should be addressed to Delivery Hero Egypt SAE

For questions or concerns relating to our privacy policy, we can be contacted by email at customercare@Otlob.com
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Verifying, updating and amending personal information Otlob
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    Members:

You can update your personal information at any time by logging-in to your membership account and accessing "My Account", where you can update your personal information mentioned in "Account Info" and "Saved Address".


Guests:

Users who order as guests cannot view or change their details on the website once an order has been submitted. Any changes which affect the fulfillment of an order should be communicated directly to the applicable restaurant.
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