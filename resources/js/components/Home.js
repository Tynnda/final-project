import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Home = () => {
    return (
        <>
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
            <div className="articles-container">
                <div className="article">
                    <img src="images/ticket.svg" alt="" />
                    <h3>text1</h3>
                    <p>
                        You have 90 minutes to complete the test, you can go
                        back and forth between the questions, thus if you are
                        stuck on one, we suggest you go to the next one and then
                        return. This is a multiple choice test, thus there can
                        always be one or more correct answers. To get a full
                        score for the question, you need to select all correct
                        answers.
                    </p>
                </div>
                <div className="article">
                    <img src="images/envelope.svg" alt="" />
                    <h3>text2</h3>
                    <p>
                        You have 90 minutes to complete the test, you can go
                        back and forth between the questions, thus if you are
                        stuck on one, we suggest you go to the next one and then
                        return. This is a multiple choice test, thus there can
                        always be one or more correct answers. To get a full
                        score for the question, you need to select all correct
                        answers.
                    </p>
                </div>
                <div className="article">
                    <img src="images/bubbles.svg" alt="" />
                    <h3>text3</h3>
                    <p>
                        You have 90 minutes to complete the test, you can go
                        back and forth between the questions, thus if you are
                        stuck on one, we suggest you go to the next one and then
                        return. This is a multiple choice test, thus there can
                        always be one or more correct answers. To get a full
                        score for the question, you need to select all correct
                        answers.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
