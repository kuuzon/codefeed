import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="notFoundBox">
      <div className="twinBox">
        <h1>404</h1>
        <Link href="/">This page could not be found</Link>
      </div>
    </div>
  )
}

export default NotFoundPage