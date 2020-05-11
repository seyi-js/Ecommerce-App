import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
export const ListTransactions = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(2);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const header = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'code', label: 'Code', minWidth: 100 },
        {
            id: 'population',
            label: 'Population',
            minWidth: 170,
            align: 'right',
            format: ( value ) => value.toLocaleString( 'en-US' ),
        },
        {
            id: 'size',
            label: 'Size\u00a0(km\u00b2)',
            minWidth: 170,
            align: 'right',
            format: ( value ) => value.toLocaleString( 'en-US' ),
        },
       
    ];

    const body = [
        {name:'India', code:'IN', population:1324171354, size:3287263},
        {name:'Nigeria', code:'IN', population:1324171354, size:3287263},
        {name:'Japan', code:'IN', population:1324171354, size:3287263},
        {name:'Honkong', code:'IN', population:1324171354, size:3287263},
    ]
       
       
    return (
       
        <React.Fragment>
        <div className="container">
                <Paper className={ classes.root } style={{borderRadius: '50px'}}>
                    <TableContainer className={ classes.container }>
                        <Table stickyHeader aria-label="sticky table" >
                        <TableHead  >
                                <TableRow >
                                    { header.map( ( head ) => (
                                        <TableCell
                                            key={ head.id }
                                            align={ head.align }
                                            style={ { minWidth: head.minWidth } }
                                            className="bg-info"
                                        >
                                        {head.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { body.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row ) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {header.map((column) => {
                                          const value = row[column.id];
                                          return (
                                            <TableCell key={column.id} align={column.align} onClick={e=> alert(column.id)}>
                                              {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                          );
                                        })}
                                      </TableRow>
                                    )
                                })}
                            </TableBody>
                    </Table>
                    </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[5,10, 100]}
                    component="div"
                    count={body.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    
                </Paper>
                </div>
            </React.Fragment>
        
    )
}

export default ListTransactions