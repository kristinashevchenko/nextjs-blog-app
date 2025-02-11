import { useEffect, useRef, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState();
  const [requestError, setRequestError] = useState();

  async function sendMessageHandler(event) {
    event.preventDefault();

    const newMessage = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };

    setStatus("pending");
    try {
      await sendContactData(newMessage);
      setStatus("success");
      emailRef.current.value = "";
      nameRef.current.value = "";
      messageRef.current.value = "";
    } catch (err) {
      setRequestError(err.message);
      setStatus("error");
    }
  }

  useEffect(() => {
    if (status == "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  let notification;

  if (status == "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: 'Your message is on it"s way',
    };
  } else if (status === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  } else if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea rows="5" id="message" ref={messageRef} />
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification ? (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      ) : null}
    </section>
  );
}

export default ContactForm;
