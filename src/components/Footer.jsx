import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div>
       <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 lg:text-left">
     
      {/* <!--Copyright section--> */}
       <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-900">
        <span>Copyright ©2023 All rights reserved</span>-
     <Link to="/admin">
      Admin
     </Link>
      </div>
    </footer>
    </div>
  )
}

export default Footer
