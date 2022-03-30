import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthEurope,
    faComments,
    faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-brands-svg-icons";

const Home = ( {user} ) => {
    
    return (
        <main className="home">
            <div className="home__page">
                <h1>Share your travel</h1>
                <div className="home__page--buttons">

                    {user ? <Link to="/search"><button>Search</button></Link> : <Link to="/login"><button>Search</button></Link>}

                    {user ? <Link to="/offer"><button>Post</button></Link> : <Link to="/login"><button>Post</button></Link>}

                </div>
            </div>

            <div className="home__intro">
                <div className="home__intro--card">
                    <FontAwesomeIcon className="icon" icon={faEarthEurope} />
                    <h3>Search</h3>
                    <p>
                        Would you like to bring a shipment from abroad or a
                        package? Do you need something you cannot send in
                        regular transport? Did you forget something? Here you
                        can find service you need.
                    </p>
                </div>

                <div className="home__intro--card">
                    <FontAwesomeIcon className="icon" icon={faComments} />
                    <h3>Chat</h3>
                    <p>
                        You choose the carrier according to the price and his
                        evaluation. You can communicate with the carrier right
                        here in the application.
                    </p>
                </div>

                <div className="home__intro--card">
                    <FontAwesomeIcon
                        className="icon"
                        icon={faSuitcaseRolling}
                    />
                    <h3>Offer</h3>
                    <p>
                        It does not where you travel... Do you have some extra
                        space in your baggage? Would you like to make some money
                        or just do a good deed? You can offer only spce in your
                        pocket, the volume does not matter. Either you can look
                        for people who would like to bring something from your
                        place or you can post an advertisement.
                    </p>
                </div>
            </div>

            <div className="home__contact">
                <div>
                    <h3>Contact</h3>
                    <p>Perlová 5, Prague</p>
                    <p>The Czech Republic</p>
                    <p>trashare.official@gmail.com</p>
                    <p>sk +421907654667</p>
                    <p>cz +420603515908</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163931.25643245614!2d14.325541189762351!3d50.059585359626084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraha!5e0!3m2!1ssk!2scz!4v1648479241224!5m2!1ssk!2scz"
                    width="500em"
                    height="350em"
                    loading="lazy"
                ></iframe>
            </div>

            <div className="home__about">
                <img src="images/empty.png" alt="empty" />
                <div>
                    <h3>About Us</h3>
                    <p>
                        Hello, we are two junior developers who like to travel
                        and therefore we decided to build Trashare as a final
                        project in Cooding Bootcamp in Prague.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Home;
