import React from 'react';
import'./FAQ.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export default class Terms extends React.Component{
    render(){
        return(

           <>
<div className="card card-body bg-transparent staticcard" id="con1">
    <h2  class="staticheader" id="Card-header"> Terms and Conditions</h2>
    <hr/>
        <Accordion defaultActiveKey="0">
            <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Refund Policy
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        Otlob takes customer satisfaction very seriously. 
                        In the case of problems with your food order, please contact Otlob through our live chat or call us on our hotline number and we will assist you. In appropriate cases, if you have already been billed by Otlob, Otlob will issue full or partial refunds. In the following cases: if you did not receive your order or received an incorrect order, you may be issued a full refund; if part of your order is missing, we may issue a partial refund. In every event, we will do our best to ensure your satisfaction.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
            <div className="crd">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Ratification of the Agreement
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        To be a member of the website of Otlob, first of all it is required that you fill in the registration form and then agree and undertake to comply with the provisions of the user agreement for Otlob. By filling in and ratifying the registration form or getting any services or ordering a meal using this system, the user agrees to be bound by the user agreement of Otlob. * You are responsible for making all arrangements necessary for you to have access to the website.
                         You are also responsible for ensuring that all persons who access the website through your Internet connection are aware of these website terms and that they comply with them. 
                     </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Description of the Services
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        FoodAway allows its members who ratify the agreement to order from restaurants online. Otlob provides a way for you to communicate your orders to delivery restaurants displayed on this website. The purpose of this site is to provide a simple and convenient service to consumers, linking them to restaurants in their area that offer takeaway food. Interactive menus allow customers to build and submit orders at the click of a button. We have created the website to serve as a food court online market. Otlob is a commercial service for food delivery online. Otlob does not sell or interfere in any way in the production of any food produced at the restaurants. But what this online market offers to the users is only providing the ability to search for and find local restaurants that deliver or make food available to their addresses and enables ordering this food through this website. The restaurants are obligated to comply with country local laws, rules, regulations, and standards pertaining to food preparation, sale, marketing and safety. However, it is important for users to understand that Otlob does not in any way independently verify the credentials, representations or products of restaurants, the ingredients or the quality of any products, or that a restaurant is in compliance with applicable laws. Buyers must make themselves comfortable through information provided by restaurants on the website or as requested by buyers directly from the restaurants as to the quality and reliability of the restaurants, as well as to their compliance with applicable laws. Otlob does not in any way guaranty the quality of any food or that any food complies with applicable laws and does not guarantee matching the menu displayed on the site of what is actually provided to the users. In addition, a restaurant may represent that food preparation is in accordance with special standards such as "organic," "macrobiotic" or allergen-specific standards such as "nut-free", "gluten-free", or "lactose-free". However, Otlob does not independently investigate or verify such representations. Otlob shall not be liable or responsible for any food or services offered by restaurants that is unhealthy, is the cause of injury, that is otherwise unacceptable to buyers or that does not meet the expectation of buyers in any manner. Buyers are solely responsible for verifying the accuracy of delivery addresses, and Otlob shall have no liability or responsibility for any such erroneous addresses. All food preparation and deliveries are the sole responsibility of the restaurant accepting the order.
                         Please be aware that the restaurant will do everything they can to meet the delivery time specified, however delivery times may be affected by factors beyond their control and therefore cannot be guaranteed. We will inform you if we become aware of an unexpected delay.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    How to make an order and how it is processed
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        Once you have selected your order from the menu of your chosen Delivery Restaurant you will be given the opportunity to submit your order by clicking on “Checkout” button. Please note it is important that you check the information that you enter and correct any errors before clicking on the “Checkout” button since once you click on this input errors cannot be corrected. On receipt of your order, Otlob will begin processing your order and we will send a message on the final page that your order has been received and sent successfully to the restaurant.
                         Where any payment you make is not authorized you will be returned to the previous page on the website and we shall not be obliged to provide the services.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    Order Cancellation
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            You have the right to cancel an order up to 5 minutes from placing the order on our website. While every effort is made to ensure that accurate pricing and descriptions are maintained, we reserve the right to cancel any order that is based on inaccurate information. An order may be subsequently cancelled by a restaurant after you have received a confirmation that it has been sent to the restaurant. Otlob and our partner restaurants reserve the right to cancel any order, before or after acceptance, and will notify you immediately of any such cancellation. 
                            “Your history will only hold your successful orders, and in case of failed online payment, the refunded amount will be returned to your respectable account within 7-14 days, according to your bank.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    Membership system for Otlob
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                           <Card.Body>
                             Any member of Otlob has a “user name” and “password” which are determined by the member herself/himself. The "user name" is personal to the member and the same “user name” is not given to two different members. The “password” is only known by the user. The user can change the password at any time. It is solely under the responsibility of the user to select and protect the password. Otlob is not liable for any problems, which may arise from the use of password. Otlob informs the user about the promotions, which take place in the user’s area and from which the user may benefit, by emails. Otlob does not share the user information with the third party companies – the phone number may be shared with the restaurant which deals with take-out foods, in order to provide a faster and correct delivery. For the user to connect to the services, which require a membership of Otlob, the user must enter the user name and password. This process is called “login” to Otlob. By using this site, you warrant that any personal information provided by you is true, accurate, current and complete in all respects and that you will notify us immediately of any changes to your personal information by updating your member profile on the site or by contacting us, you agree not to impersonate any other person or entity or to use a false name or a name that you are not authorized to use. You are not allowed to register multiple memberships for use by the same person. Violation of this clause may result in termination of your membership. Members' passwords should be kept confidential at all times, and must not be shared or disclosed to anyone. You are responsible for all activities and orders that occur or are submitted through your membership. If you know or suspect that someone has knowledge of your password then you should contact us immediately. You may not use the site for any unlawful or unauthorized purpose, including without limitation to: distributing any unlawful, libelous, abusive, threatening, harmful, obscene or otherwise objectionable material transmitting material that constitutes a criminal offense, results in civil liability or otherwise breaches any laws, regulations or codes of practice. Interfering with any other persons use or enjoyment of the site. Damaging, disabling or impairing the operation of this site or attempting to gain unauthorized access to this site or to networks connected to it, through hacking, spoofing or other such similar means.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    Responsibilities of the Member
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                          <Card.Body>
                                During the use of the services of Otlob, the member accepts and undertakes: The information in the registration form is correct; in the conditions that this information is required the member is the only responsible for any losses which may arise from any misinformation or inadequate information (ex. forgetting the password); and in these cases his/her
                                membership may be terminated. The member is the sole responsible for all personal ideas, opinions, statements set forth by the member while using the services of Otlob, all the files uploaded to Otlob and the personal information sent, and that in no way Otlob shall be held liable for these files, not to access any services provided in Otlob unauthorized and in any way other that the one identified by Otlob; not to change the software in any way;
                                not to use the software which is identified as being changed; and 
                                to indemnify Otlob for all material and moral losses in the event the member does not comply with the aforementioned articles, Otlob shall not be responsible for any damages which may arise from reading of data belonging to any members by any unauthorized people, not to send any messages which are threatening, immoral, racially and contrary to the Laws of Egypt and international agreements, any correspondences, titles, nicknames posted to the context shall not be contrary to the rules of public morality, good manners and laws, not to harass and/or threaten other users, or any of Otlob live chat personnel, not to act in a way affecting the use of services by other users, not to post, print, distribute, circulate any amoral, inappropriate and unlawful materials and information which may give harm to the names of any people or institutions, not to advertise, sell or offer to sell any products or services, engage in any activities such as survey, competition or chain letter, not to send any information or programs which may give harm to the information or software in the computers of other users
                          </Card.Body>
                    </Accordion.Collapse>
                </Card>

                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    Visitor material and conduct
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body> 
                    Other than personally identifiable information, which is covered under the Otlob Privacy Policy, any material you transmit or post to this website will be considered non-confidential and non-proprietary. Otlob will have no obligations with respect to such material. Otlob and anyone we designate will be free to copy, disclose, distribute, incorporate and otherwise use that material and all data, images, sounds, text and other things embodied in it for any and all commercial or non-commercial purposes.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    Prohibited Activities
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body> 
                           You may not access or use the website for any other purpose other than that for which Otlob makes it available. The website is for the personal use of users only and may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by Otlob. In case of any prohibited activities committed by the user, the company has the right to suspend, block or terminate the user's membership and prevent his access to log in the service. Prohibited activities include but not limited to the following: criminal or tortuous activity, including child pornography, fraud, trafficking in obscene material, drug dealing, gambling, harassment, stalking, spamming, copyright infringement, patent infringement, or theft of trade secrets; advertising to, or solicitation of, any user to buy or sell any products or services, unless authorized by Otlob; systematic retrieval of data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database or directory without written permission from Otlob; making any unauthorized use of the Otlob services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email; engaging in unauthorized framing of or linking to the website; transmitting chain letters or junk email to other users; using any information obtained from the website in order to contact, advertise to, solicit, or sell to any user without their prior explicit consent; engaging in any automated use of the system, such as using scripts to add friends or send comments or messages, or using any data mining, robots or similar data gathering and extraction tools
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                    Authority of Foodaway
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                    <Card.Body>
                    Foodaway may temporary suspend or completely cease the system operation at any time. Otlob shall not have any responsibilities against the members of Otlob or any third parties due to the temporarily suspension or completely cessation of the system operation. The user name and password shall be displayed and approved after the filling of the application parts to be submitted to the clients by Otlob. Otlob may prevent its clients who have filled in all parts or have connected although they have passwords from having a new password or from using their passwords for an indefinite period of time if it is deemed necessary by Otlob. Otlob does not warrant that its services shall be provided on time in a secure and complete way, the results obtained from the services shall be correct and reliable, and that the service quality shall meet the expectations. Otlob has the right to back-up and delete all or some of the files, messages which are provided by the members during the use of services for some periods deemed suitable by Otlob. Otlob shall not be held responsible for back-up and delete processes. Otlob has the ownership and copyrights arising from the ownership of the information, documents, software, designs, graphics and etc. which are produced by itself and/or bought from outside. The sales of Otlob are limited to the current availability of menus of the firms provided in Otlob. Otlob is not responsible for any item ordered and not delivered by the restaurant due to unavailability
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Guidelines for Reviews
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    Reviews are approved based on the following criteria: RELEVANCY Reviewers must have had an experience with the restaurant firsthand. ACCEPTABLE CONTENT Otlob are not obligated to approve reviews on the site. A subset of the potential reasons for rejection are: Offensive Language: Profanity, abusive, racist, and hate language is not tolerated in our interactive sections. Irrelevant or non indicative content Discrimination based on the grounds of religion, race, gender, national origin, age, marital status or disability. References to illegal activity or uncorrelated references towards society’s traditions and values. Conflicts of interest: Competing restaurants are not allowed to post negative reviews. Violation of this might result in permanent removal from our website. Allegations of health code violations. Outdated and obsolete information NOT ENDORSED Reviews are not endorsed by Otlob, and do not represent the views of Otlob, our parent companies, our subsidiaries. Otlob does not assume liability for any review or for any claims, liabilities or losses resulting from any use of our sites, or information on our site. OWNED BY Otlob Reviews are owned by Otlob exclusively in perpetuity. We have the right to reproduce, modify, translate, transmit, and/or distribute all materials relating to reviews. Otlob is under no obligation to pay the author or anyone else for their reviews.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Termination of agreement
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    
                    FoodAway may terminate this agreement unilaterally at any time.

                     </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Restrictions for Non-Personal and Non-Commercial Use
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    You agree that the consequences of commercial use or re-publication of content or information of Otlob may lead to serious and incalculable monetary compensation that may not be a sufficient or appropriate remedy and that Otlob will be entitled to temporary and permanent injunctive relief to prohibit such use.
                     </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Product Delivery
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    During any product delivery made by restaurants, if the client is not available in the address specified in the system, the meals ordered by the client shall not deliver to anywhere else. Within the framework of such a case, the member must accept all legal responsibilities arising from ordering a meal to an address where he/she does not exist.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    Product Return
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    In relation to any product returns, the terms of product return belonging to the restaurants are applied. Otlob does not undertake any responsibilities for the disputes, which may arise from terms of product return belonging to the restaurants.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
                <div className="crd">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    License
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body> 
                    Otlob grants you permission (which may be revoked at any time for any reason or no reason) to view the site and to download, email, share via social networking or print individual pages from the site in accordance with these Terms of Use and solely for your own personal, non-commercial use, provided you do not remove any trademark, copyright or other notice contained on such pages. No other use is permitted. *You may not, for example, incorporate the information, content, or other material in any database, compilation, archive or cache. You may not modify, copy, distribute, re-publish, transmit, display, perform, reproduce, publish, reuse, resell, license, create derivative works from, transfer, or sell any information, content, material, software, products or services obtained from the site, except as specifically noted above. Except as specifically authorized by Otlob, you may not deep-link to the site for any purpose or access the site manually or with any robot, spider, web crawler, extraction software, automated process or device to scrape, copy, or monitor any portion of the site or any information, content, or material on the site. Otlob reserves all of its statutory and common law rights against any person or entity who violates this paragraph. You may not link or frame to any pages of the site or any content contained therein, whether in whole or in part, without prior written consent from Otlob. You may become a "fan" of the site or share links to the site via social networking technology reference on the site. Any rights not expressly granted herein are reserved.
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