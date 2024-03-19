import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackStats(/*{feedback}*/) {

  const {feedback} = useContext(FeedbackContext)
    
    let average =feedback.reduce((acc,curr) =>  {
        return (acc + curr.rating)
    },0) /feedback.length

    /** replace retira a casa decimal se for zeo */
    average = average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  )
}

export default FeedbackStats
