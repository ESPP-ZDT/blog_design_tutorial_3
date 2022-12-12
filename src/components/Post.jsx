import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PostContainer = styled.div`
  background-color: rgb(248, 246, 246);
  animation: ${fadeIn} 0.5s ease-in;
  width: calc(85%);
  position: relative;
  height: ${() =>
    window.innerHeight}px; // Set the height of the element to the desired value
  overflow-y: scroll; // Make only the vertical content of the element scrollable

  @media (max-width: 1200px) {
    width: 85%;
  }
`;
const PostContent = styled.p`
  font-size: 1.3vw;
`;

const Post = () => {
  return (
    <div>
      <PostContainer>
        <PostContent>
          thisis a post Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Vel, nobis tenetur ex, esse atque numquam at eos consequuntur
          obcaecati corrupti velit cum sed earum expedita unde excepturi, quod
          laudantium ipsa!
        </PostContent>
      </PostContainer>
    </div>
  );
};

export default Post;
