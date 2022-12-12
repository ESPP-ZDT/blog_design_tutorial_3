import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const TagCloudContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 400px;
  animation: ${rotate} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Tag = styled.span`
  font-size: 14px;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  background-color: #EEE;
  transform: rotateY(60deg) rotateX(60deg) translateZ(40px);

  &:hover {
    cursor: pointer;
  }
`;

const TagCloud = ({ tags }) => {
  return (
    <TagCloudContainer>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagCloudContainer>
  );
};

export default TagCloud;
