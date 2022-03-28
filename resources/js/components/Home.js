import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope, faComments, faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    return (
        <main className="home">

            <div className="main_page">
                <h1>Share your travel</h1>
                <div className="main_buttons">
                    <Link to="/search">
                        <button>search</button>
                    </Link>

                    <Link to="/offer">
                        <button>post</button>
                    </Link>
                </div>
            </div>

            <div className='home__intro'>
                <div className='home__intro--card'>
                    <FontAwesomeIcon className="icon" icon={faEarthEurope} />
                    <h3>Loroem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, tenetur asperiores deserunt reprehenderit quia laboriosam quae ullam iste iure pariatur et ad nobis recusandae eaque voluptatum repudiandae doloribus corporis iusto.</p>
                </div>

                <div className='home__intro--card'>
                    <FontAwesomeIcon className="icon" icon={faComments} />
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, tenetur asperiores deserunt reprehenderit quia laboriosam quae ullam iste iure pariatur et ad nobis recusandae eaque voluptatum repudiandae doloribus corporis iusto.</p>
                </div>
                
                <div className='home__intro--card'>
                    <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, tenetur asperiores deserunt reprehenderit quia laboriosam quae ullam iste iure pariatur et ad nobis recusandae eaque voluptatum repudiandae doloribus corporis iusto.</p>
                </div>
            </div>

            <div className='home__contact'>
                <div>
                    <h3>Contact</h3>
                    <p>street</p>
                    <p>country</p>
                    <p>email</p>
                    <p>number</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163931.25643245614!2d14.325541189762351!3d50.059585359626084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraha!5e0!3m2!1ssk!2scz!4v1648479241224!5m2!1ssk!2scz" width="600em" height="450em" loading="lazy"></iframe>
            </div>

            <div className='home__about'>
                <img src="images/empty.png" alt="empty"/>
                <div>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, tenetur asperiores deserunt reprehenderit quia laboriosam quae ullam iste iure pariatur et ad nobis recusandae eaque voluptatum repudiandae doloribus corporis iusto.</p> 
                </div>
            </div>

        </main>
    );
};

export default Home;
