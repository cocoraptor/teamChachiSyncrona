import './scss/style.scss'
import { Link } from 'react-router-dom'

function App() {
    return (
        <>
            <h1>Home</h1>
            <a href='/src/login-register/login.html'>Login</a>
            <h1>Patterns</h1>
            <Link to='/Patterns'>Patterns</Link>
        </>
  )
}

export default App
