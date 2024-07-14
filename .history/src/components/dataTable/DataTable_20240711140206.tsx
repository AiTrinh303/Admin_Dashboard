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


  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
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
