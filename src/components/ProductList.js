import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((product) => product.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 180,
      renderCell: (params) => {
        return (
          <div className="uslUser">
            <img className="uslImg" src={params.row.image} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'status',
      headerName: 'Status',

      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
              <button className="uslEdit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="uslDelete"
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
