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

  return (
    <div className='users'>
        <div className="info">
          <h1>Users</h1>
          <button>Add New User</button>
        </div>
        <DataTable columns={/>
    </div>
  )
}

export default Users
