import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import TableChartIcon from '@mui/icons-material/TableChart';
import { Box, Typography } from '@mui/material';
// Custom toolbar including export functionality
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
// Custom cell renderer for the 'Tabular Data' column
function TabularDataCell(params) {
  const handleClick = () => {
    window.open(`${window.location.pathname}/${params.row.DeviceID}`, '_blank');
  };

  return (
    <IconButton onClick={handleClick}>
      <TableChartIcon />
    </IconButton>
  );
}

function Ssldata() {
  const columns = [
    { field: 'DeviceID', headerName: 'Device ID-IMEI', width: 150 },
    { field: 'RMSMobileNo', headerName: 'RMS Mobile No', width: 150 },
    { field: 'Config', headerName: 'Config', width: 150 },
    { field: 'PoleSerialNo', headerName: 'Pole Serial No', width: 150 },
    { field: 'LuminiareSrNo', headerName: 'Luminiare Sr. No.', width: 150 },
    { field: 'PanelSrNo', headerName: 'Panel Sr. No.', width: 150 },
    { field: 'BatterySrNo', headerName: 'Battery Sr. No.', width: 150 },
    { field: 'SystemStatus', headerName: 'System Status', width: 150 },
    { field: 'LastUpdated', headerName: 'Last Updated', width: 150 },
    { 
      field: 'tabularData', 
      headerName: 'Tabular Data', 
      width: 150, 
      renderCell: TabularDataCell,
      sortable: false,
      filterable: false
    },
  ];
  const rows = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    DeviceID: `86827704855${index}03`,
    RMSMobileNo: `57550200664${index}7`,
    Config: `QCT_F157${index}`,
    PoleSerialNo: `KHA/BEL/BOB/W03/${index}`,
    LuminiareSrNo: `08234855910${index}`,
    PanelSrNo: `IBE12012084${index}6`,
    BatterySrNo: `INUBUC1254002${index}`,
    SystemStatus: ['Delivered', 'Pending', 'Cancelled'][index % 3],
    LastUpdated: `2023-06-${String(index + 1).padStart(2, '0')}`,
  }));
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box><Typography variant='h3'>Solar Street Light Data</Typography></Box>
        <Box>
          <Typography variant='h6'>Dashboard - Solar Street Light Data</Typography>
        </Box>
      </Box>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          // pageSize={25}
          // pageSize={25}  // Set the initial page size to 25
          // rowsPerPageOptions={[25, 50, 100]}
          components={{ Toolbar: CustomToolbar }}
          sx={{
            '& .MuiDataGrid-columnHeaders': {     
              top: 0,          
            },
          }}
        />
      </div>
    </Box>
  );
}

export default Ssldata;

