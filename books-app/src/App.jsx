import { useEffect, useState } from "react";
import superagent from 'superagent';
import './app.css';

function App() {

    const [bookName,setBookName] = useState([]);
    const [books,setBooks] = useState([]);
    let [count,setCount] = useState(0);
    
    const handleInput = (e) => {
      setBookName(e.target.value);
  }

  console.log('before use effect',books);

  const handleSubmit = (e) => {
    e.preventDefault();
    superagent.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
    .then((res) => {
      const result = res.body.items
      console.log(result);
      const finalResult = result.map((item) => {
        return item.volumeInfo;
      })
      setBooks(finalResult);
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    let sortedByTitle = books.sort((a, b) => a.title.localeCompare(b.title));
    setBooks(sortedByTitle);
    setCount(++count);
    console.log('inside handle click line 35',sortedByTitle);
  }

  const handleButton = (e) => {
    e.preventDefault();
    let sortedByAuthor = books.map((book) => {
      console.log('button',book);
      if(!book.authors) book.authors = ['unknown'];
      console.log('button',book.authors);
    //  return book.authors.sort((a,b) =>  a.authors.localeCompare(b.authors));
    })
  }

  console.log(count);
  
  useEffect(() => {
  },[count]);

  
  return (

   <>
    <div className='form'>
      <form action="">
        <fieldset>
      <strong>Book name</strong>
      <br />
      <input onChange={handleInput}></input>
      <button onClick={handleSubmit}>Search</button>
      <br />
      <button onClick={handleClick}>Sort by tiile</button>
      <button onClick={handleButton}>Sort by author</button>
        </fieldset>
      </form>
    </div>

    <div className='container'>
    {
      books.map((book,idx) => {
        return(
        <>
        
          <div className='cards'>
        <h2 key={idx}>Title : {book.title}</h2>
        {
          book.imageLinks ? <img src={book.imageLinks.thumbnail}/> : <img src='https://yt3.ggpht.com/ytc/AKedOLQ37Vg0WC8TINK49uU4oL_L_qF7iDVE5C_gEjYang=s900-c-k-c0x00ffffff-no-rj'></img>
        }
        {
          book.authors ? <h4>Author : {book.authors[0]}</h4> : ['Unknown']
        }
        </div>
        </>
        )
      })
    }
    </ div>
  </>
  );
}

export default App;
