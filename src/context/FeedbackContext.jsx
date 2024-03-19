import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 5
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 7
        }

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    /** exclui o feedback indicado pelo id do array feedback */
    const deleteFeedback = (id)=>{
        const newFeedback = feedback.filter((item) => item.id !== id)

        if (window.confirm('Are you sure you want to delete? ')){
            setFeedback(newFeedback)
        }
    }

    /** recebe o novo feedback e insere no array feedback*/
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (newFeedback) => {

        setFeedback(feedback.map((item)=> (
            item.id === newFeedback.id
            ? newFeedback
            : item
        )))
        
        // const updateItem = (item)=> {
        //     if (item.id === newFeedback.id)
        //     {
        //         return {...item, text: newFeedback.text, rating: newFeedback.rating}

        //     } else {
        //          return item
        //     }
        // }

        // const feedbackUpdated = feedback.map((item)=> 
        //     (updateItem(item))
        // )

        // setFeedback(feedbackUpdated)

    }

    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider 
        value={{
            feedback: feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            feedbackEdit
        }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext