import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';

const UserList = () => {

  const handleComment = async (e) => { //Comment request
    e.preventDefault(); //Prevent Refresh
    const objectToUpdate = list.find(obj => obj._id === e.target.id); //Find the specific object

    const updatedObj = { //Object scheme for the update
      title: objectToUpdate.title,
      description: objectToUpdate.description,
      author: objectToUpdate.author,
      imageurl: objectToUpdate.imageurl,
      comments: objectToUpdate.comments
    }
    updatedObj.comments.push(comment) //Push the comments into the array

    if (comment.length < 3){ //Prevent empty or short comments
      console.log("Comment is too short")
      return
    }

    await axios.put("http://localhost:4000/api/users/" + e.target.id, updatedObj) //Request
    setComment("")
  }

  const handleCommentChange = async (e) => {
    e.preventDefault(); //Prevent Refresh
    setComment(e.target.value);
    console.log(comment)
  }

  const handleFocusOut = (e) =>{
    e.target.value = "";
  }

  // Sort Events
  const sortAZ = () => {
    const sorted = [...list].sort((a, b) => a.title.localeCompare(b.title));
    setList(sorted)
  }

  const sortComments = () =>{
    const sorted = [...list].sort((a, b) => b.comments.length - a.comments.length);
    setList(sorted)
  }

  const sortNewest = () =>{
    const sorted = [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setList(sorted)
  }

  const sortOldest = () =>{
    const sorted = [...list].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    setList(sorted)
  }

  // Sort Events End

  const [list, setList] = useState([])
  const [comment, setComment] = useState("")

  



  useEffect(() => {
    
    const getUsers = async()=>{
      const res = await axios.get("http://localhost:4000/api/users/")
      setList(res.data)
    }
    getUsers()
    
  }, []) //This parameter watches for changes on the list state, so it refreshes everytime it changes



  return (
    <div>

      <div className='welcome-section'>
      <h1>WELCOME TO <i>BREBITY</i></h1>
      <h2>“ The quote gallery “</h2>
      </div>

      <div className='selectors'>
        <button onClick={sortNewest}>Newest</button>
        <button onClick={sortOldest}>Oldest</button>
        <button onClick={sortComments}>Most Commented</button>
        <button onClick={sortAZ}>A-Z</button>
      </div>

      <div className='card-grid'>

      {list.map(list => (
        <div>
      <div className='phrase-card' key={list._id}>
        <h1 key={uuid()}>{list.title}</h1>
        <img src={list.imageurl} key={uuid()}></img>
        <p key={uuid()} className="description">“{list.description}”</p>
        

        <p key={uuid()} className="author">━ {list.author}</p>

        <div className='share-buttons'>
        <a className='twitter-button' target="_blank" title='Share on Twitter'
        href={`https://twitter.com/intent/tweet?text=${"“" + list.description + "”" + " ━" + list.author }`}>
          <i className='bx bxl-twitter'></i>
          </a>
        </div>
         
        <p className='comments-title'>Comments</p>
        <div className='comments'>
        {list.comments.length == 0 
        ? <div  className='comments-default'>
          <i className='bx bxs-chat'></i>
          <p>There are no comments yet, be the first to write a comment</p>
        </div>
        : list.comments.map(comment => (
          <div className='comment'>
            <i className='bx bx-user-circle' ></i>
            <p key={uuid()}>Anon: {comment}</p>
          </div>
        ))}
        </div>
        <p key={uuid()} className="date">Published {list.createdAt.replace(/[A-Za-z]/g, " ").slice(0, -8)}</p>
      </div>
      <div className='comment-field'>
        <form>
        <input placeholder='Post a comment...' onChange={handleCommentChange} onBlur={handleFocusOut}></input>
        <button type='submit' onClick={handleComment} id={list._id}>Post</button>
        </form>
        </div>
        
      </div>
    ))}

    </div>
    </div>
  )
}

export default UserList