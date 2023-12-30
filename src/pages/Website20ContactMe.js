import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spline from '@splinetool/react-spline';


const Website20ContactMe = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update form state on user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement your submission logic here (e.g., send data to an API or email service)
  //   console.log('Form submitted', formData);
  //   alert('Thank you for your message!');
  // };

  const [command, setCommand] = useState('');

  const handleCommandInput = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (command === 'send_email') {
      window.location.href = 'mailto:Kyrinkalonji@outlook.com';
    } else if (command === 'view_projects') {
      // Navigate to your projects page or perform some action
      console.log('Navigating to projects...');
    } else {
      alert('Command not recognized!');
    }
  };

  // form 
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [stage, setStage] = useState('name'); // tracks which data the form is currently accepting

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (stage === 'name') {
      setName(input);
      setStage('email');
      setInput('');
    } else if (stage === 'email') {
      setEmail(input);
      setStage('Subject');
      setInput('');
    } else if (stage === 'Subject') {
      setSubject(input);
      setStage('message');
      setInput('');
    } else if (stage === 'message') {
      setMessage(input);
      // Implement your submission logic here (e.g., send data to an API or email service)
      console.log('Form submitted', { name, email, Subject, message });
      alert('Thank you for your message!');
      // Reset everything
      setStage('name');
      setInput('');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white text-[20px] font-mono">
      <main
        className="absolute top-1/2 left-1/2 bg-gray box-border w-full h-full overflow-hidden text-left text-50xl text-white border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          width: 'calc(100% - 5rem)', // Subtracting the total margin (left + right)
          height: 'calc(100% - 5rem)' // Subtracting the total margin (top + bottom)
        }} // Centering the section
        id="Contact-page"
      >

        <Spline scene="https://prod.spline.design/4JtsRGNUvM01JPnp/scene.splinecode" />
        <div className="absolute mb-5 top-[30%] left-[60%] w-[390px] font-mono text-green-400 bg-black bg-opacity-50 p-4 rounded-md glass-effect">
          <form onSubmit={handleSubmit} className="flex flex-col whitespace-pre-wrap">
            <span>{`$ Enter your ${stage}:`}</span>
            {stage === 'name' && <span className="text-white mt-2">{'// Type your name and hit Enter'}</span>}
            {stage === 'email' && <span className="text-white mt-2">{'// Type your email and hit Enter'}</span>}
            {stage === 'Subject' && <span className="text-white mt-2">{'// Type email subject and hit Enter'}</span>}
            {stage === 'message' && <span className="text-white mt-2">{'// Type your message and hit Enter'}</span>}

            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="mt-2 p-2 bg-transparent text-white border-b-2 border-green-400 focus:outline-none"
              autoFocus
            />
          </form>
          <div className="text-green-200 mt-4">
            {name && <p>Name: {name}</p>}
            {email && <p>Email: {email}</p>}
            {Subject && <p>Subject: {Subject}</p>}
            {message && <p >Message: {message}</p>}
          </div>
        </div>
        <h3
          className="m-0 absolute top-[30%] left-[10%] text-[20px] font-mono text-green-400 bg-black bg-opacity-50 p-4 rounded-md whitespace-pre-wrap inline-block w-[480px] glass-effect animate-fadeIn"
          id="contact-code"
        >
          <p className="mb-4">{'$ '}<span className="text-white">Welcome to my portfolio terminal.</span></p>
          <p className="mb-2">{'$ '}<span className="text-white">Type a command:</span></p>
          <p className="mb-2">{'$ '}<span className="text-[#569CD6]">send_email</span><span className="text-white"> // to send an email</span></p>
          <p className="mb-2">{'$ '}<span className="text-[#569CD6]">view_projects</span><span className="text-white"> // to view projects</span></p>

          <form onSubmit={handleCommandSubmit} className="mt-4">
            <div className="flex items-center">
              <span className="text-green-400">$</span>
              <input
                type="text"
                value={command}
                onChange={handleCommandInput}
                className="flex-1 ml-2 p-2 bg-black bg-opacity-75 text-white border-b-2 border-green-400  focus:outline-none "
                placeholder="Your command"
              />
            </div>
          </form>
        </h3>
        <div
          className="absolute top-[538px] left-[204px] flex flex-row items-start justify-start gap-[40px]"
          id="socials"
        >
          <img
            className="relative w-[57.6px] h-[57.6px]"
            alt=""
            src="/git.svg"
          />
          <img
            className="relative w-[60px] h-[60px]"
            alt=""
            src="/-icon-linkedin.svg"
          />
        </div>
      </main>
      <h1
        className="absolute top-[773.1px] left-[10.3px] font-rhapsody text-md font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="contact-me-tag"
      >
        CONTACT ME
      </h1>
    </div>
  );
};

export default Website20ContactMe;
