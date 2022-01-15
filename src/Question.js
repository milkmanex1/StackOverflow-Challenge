import React from 'react'
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSortUp, faSortDown} from "@fortawesome/free-solid-svg-icons"

const Question = ({data}) => {  
    const {id, title, desc, user,tags,img } =data
    const [count, setCount] = useState(0)
    
    return <div className="single-question" key={id}>
    <div className="top">
      <div className="stats">
        <div className="stats-container">
          
            <FontAwesomeIcon className="vote-btn" icon ={faSortUp} onClick={()=>{
              
             setCount(count+1)
            }
            }></FontAwesomeIcon>
          
          {/* <i className="fas fa-sort-up" id="upvote"></i> */}
          <div className="votes">{count}</div>
          
            <FontAwesomeIcon className="vote-btn" icon ={faSortDown} onClick={()=>{
              setCount(count-1)
             
            }} ></FontAwesomeIcon>
          
          {/* <i className="fas fa-sort-down" id="downvote"></i> */}
          <div className="answer-count">
            <span>1</span> answers
          </div>
          <div className="view-count">
            <span>29</span> views
          </div>
        </div>
      </div>
      <div className="question-body">
        <div className="question-title">
          {title}
        </div>
        <div className="question-text">
         {desc}
        </div>
        <div className="question-tags">
        {tags.map((tag)=>{
          return (<div key={tag}>{tag}</div>)
      })}
        </div>
      </div>
    </div>
    <div className="bottom">
      <div>
        <p>
          Asked <span>0</span> mins ago
        </p>
        <div className="user">
          <div className="profile-logo">
            <img src={img} alt="" />
          </div>

          <div className="username">
            {user}
          </div>
        </div>
      </div>
    </div>
  </div>
    
}

export default Question
