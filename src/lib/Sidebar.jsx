import React from "react";
import blog1 from "../assets/images/resource/blog2-1.jpg";
import blog2 from "../assets/images/resource/blog2-2.jpg";
import blog3 from "../assets/images/resource/blog2-3.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form className="sidebar__search-form">
          <input type="search" placeholder="Search here" />
          <button type="submit"><i className="lnr-icon-search"></i></button>
        </form>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Latest Posts</h3>
        <ul className="sidebar__post-list list-unstyled">
          {[blog1, blog2, blog3].map((img, i) => (
            <li key={i}>
              <div className="sidebar__post-image"><img src={img} alt="" /></div>
              <div className="sidebar__post-content">
                <h3><span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i> Admin</span> <Link to="#">Post Title {i+1}</Link></h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
