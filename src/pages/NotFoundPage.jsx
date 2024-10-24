import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div>
      <h2>Not found page</h2>
      <Link to="/">
        <button type="button">Go to home page</button>
      </Link>
    </div>
  )
}

export default NotFoundPage;
