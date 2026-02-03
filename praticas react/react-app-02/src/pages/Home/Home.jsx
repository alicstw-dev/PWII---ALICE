import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'
import BlogList from '../../components/BlogList/BlogList'
import './Home.css'

function Home({ mudarPagina }) {
  return (
    <div className="home">
      <Header mudarPagina={mudarPagina} />
      <Profile />
      <BlogList />
    </div>
  )
}

export default Home
