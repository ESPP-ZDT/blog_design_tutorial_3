import React from "react";
import "../Styles.css";
import ReviewsList from "./ReviewsList";
import TagCloud from "./TagCloud";

const Sidebar = () => {
  const tags = ["fun", "learning", "programming", "react", "styled-components"];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        here goes the stuff
        <ReviewsList />
    









        so here it is
        <aside>
          <TagCloud tags={tags} />
        </aside>
        {/* Your sidebar content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
