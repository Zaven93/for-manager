import React from "react";
import "./Pagination.scss";
import prevPag from "../../assets/img/prev-pag.svg";
import nextPag from "../../assets/img/next-pag.svg";

const Pagination = () => {
    return (
        <div className="pagination-container">
             <ul className="pagination">
                 <li><img src={prevPag} alt="previous pagination"/></li>
                 <li>1</li>
                 <li>2</li>
                 <li>3</li>
                 <li><img src={nextPag} alt="next pagination"/></li>
             </ul>
        </div>
    );
};

export default Pagination;