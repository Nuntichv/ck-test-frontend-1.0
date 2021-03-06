import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowModes, DataGrid, GridToolbarContainer, GridActionsCellItem } from "@mui/x-data-grid";
import { randomCreatedDate, randomTraderName, randomUpdatedDate, randomId, randomInt } from "@mui/x-data-grid-generator";

/**this is data in a row by using components to generate the data,
 * not mocking the data
 */
const  dataRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: randomInt(1, 100),
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate()
    }
];
/* end the dataRows
**/

function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
  
    const handleClick = () => {
      const id = randomId();
      setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" }
      }));
    };
  
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add New User
        </Button>
      </GridToolbarContainer>
    );
  }
  
  EditToolbar.propTypes = {
    setRowModesModel: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired
  };
  
  export default function Demo() {
    const [rows, setRows] = React.useState(dataRows);
    const [rowModesModel, setRowModesModel] = React.useState({});
    
    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({...rowModesModel, [id]: { mode: GridRowModes.View, ignoreModifications: true }});
        
        const editedRow = rows.find((row) => row.id === id);

        if (editedRow.isNew) {
          setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };

        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    
        return updatedRow;
    };

    const columns = [
        {
          field: "name",
          headerName: "Name",
          width: 200,
          editable: true
        },
        { field: "age", 
          headerName: "Age", 
          type: "Number", 
          editable: true 
        },
        {
          field: "dateCreated",
          headerName: "Date Created",
          type: "date",
          width: 200,
          editable: true
        },
        {
          field: "lastLogin",
          headerName: "Last Login",
          type: "dateTime",
          width: 250,
          editable: true
        },
    
        {
          field: "actions",
          type: "actions",
          headerName: "Actions",
          width: 200,
          cellClassName: "actions",
          getActions: ({ id }) => {
            const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="inherit"
            />,

            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,

          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="textPrimary"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ];
      }
    }
  ];
  
  return (
        <Box
        sx={{
        bgcolor: '#FFDD63',
        height: 500,
        width: '100%',
        "& .actions": {
          color: '#7BAE6A'
        },
        "& .textPrimary": {
          color: "#FF202B"
        },
        "@ .button":{
          color: "#006EBC"
        }

      }}
    >
          <DataGrid
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            components={{
              Toolbar: EditToolbar
            }}
            componentsProps={{
              toolbar: { setRows, setRowModesModel }
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      );
  }