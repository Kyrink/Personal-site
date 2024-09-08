import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Timeline = ({ elements }) => {
  // useViewportScroll gives us access to the scrollY value
  const { scrollY } = useViewportScroll();

  return (
    <VerticalTimeline>
      {elements.map((element, index) => {
        // Use useTransform to map the scrollY to a desired Y value for parallax
        // As the user scrolls down, we move the element upwards (parallax effect)
        const y = useTransform(
          scrollY,
          [0, 1000],
          [0, index % 2 === 0 ? -100 : -150]
        );

        return (
          <VerticalTimelineElement
            key={element.id}
            className={`vertical-timeline-element--work ${
              index % 2 === 0 ? "left-element" : "right-element"
            }`}
            contentClassName="custom-content"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "5px solid rgba(255, 255, 255, 0.05)",
            }}
            date={element.date}
            dateClassName="custom-date"
            iconStyle={{
              color: "#fff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={
              <img
                src={`/${element.icon}`}
                alt={`${element.title} logo`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <motion.div
              style={{
                y, // Apply the transformed y value for parallax
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>
              <p>{element.description}</p>
              {element.buttonText && (
                <a href="#" className="button">
                  {element.buttonText}
                </a>
              )}
            </motion.div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
