import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spline from "@splinetool/react-spline";
import emailjs from "emailjs-com";
import Socials from "../components/Socials";
import FloatingNav from "../components/FloatingNav";

const Website20Contact = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "website20-about" },
    { name: "Projects", link: "/website20-projects" },
    { name: "Contact", link: "website20-contact" },
  ];

  const [command, setCommand] = useState("");

  const handleCommandInput = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommandSubmit(e);
    }
  };

  const [emailStatus, setEmailStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const Modal = ({ isOpen, message, onClose, status }) => {
    useEffect(() => {
      let timer;
      if (isOpen) {
        timer = setTimeout(() => {
          onClose();
        }, 3000);
      }

      return () => clearTimeout(timer);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const bgColor = status === "success" ? "bg-green-500" : "bg-red-500";

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start top-6">
        <div
          className={`${bgColor} p-4 rounded-xl`}
          style={{ minWidth: "250px" }}
        >
          <p className="text-white text-center">{message}</p>
        </div>
      </div>
    );
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();

    switch (command.toLowerCase()) {
      case "send_email":
        emailjs
          .send(
            "service_56vt41g",
            "template_z693f7s",
            { from_name: name, message, reply_to: email, subject: subject },
            "lfyNdQZQNcv621_08"
          )
          .then(
            (response) => {
              setModalMessage("Message compiled successfully!");
              setEmailStatus("success");
              setIsModalVisible(true);
              resetForm();
            },
            (err) => {
              setModalMessage(
                "Your message didn’t compile. Let’s give it another shot"
              );
              setEmailStatus("error");
              setIsModalVisible(true);
            }
          );
        break;
      case "edit_name":
        setStage("name");
        setInput(name);
        break;
      case "edit_email":
        setStage("email");
        setInput(email);
        break;
      case "edit_subject":
        setStage("subject");
        setInput(subject);
        break;
      case "edit_message":
        setStage("message");
        setInput(message);
        break;
      default:
        alert(
          'Command not recognized! Use "send_email" to send your message or "edit_name", "edit_email", etc., to modify fields.'
        );
        break;
    }
  };

  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [stage, setStage] = useState("name");
  const [showCommandPrompt, setShowCommandPrompt] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (stage) {
      case "name":
        setName(input);
        setStage("email");
        setInput("");
        break;
      case "email":
        setEmail(input);
        setStage("subject");
        setInput("");
        break;
      case "subject":
        setSubject(input);
        setStage("message");
        setInput("");
        break;
      case "message":
        setMessage(input);
        setShowCommandPrompt(true);
        setInput("");
        break;
    }
  };

  const renderCommandInput = () =>
    showCommandPrompt && (
      <div className="mt-4">
        <input
          type="text"
          value={command}
          onChange={handleCommandInput}
          onKeyDown={handleCommandKeyDown}
          className="p-2 bg-transparent text-white border-b-2 border-green-400 focus:outline-none"
          placeholder="Type 'send_email' to send your message"
          autoFocus
        />
      </div>
    );

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setInput("");
    setStage("name");
    setCommand("");
  };

  return (
    <main className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white text-[20px] font-mono">
      <Modal
        isOpen={isModalVisible}
        message={modalMessage}
        status={emailStatus}
        onClose={() => setIsModalVisible(false)}
      />
      <div className="absolute flex flex-row p-5 top-0 left-1/2 transform -translate-x-1/2 font-rhapsody">
        <FloatingNav navItems={navItems} />
        <h2 className="text-white text-51xl font-bold p-5 ">Contact Me</h2>
      </div>

      <Spline scene="https://prod.spline.design/4JtsRGNUvM01JPnp/scene.splinecode" />

      <div className="absolute mb-5 top-[30%] left-[55%]  font-mono text-green-400 max-w-[600px] bg-black bg-opacity-50 p-4 rounded-md glass-effect">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <span>{`$ Enter your ${stage}:`}</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="mt-2 p-2 bg-transparent text-white border-b-2 border-green-400 focus:outline-none"
            autoFocus
          />
        </form>

        {renderCommandInput()}

        <div className="text-green-200 mt-4">
          {name && <p>Name: {name}</p>}
          {email && <p>Email: {email}</p>}
          {subject && <p>Subject: {subject}</p>}
          {message && <p>Message: {message}</p>}
        </div>
      </div>

      <h3
        className="m-0 absolute top-[30%] left-[10%] text-[20px] font-mono text-green-400 bg-black bg-opacity-50 p-4 rounded-md glass-effect animate-fadeIn"
        id="contact-code"
      >
        <p className="mb-4">
          {"$ "}
          <span className="text-white">Welcome to my portfolio terminal.</span>
        </p>
        <p className="mb-2">
          {"$ "}
          <span className="text-white">Type a command:</span>
        </p>
        <p className="mb-2">
          {"$ "}
          <span className="text-[#569CD6]">send_email</span>
          <span className="text-white"> // to send an email</span>
        </p>
        <p className="mb-2">
          {"$ "}
          <span className="text-[#569CD6]">edit_name</span>
          <span className="text-white"> // to edit name</span>
        </p>
        <p className="mb-2">
          {"$ "}
          <span className="text-[#569CD6]">edit_email</span>
          <span className="text-white"> // to edit email</span>
        </p>
        <p className="mb-2">
          {"$ "}
          <span className="text-[#569CD6]">edit_subject</span>
          <span className="text-white"> // to edit subject</span>
        </p>
        <p className="mb-2">
          {"$ "}
          <span className="text-[#569CD6]">edit_message</span>
          <span className="text-white"> // to edit message</span>
        </p>

        <form onSubmit={handleCommandSubmit} className="mt-4">
          <div className="flex items-center">
            <span className="text-green-400">$</span>
            <input
              type="text"
              value={command}
              onChange={handleCommandInput}
              className="flex-1 ml-2 p-2 bg-black bg-opacity-75 text-white border-b-2 border-green-400 focus:outline-none"
              placeholder="Your command"
            />
          </div>
        </form>
      </h3>

      <div className="absolute bottom-[20%] left-[15%]">
        <Socials />
      </div>
    </main>
  );
};

export default Website20Contact;
