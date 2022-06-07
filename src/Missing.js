import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page not Found</h2>
      <p>Well thats disapointing</p>
      <p>
        <Link to='/'>Visit our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing