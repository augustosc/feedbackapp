import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "../shared/Card"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm(/*{handleAdd}*/) {

  const {addFeedback, updateFeedback, feedbackEdit} = useContext(FeedbackContext)

    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    /** caso haja alteracao em feedbackEdit em FeedbackItem,
     * o texto e rsating correspondentes sao adicionados ao form e
     * o botao Send eh habilitado
     * 
     */
    useEffect(()=>{
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])

    /** handleChange eh cahamada quando ha alteracao no texto.
     * se o texto tiver 10 caracteres ou mais, habilita o botao Send e
     * o submit
     */
    const handleTextChange = (e) => {
      const entry = e.target.value

      if(entry === '') {
        setBtnDisabled(true)
        setMessage(null)
      } else if(e.target.value !== '' && entry.trim().length < 10){
        setBtnDisabled(true)
        setMessage('Text must be at least 10 characters')
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }

      setText(entry)
    }

    /** monta newFeedback a partir do novo texto e rating e
     * chama addFeedback em FeedbackContext
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            rating,
            text
        }
        setRating(10)
        setText('')

        if(!feedbackEdit.edit)
        {
          addFeedback(newFeedback)
        } else {
          newFeedback.id = feedbackEdit.item.id
          updateFeedback(newFeedback)
        }
          
    }

  return ( 
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service? </h2>
        <RatingSelect select={(rating)=>setRating(rating)} selected={rating}/>
        <div className="input-group">
            <input 
                type="text" 
                placeholder="write a review"
                onChange={handleTextChange}
                value={text}
            />
            <Button type='submit'isDisabled={btnDisabled} >Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
