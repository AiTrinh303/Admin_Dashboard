import './users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { GridColDef } from "@mui/x-data-grid";

const Users = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
        field: "action",
        headerName: "Action",
        width: 100,
        renderCell: () => {
          return (
            <div className="action">
                <div className="view">View</div>
                <div className="delete">Delete</div>
            </div>
          )
        }
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        type: "boolean"
    },

    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

      
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, status: true },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, status: true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: true },
  ];




  return (
    <div className='users'>
        <div className="info">
          <h1>Users</h1>
          <button>Add New User</button>
        </div>
        <DataTable columns={columns} rows={rows}/>
    </div>
  )
}

export default Users
