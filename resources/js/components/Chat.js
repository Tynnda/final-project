import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        <>
            <div>
                {messages.map((item, i) => (
                    <p key={i}>
                        {item.user_id} - {item.text} - {item.created_at}
                    </p>
                ))}
            </div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    name="text"
                    rows="20"
                    value={values.text}
                    placeholder="your message..."
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default Chat;
