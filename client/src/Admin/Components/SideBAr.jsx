import React, { useContext } from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { MdOutlineReorder } from 'react-icons/md'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
import { decodeToken } from 'react-jwt'


import Cookies from 'js-cookie';


export default function SideBAr() {

  const { state, dispatch } = useContext(GlobalContext)
  const currentUser = decodeToken(state.token)

  const location = useLocation()

  const NavItem = [
    {
      tab: "Home",
      url: "/",
      icon: <AiTwotoneHome />
    },
    {
      tab: "Category",
      url: "/category",
      icon: <BiSolidCategoryAlt />
    },
    {
      tab: "Orders",
      url: "/get-all-orders",
      icon: <MdOutlineReorder />
    }
  ]

  return (
    <>
      <div className="bg-white p-2 rounded text-dark d-flex justify-content-between align-items-center mt-2">
        <span>{currentUser.username}</span>
        <button className='btn btn-outline-dark'
          onClick={() => {
            Cookies.remove('token')
            dispatch({ type: "USER_LOGOUT" })
          }}
        >Logout</button>
      </div>

      <ul className="nav flex-column">
        {
          NavItem.map((val, key) =>
            <li key={key} className={`nav-items  m-2 ${location.pathname == val.url ? 'bg-success rounded' : null}`} >
              <Link className='nav-link d-flex align-items-center gap-2 text-white' to={val.url}>
                <span>{val.icon}</span>
                {val.tab}
              </Link>
            </li>)
        }
      </ul>


    </>
  )
}
