import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BookList } from './BookList';
// can give user defined name while importing using {} and default 
import Image from './Image';


// const BookList = [
//   {
//     id :1,
//     Img :"https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UY327_FMwebp_QL65_.jpg",
//     Title : "It Ends With Us: A Novel: Volume 1",
//     Author : "Colleen Hoover"
//   },
//   {
//     id :2,
//     Img :"https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
//     Title : "The Power of Your Subconscious Mind",
//     Author : "Joseph Murphy"
//   },
//   {
//     id :3,
//     Img :"https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
//     Title : "The Psychology of Money",
//     Author : "Morgan Housel"
//   }
// ]

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
    const {img,title,author} = book;
    return (
        // <section> 
        //   <Image img = {book.Img}
        //       title = {book.Title}
        //       author = {book.Author}
        //   >
        //   </Image>
        // </section>
  
        <Image key= {book.id} book = {book}></Image>
    )
  })} </section>
}


// const Title =()=> <h2>Atomic Habit</h2>
// const Author =()=> <h3>No Name</h3>

// const Image =(props)=> {
//   // object destructuring
//   const {img,title,author} = props.book;
  
//   const clickEvent =()=>{
//     alert("helllo")
//   }

//   return (
//     <article className='books'>
//       <img src={props.book.Img} height={100} width={100}></img>
//       <h4>{props.book.Title}</h4>
//       <h5 onClick={()=>{alert(props.book.Author)}}>{props.book.Author}</h5>
//       <button type='button'onClick={clickEvent} >Example</button>
//       <hr></hr>
//     </article>
//   );
// }

ReactDOM.render(<Books/>,document.getElementById("root"));