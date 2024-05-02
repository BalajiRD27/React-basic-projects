import React from 'react'
import MenuList from './menu-list'


const Tree = ({menus=[]}) => {
  return (

    <div className='tree-container'>
      <style>
        {
          `
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .menulist-container{
            width: 400px;
            background-color: cadetblue;
        }
        
        .menuitem-container{
            list-style-type: none;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 1.2rem;
            line-height: 1.8;
        }
        `
        }
      </style>
      <MenuList list={menus} />
    </div>
  )
}

export default Tree