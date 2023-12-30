import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// This function will calculate the positions of the nodes and return the style for the connections
function calculateConnection(nodeA, nodeB) {
  if (!nodeA || !nodeB) return { left: 0, top: 0, width: 0 };

  const rectA = nodeA.getBoundingClientRect();
  const rectB = nodeB.getBoundingClientRect();

  const left = rectA.right;
  const top = rectA.top + rectA.height / 2;
  const width = rectB.left - rectA.right;

  return { left, top, width };
}

const NeuralNode = React.forwardRef(({ label, to, onActivate }, ref) => (
  <div className="node" ref={ref} onMouseOver={() => onActivate(label)}>
    <Link to={to}>{label}</Link>
  </div>
));

const NeuralConnection = ({ fromRef, toRef, isActive }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (fromRef.current && toRef.current) {
      setStyle(calculateConnection(fromRef.current, toRef.current));
    }
  }, [fromRef, toRef]);

  return <div className={`connection ${isActive ? 'active' : ''}`} style={style} />;
};

const NeuralNetworkNav = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="neural-network">
      <NeuralNode label="Home" to="/" ref={homeRef} onActivate={setActiveNode} />
      <NeuralNode label="About" to="/about" ref={aboutRef} onActivate={setActiveNode} />
      <NeuralNode label="Projects" to="/projects" ref={projectsRef} onActivate={setActiveNode} />
      <NeuralNode label="Contact" to="/contact" ref={contactRef} onActivate={setActiveNode} />

      <NeuralConnection fromRef={homeRef} toRef={aboutRef} isActive={activeNode === 'About'} />
      <NeuralConnection fromRef={aboutRef} toRef={projectsRef} isActive={activeNode === 'Projects'} />
      <NeuralConnection fromRef={projectsRef} toRef={contactRef} isActive={activeNode === 'Contact'} />
    </div>
  );
};

export default NeuralNetworkNav;


