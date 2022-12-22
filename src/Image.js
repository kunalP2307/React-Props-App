
const Image =(props)=> {
    // object destructuring
    const {img,title,author} = props.book;
    
    const clickEvent =()=>{
      alert("helllo")
    }
  
    return (
      <article className='books'>
        <img src={props.book.Img} height={100} width={100}></img>
        <h4>{props.book.Title}</h4>
        <h5 onClick={()=>{alert(props.book.Author)}}>{props.book.Author}</h5>
        <button type='button'onClick={clickEvent} >Example</button>
        <hr></hr>
      </article>
    );
  }

export default Image