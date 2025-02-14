// import React from 'react'
// import "./Section4.css"
// export const Section4 = () => {
//   return (
    
//     <div className="ss4">
// <div className="tex1">
// Our coffee perfection feedback
// </div>
// <div className="tex2">Our customers has amazing things to say about us</div>

//     </div>
//   )
// }
import React from 'react';
import "./Section4.css";
import { Button } from '../button/Button';


export class Section4 extends React.Component {
    currentReview = 1;
  
    review1 = {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset......",
      author: "Jonny Thomas",
      position: "Project Manager",
      image: "./assets/images/africa.png"
    };
  
    review2 = {
      text: "Another great review!",
      author: "Jane Doe",
      position: "CEO",
      image: "./assets/images/africa.png"
    };
  
    review3 = {
      text: "This is a third review!",
      author: "John Smith",
      position: "V.I.P.",
      image: "./assets/images/africa.png"
    };
  
    nextReview = () => {
      this.currentReview = (this.currentReview + 1) % 3;
      this.forceUpdate();
    };
  
    prevReview = () => {
      this.currentReview = (this.currentReview - 1 + 3) % 3;
      this.forceUpdate();
    };
  
    render() {
      let review;
      if (this.currentReview === 0) {
        review = this.review1;
      } else if (this.currentReview === 1) {
        review = this.review2;
      } else {
        review = this.review3;
      }
  
      return (
        <div className="ss4">
          <div className="tex1">Our coffee perfection feedback</div>
          <div className="tex2">Our customers have amazing things to say about us</div>
  
          <div className="review-container">
            <div className="review-content">
              <div className="quote">"</div> 
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <img src={review.image} alt={review.author} className="author-image" />
                <div className="author-details">
                  <p className="author-name">{review.author}</p>
                  <p className="author-position">{review.position}</p>
                </div>
              </div>
            </div>
            <div className="review-buttons">
              <Button onClick={this.prevReview} className="prev-button" title="←" />
              <Button onClick={this.nextReview} className="next-button" title="→" />
            </div>
          </div>
        </div>
      );
    }
  }