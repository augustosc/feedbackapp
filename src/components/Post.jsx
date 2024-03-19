// import { useParams } from "react-router-dom"
import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

function Post() {
    // const params = useParams()
    const status = 200
    const navigate = useNavigate()

    if(status === 404){
        return <Navigate to='/notfound' />
    }
    const onClick = ()=>{
        console.log('Hello')
        navigate('/about')
    }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='show' element={<h1>Hello</h1>} />
      </Routes>

      {/* <h1>Post {params.id}</h1>
      <p>{params.name}</p> */}
    </div>
  )
}

export default Post
