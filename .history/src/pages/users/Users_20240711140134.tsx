import './users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from '../../data';

const Users = () => {

  

  return (
    <div className='users'>
        <div className="info">
          <h1>Users</h1>
          <button>Add New User</button>
        </div>
        <DataTable columns={columns} rows={userRows}/>
    </div>
  )
}

export default Users
