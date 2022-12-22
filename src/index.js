import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BookList = [
  {
    Img :"https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UY327_FMwebp_QL65_.jpg",
    Title : "It Ends With Us: A Novel: Volume 1",
    Author : "Colleen Hoover"
  },
  {
    Img :"https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
    Title : "The Power of Your Subconscious Mind",
    Author : "Joseph Murphy"
  },
  {
    Img :"https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
    Title : "The Psychology of Money",
    Author : "Morgan Housel"
  }
]

/*const names = ['kunal','vivek','sahil'];

const mapNames = names.map((name)=>{
  return <h2>{name}</h2>
})

function Books(){
  return <section className='booklist'> {mapNames} </section>
}
*/


function Books(){
  return <section className='booklist'> {BookList.map((book)=>{
    return (
        <section>
          <Image img = {book.Img}
              title = {book.Title}
              author = {book.Author}
          >
          </Image>
        </section>
    )
  })} </section>
}


// const Title =()=> <h2>Atomic Habit</h2>
// const Author =()=> <h3>No Name</h3>

const Image =({img,title,author,children})=> {
  // object destructuring
  //const {img,title,author} = props;
  
  return (
    <article className='book'>
      <img src={img} height={100} width={100}></img>
      <h4>{title}</h4>
      <h5>{author}</h5>
      <h6>{children}</h6>
      <hr></hr>
    </article>
  );
}

ReactDOM.render(<Books/>,document.getElementById("root"));