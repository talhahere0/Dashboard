import React from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import {Link} from 'react-router-dom'

const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'Username',
          headerName: 'Username',
          width: 150,
          editable: true,
        },
        {
          field: 'Email',
          headerName: 'Email',
          width: 170,
          editable: true,
        },
        {
          field: 'Status',
          headerName: 'Status',
          type: 'number',
          width: 120,
          editable: true,
        },
        {
          field: 'Transaction',
          headerName: 'Transaction',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 130,},
          {
              field:'Action',
              headerName:'Action',
              width:'150',
              renderCell:(params)=>{
                  return (
                      <>
                      <Link to={'/user/'+params.row.id}><button className="UserListEdit">Edit</button></Link>
                      
                      <DeleteOutline className="UserListDelete" />
                      </>
                  )
              }
          }
      ];
      
      const rows = [
        { id: 1, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 2, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 3, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 4, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 5, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 6, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 7, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 8, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 9, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 10, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 11, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
        { id: 12, Username: 'John Show', Email: 'Jonshow@gmail.com', Status: 'Active', Transaction:'$112.00' },
       
      ];


    return (
        <>
          <div className="userList">
          
      <DataGrid
      
        rows={rows}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick
      />
    
              </div>  
        </>
    )
}

export default UserList
