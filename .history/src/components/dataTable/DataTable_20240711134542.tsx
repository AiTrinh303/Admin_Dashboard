import './dataTable.scss'
import {
    DataGrid,
    GridColDef,
    GridToolbar,
  } from "@mui/x-data-grid";

  type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
  };
  

const DataTable = (props: Props) => {

      
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
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
        }}

        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
