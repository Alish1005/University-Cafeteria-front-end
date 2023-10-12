import React from "react";
import "./FeedbacksRate.css";
function FeedbacksRate() {

    return (
        <div className="body">
          <div className="wrapper">
            <h3>Rate your Experience</h3>
            <form>
              <div className="rating">
                <input type="number" name="rating" hidden></input>
                <i className="bx bx-star star"></i>
                <i className="bx bx-star star"></i>
                <i className="bx bx-star star"></i>
                <i className="bx bx-star star"></i>
                <i className="bx bx-star star"></i>
              </div>
              <textarea
                name="opinion"
                placeholder="Your Feedback !!"
              ></textarea>

              <div className="button-group">
                <button type="submit" className="btn submit">
                  Submit
                </button>
                <button className="btn cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
    );
  }
export default FeedbacksRate;
