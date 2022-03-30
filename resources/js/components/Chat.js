import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


//CSS + Logo + Font Awesome Icons
import "/css/chat.css";
import Logo from '/images/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser ,faFaceSmile, faCirclePlus, faImage, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import { } from "@fortawesome/free-brands-svg-icons";

const Chat = () => {
    const params = useParams();
    const offerId = parseInt(params.offer_id);

    const [values, setValues] = useState({
        text: "",
    });

    const [messages, setMessages] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`/api/messages?offer_id=${offerId}`);
        setMessages(response.data);
    };
    function refreshPage() {
        window.location.reload(false);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const axios_response = await axios.post("/api/saveMessage", {
            offer_id: offerId,
            text: values.text,
        });
        console.log(axios_response);
        refreshPage();
        //
        // await getMessage();
    };

    useEffect(() => {
        fetchData();
    }, [params.offer_id]);

    useEffect(() => {
        setValues({ ...values, offer_id: params.offer_id });
    }, [params.offer_id]);

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    console.log(messages);
    return (
        <main className="chat">
            <div className="chat__header">
                <img src={Logo}/>
                <h2>trashare</h2>
            </div>
            <div className="chat__conversation">
                {messages.map((item, i) => (
                    <div className="chat__conversation--message" key={i}>
                        <div className="user">
                            <FontAwesomeIcon className="icon" icon={faCircleUser} />
                            <p>{item.user.first_name}</p>
                        </div>
                        <p className="text">{item.text}</p>
                        <p className="date">{item.created_at}</p>
                    </div>
                ))}
            </div>
            <form className="chat__form" action="" method="post" onSubmit={handleSubmit}>
                <FontAwesomeIcon className="icon" icon={faCirclePlus} />
                <FontAwesomeIcon className="icon" icon={faImage} />
                <FontAwesomeIcon className="icon" icon={faFaceSmile} />
                <FontAwesomeIcon className="icon" icon={faThumbsUp} />
                <input
                    type="text"
                    name="text"
                    
                    value={values.text}
                    placeholder="your message..."
                    onChange={handleChange}
                />
                <button>Send</button>
                
            </form>
        </main>
    );
};

export default Chat;
