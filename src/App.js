//import logo from './logo.svg';
import './App.css';
import React from 'react';


const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];


  let searchedStories = stories.filter((story)=> story.title.toLowerCase().includes (searchTerm.toLowerCase()))

  return (
    <div>
      <h1>My Hacker Stories</h1>
        <Search OnSearch ={handleSearch} />
        <hr />
        <List list={searchedStories}  />
    </div>
  );
}  

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.OnSearch}/>
      <p>
        {/* Searching for <strong>{searchTerm}</strong> */}
      </p>
    </div>
  )
}

const List = (props) => (//{
  //return (
    <ul>
      {
        props.list.map( (item) => {
          return (
            <Item key={item.objectID} item = {item} />
          );
        })
      }
    </ul>
)
//  );
//}

const Item = (props) =>(
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  )


export default App;
