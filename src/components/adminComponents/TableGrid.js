import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const TableGrid = ({ rows, columns }) => {
  const [pageSize, setPageSize] = useState({
    pageSize: 5,
    page: 0,
  });

  const customToolbar = () => {
    return (
      <GridToolbarContainer>
        <div className="flex gap-4">
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
        </div>
      </GridToolbarContainer>
    );
  };
  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
            borderRadius: "15px",
            border: "none",
            width: "fit-content",
            height: "470px",
            margin: "10px auto",
            "& .MuiDataGrid-main": {
              width: "fit-content",
              margin: "12px auto",
              border: " 1px solid rgba(0,0,0, 0.4)",
              borderRadius: "15px",
            },
            "& .MuiDataGrid-toolbarContainer": {
              gap: "20px",
            },
          },
          cell: {
            backgroundColor: "#ffffff",
            ":focus": { outline: 0 },
            justifyContent: "center",
          },
          columnsPanel: {
            color: "#1e1e1e",
          },
          panelWrapper: {
            borderRadius: "10px",
          },
          paper: {
            borderRadius: "10px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: "#ff6801",
            color: "black",
            padding: "4px 14px",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          colorPrimary: {
            color: "white",
          },
          switchBase: {
            "&.Mui-checked": {
              color: "#ff6801",
              "+ .MuiSwitch-track": {
                backgroundColor: "#ff6801",
              },
            },
          },
          track: {
            backgroundColor: "#a0a0a0",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className=" h-[500px] w-full max-w-7xl mx-auto overflow-x-scroll">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          paginationModel={pageSize}
          onPaginationModelChange={setPageSize}
          pageSizeOptions={[5, 10, 20]}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          initialState={{
            columns: {
              columnVisibilityModel: {
                _id: false,
              },
            },
          }}          
          autoHeight
          sx={{
            "& .MuiDataGrid-root": {
              borderRadius: "20px",
            },
            ".MuiDataGrid-columnHeader": {
              background: "#212121",
              color: "#ffffff",
            },
            ".MuiDataGrid-menuIconButton": {
              background: "#a0a0a0",
              color: "black",
              ":hover": {
                background: "#ffbc00",
              },
            },
            ".css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root": {
              background: "transparent",
              color: "white",
              boxShadow: "none",
              ":hover": {
                background: "#ffbc00",
              },
            },
            ".MuiDataGrid-columnHeaders": {
              borderRadius: "15px 15px 0 0",
            },
            ".MuiDataGrid-withBorderColor": {
              ":focus": {
                border: "none",
              },
            },
            ".MuiDataGrid-columnHeaderTitleContainer": {
              gap: "10px",
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "black",
            },
          }}
          slots={{ toolbar: customToolbar }}
        />
      </div>
    </ThemeProvider>
  );
};

export default TableGrid;
