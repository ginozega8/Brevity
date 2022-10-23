import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
const CreateUser = () => {

  const schemeObj = { //Object for default state value
    title: "",
    description: "",
    author: "",
    imageurl: "https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1665685334/sekiro-app/steve-johnson-RzykwoNjoLw-unsplash_zjleuj.jpg",
    comments: []
  }

  const [content, setContent] = useState(schemeObj)

  const handleChange = (e) => {
    const {name, value} = e.target
    setContent ({...content, [name]: value}) //Create a new object with the input data
    console.log(content)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent Refresh
    console.log(content)

    //POST logic
    const newUser ={
      title: content.title,
      description: content.description,
      author: content.author,
      imageurl: content.imageurl,
      comments: content.comments
    }
    await axios.post("https://brevity-4kav.onrender.com/api/users", newUser)


    setContent(schemeObj)

    //POPUP logic
    const successScreen = document.getElementById("success")
    successScreen.classList.remove("success-screen-hide")
    document.getElementById("create-form").classList.add("form-blur")
  }

  return (
    <div className='form-container'>
      
      <form onSubmit={handleSubmit} className="create-quote-form" id='create-form'>
      <h1>CREATE QUOTE</h1>
      <div>
      <label>Title</label>
      <input type="text" required name="title" value={content.title} onChange={handleChange} maxLength="35"></input>
      </div>

      <div>
      <label>Content</label>
      <textarea required name="description" value={content.description} onChange={handleChange} maxlength="300"></textarea>
      </div>

      <div>
      <label>Author</label>
      <input required name="author" value={content.author} onChange={handleChange} maxLength="35"></input>
      </div>

      <label>Background image</label>
      <img src={content.imageurl} width="300" height="150"></img>
      <select name="imageurl" onChange={handleChange} value={content.imageurl}>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1665685334/sekiro-app/steve-johnson-RzykwoNjoLw-unsplash_zjleuj.jpg">Gray and black</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1665685333/sekiro-app/alex-perez-pEgsWN0kwbQ-unsplash_zimz4z.jpg">Purple and pink</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1665685330/sekiro-app/geordanna-cordero-2Qg4y32pdCc-unsplash_asgznu.jpg">Pink and cyan</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_scale,h_200,w_400/v1665685336/sekiro-app/steve-johnson-8fnJThWFl6I-unsplash_hoo5ic.jpg">Blue and white</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1665685332/sekiro-app/jene-stephaniuk--MCrF6hnojU-unsplash_wycxek.jpg">Color Splash</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1665685328/sekiro-app/The-Magic-Hour-2019-Acrylic-on-Canvas-3622-x-5422-3000-Rebecca-Katz_lntbdr.webp">Blue and Yellow</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380844/sekiro-app/kseniya-lapteva-kOajnscQxW8-unsplash_sxcids.jpg">Sky</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380863/sekiro-app/dave-netto-wWYwYiCoVwI-unsplash_b5upc4.jpg">Red and orange</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380867/sekiro-app/dan-cristian-padure-eDx3m572SBw-unsplash_sqxwqo.jpg">Pink, cyan and gray</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380871/sekiro-app/birmingham-museums-trust-wvD0zZnRbcw-unsplash_yvj5fw.jpg">Forest</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380877/sekiro-app/pawel-czerwinski-63a31EJ4vgI-unsplash_cicsih.jpg">Pink and black</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380883/sekiro-app/jr-korpa-Q6kSAd0IGPg-unsplash_i8zdfd.jpg">Pink window</option>
      <option value="https://res.cloudinary.com/dgiqi5urn/image/upload/c_thumb,h_200,w_400/v1666380890/sekiro-app/scott-webb-TOmVNJZN1AA-unsplash_qwxjf7.jpg">Red sea</option>
      </select>

      <button type='submit'>Submit</button>
      </form>

      {/* Submit success div */}
      <div id='success' className='success-screen-show success-screen-hide'>
        <i class='bx bxs-check-square'></i>
        <h2>Quote successfully added</h2>
        <Link to="/" className='nav-link'>Home</Link>
      </div>

    </div>
  )
}

export default CreateUser
