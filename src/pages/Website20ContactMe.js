import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spline from '@splinetool/react-spline';
import emailjs from 'emailjs-com';


const Website20ContactMe = () => {

  const [command, setCommand] = useState('');

  const handleCommandInput = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandSubmit(e);
    }
  };

  const [emailStatus, setEmailStatus] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

    // Determine background color based on the status
    const bgColor = status === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start top-6">
        <div className={`${bgColor} p-4 rounded-xl`} style={{ minWidth: '250px' }}>
          <p className="text-white text-center">{message}</p>
        </div>
      </div>
    );
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();

    if (command.toLowerCase() === 'send_email') {
      emailjs.send('service_56vt41g', 'template_z693f7s', { from_name: name, message, reply_to: email, subject: Subject }, 'lfyNdQZQNcv621_08')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setModalMessage('Thank you for your message!');
          setEmailStatus('success');
          setIsModalVisible(true);

          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setInput('');
          setStage('name');
          setCommand('');
        }, (err) => {
          console.log('FAILED...', err);
          setModalMessage('Failed to send the message. Please try again.');
          setEmailStatus('error');
          setIsModalVisible(true);
        });
    } else {
      alert('Command not recognized! Please type "send_email" to send your message.');
    }
  };


  // form 
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [stage, setStage] = useState('name');

  const handleInputChange = (e) => {
    setInput(e.target.value);

    if (stage === 'message') {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        setMessage(e.target.value);
        setShowCommandPrompt(true);
      }
    }
  };

  const [showCommandPrompt, setShowCommandPrompt] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (stage) {
      case 'name':
        setName(input);
        setStage('email');
        setInput('');
        break;
      case 'email':
        setEmail(input);
        setStage('Subject');
        setInput('');
        break;
      case 'Subject':
        setSubject(input);
        setStage('message');
        setInput('');
        break;
      case 'message':
        setMessage(input);
        setShowCommandPrompt(true);
        setInput('');
        break;
    }
  };

  const renderCommandInput = () => (
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
    )
  );

  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white text-[20px] font-mono">
      <main
        className="absolute top-1/2 left-1/2 bg-gray box-border w-full h-full overflow-hidden text-left text-50xl text-white border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          width: 'calc(100% - 5rem)',
          height: 'calc(100% - 5rem)'
        }}
        id="Contact-page"
      >
        <Modal isOpen={isModalVisible} message={modalMessage} status={emailStatus} onClose={() => setIsModalVisible(false)} />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 font-rhapsody">
          <h2 className="text-white text-51xl font-bold p-4 ">Contact Me</h2>
        </div>

        <Spline scene="https://prod.spline.design/4JtsRGNUvM01JPnp/scene.splinecode" />

        <div className="absolute mb-5 top-[30%] left-[55%]  font-mono text-green-400 bg-black bg-opacity-50 p-4 rounded-md glass-effect">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <span>{`$ Enter your ${stage}:`}</span>
            {stage === 'name' && <span className="text-white mt-2">{'// Type your name and press Enter'}</span>}
            {stage === 'email' && <span className="text-white mt-2">{'// Type your email and hit Enter'}</span>}
            {stage === 'Subject' && <span className="text-white mt-2">{'// Type email subject and hit Enter'}</span>}
            {stage === 'message' && <span className="text-white mt-2">{'// Type your message and hit Enter'}</span>}

            {stage === 'message' ? (
              <textarea
                value={input}
                onKeyDown={handleInputChange}
                onChange={e => setInput(e.target.value)}
                className="mt-2 p-2 bg-transparent text-white border-b-2 border-green-400 focus:outline-none whitespace-pre-wrap"
                autoFocus
                style={{ resize: 'none' }}
              />
            ) : (
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="mt-2 p-2 bg-transparent text-white border-b-2 border-green-400 focus:outline-none"
                autoFocus
              />

            )}


          </form>
          {renderCommandInput()}

          <div className="text-green-200 mt-4">
            {name && <p>Name: {name}</p>}
            {email && <p>Email: {email}</p>}
            {Subject && <p>Subject: {Subject}</p>}
            {message && <p >Message: {message}</p>}
          </div>
        </div>
        <h3
          className="m-0 absolute top-[30%] left-[10%] text-[20px] font-mono text-green-400 bg-black bg-opacity-50 p-4 rounded-md whitespace-pre-wrap inline-block  glass-effect animate-fadeIn"
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
