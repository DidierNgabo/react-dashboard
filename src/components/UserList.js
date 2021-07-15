
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import  {userRows}  from '../dummyData';
import {Link} from 'react-router-dom';
import { useState } from 'react';



const UserList =() =>{
  
  const [data,setData] =useState(userRows);
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

     const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 180 ,renderCell:(params)=>{
            return (
                <div className="uslUser">
                    <img className="uslImg" src={params.row.avatar} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 160,
          
        },
        {
            field:'action',
            headerName:"Action",
            width:150,
            renderCell:(params) =>{
                return (
                    <>
                    <Link to={`/users/${params.row.id}`}>
                    <button className="uslEdit">Edit</button>
                    </Link>
                    <DeleteOutline  onClick={()=>handleDelete(params.row.id)} className="uslDelete"/>
                    </>
                )
            }
        }
      ];
  return (
    <div className="userList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default UserList;