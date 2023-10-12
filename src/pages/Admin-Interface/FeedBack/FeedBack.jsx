import FeedbackBox from "../../../components/feedbackbox/FeedbackBox";


function Feedback() {
    return ( 
        <div className="pagesContent">
            <h4>Feedback</h4><br/>
            <div className="row">
            <FeedbackBox name="Ali" item="Burger" rate={4} note="Nice!!!" time="3 mins ago" action="Read" type={'1'} />
            <FeedbackBox name="Abbas" item="Ahmad" rate={5} note="Excellent service and friendly staff. I had a wonderful dining experience." time="3 mins ago" action="Read" type={'3'} />
            <FeedbackBox name="Mohammad" item="Cheese Burger" rate={2} note="The food was delicious, and the presentation was top-notch. I'll definitely be back!" time="3 mins ago" action="Read" type={'3'} />
            <FeedbackBox name="Ali" item="Burger" rate={4} note="I appreciate the attention to dietary restrictions. Thank you for accommodating my allergies." time="3 mins ago" action="Read" type={'3'} />
            <FeedbackBox name="Mohammad" item="Ahmad" rate={3} note="The atmosphere was cozy and perfect for a family dinner. My kids loved it." time="3 mins ago" action="Read" type={'3'} />
            <FeedbackBox name="Abbas" item="Burger" rate={2} note="Nice!!!" time="3 mins ago" action="Read" type={'3'} />
            <FeedbackBox name="Ali" item="Cheese Burger" rate={1} note="The restaurant's cleanliness and hygiene standards are impressive, especially during these times" time="3 mins ago" action="Read" type={'3'} />
            <FeedbackBox name="Abbas" item="Ahmad" rate={5} note="Nice!!!" time="3 mins ago" action="Read" type={'3'} />
            </div>
        </div>
     );
}

export default Feedback;
