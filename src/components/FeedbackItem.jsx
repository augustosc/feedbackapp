import { useContext } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import Card from "../shared/Card"


function FeedbackItem({item/*,handleDelete*/}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  if (!item) return

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='red'/>
      </button>
      {/* seta feedbackEdit no click do botao */}
      {/* feedbackEdit eh monitorado em Feedbackform */}
      <button  onClick={()=>editFeedback(item)} className='edit'>
        <FaEdit color='blue' />
      </button>
    </Card> 
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem
