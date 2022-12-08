import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  { field: 'name', 
  headerName: 'name', 
  width: 180 },
  { field: 'url', 
  headerName: 'rl', 
  width: 280 },
  
];

const Tentang = () => {

  
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((data) => data.json())
    .then((data) => setTableData(data))
}, [])

const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:() => {
  return (
    <div className="cellAction">
      <div className="viewButton">
        View
      </div>
      <div className="deleteButton">
        Delete
      </div>
    </div>
  )
}
}
]


  
  return (
    <div className="datatable">
        <DataGrid
            rows={tableData}
            columns = {columns.concat(actionColumn)}
            checkboxSelection />
    </div>
  )
}

export default Tentang