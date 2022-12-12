import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  background-color: #e0e0e0;
  animation: fadeIn 0.5s linear;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledListItem = styled.li`
  color: #333;
  font-weight: bold;
  animation: fadeIn 0.5s linear;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function BestReviewsList() {
  return (
    <StyledList>
      <StyledListItem>Review 1</StyledListItem>
      <StyledListItem>Review 2</StyledListItem>
      <StyledListItem>Review 3</StyledListItem>
    </StyledList>
  );
}

export default BestReviewsList;
