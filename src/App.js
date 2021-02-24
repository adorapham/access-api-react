import axios from 'axios';
import ReactDOM from 'react-dom';
import React from 'react';
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props)  
    this.state = { articles: [] 
    
    }
  }
  
  componentDidMount() {
    axios.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ce772870f8fa4caa84d2c06a95fa7ff2')
      .then(response => this.setState({ articles: response.data.articles }))
  }
  
  renderTableHeader() {
    let header = ["AUTHOR", "TITLE", "PUBLISHED DATE"];
    return header.map((key, index) => {
       return <th key={index}>{key}</th>
    })
 }

 renderTableData() {
  return this.state.articles.map((article, index) => {
     const { author, title, publishedAt} = article 
     return (
        <tr key={author}>
           <td>{author}</td>
           <td>{title}</td>
           <td>{publishedAt}</td>

        </tr>
     )
  })
}
  renderUsers() {
    const { articles } = this.state
    return articles.map( article => (
    <div key={article.author}><b>Author</b>: {article.author} <b>Title:</b> {article.title} <b>Published Date:</b> {article.publishedAt}</div>
    ))
  }
  
  render() {
    return (
    <div>
      <h1 id='title'>NewsAPI Top Headlines with Source from Techcrunch</h1>
      <table id='articles'>
      <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()} 
              
      </tbody>

      </table>
      
     
    </div>
    )
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
