import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import { Autocomplete, Box, Button, Chip, Grid, Stack, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TaskAlt } from '@mui/icons-material';
import { useWithSound } from '../hooks/playSound';
import error from '../assets/error.mp3'


const currencies = [
    {
        value: 'USD',
        label: 'h',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
const accounts = ['user', 'Accomodation maintenance', 'user1']

const data = [
    {
        id: 0,
        account_name: 'Accomodation maintenance',
        type: 'debit',
        credit: 123,
        debit: 456,
        remarks: 'Monthly Maintenance'
    },
    {
        id: 1,
        account_name: 'user',
        type: 'credit',
        credit: 323,
        debit: 256,
        remarks: 'Monthly Maintenance'
    },
    {
        id: 2,
        account_name: 'Accomodation maintenance',
        type: 'credit',
        credit: 323,
        debit: 256,
        remarks: 'Monthly Maintenance'
    },
];
// const data = [
//     createData('Accommadation maintenance', 159, 6.0, 24, 4.0),
//     createData('Accrued Expenses', 237, 9.0, 37, 4.3),
// ];

export default function Items() {
    const [rows, setRows] = React.useState(data)
    const [edit, setEdit] = React.useState(null)
    const inputRefs = React.useRef([]);
    const { playSound } = useWithSound(error);

    const CreateTableRows = ({ data, dispatch }) => {
        const doubleClick = (index) => {
            dispatch(data)
            setTimeout(() => {
                inputRefs.current[index].focus();
            });
        }

        return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell onDoubleClick={() => doubleClick(0)} component="th" scope="row" >
                    <Stack><Box sx={{ typography: 'body2', fontWeight: 500, color: 'text.main' }}>{data?.account_name}</Box></Stack>
                    <Stack><Box sx={{ typography: 'body2', fontSize: '13px', fontWeight: 'light' }}>closing balance: $23</Box></Stack>
                </TableCell>
                <TableCell onDoubleClick={() => doubleClick(1)} align="left"><Chip label={data?.type} size="small" sx={{ color: data?.type === 'credit' ? 'success.main' : 'danger.main', backgroundColor: data?.type === 'credit' ? 'success.light' : 'danger.light' }} /></TableCell>
                <TableCell onDoubleClick={() => doubleClick(2)} align="left">{data?.credit}</TableCell>
                <TableCell onDoubleClick={() => doubleClick(3)} align="left"><Box sx={{ fontWeight: 'bold' }}>{data?.debit}</Box></TableCell>
                <TableCell onDoubleClick={() => doubleClick(4)} sx={{ typography: 'body2', fontSize: '12.5px', fontWeight: 'light', textAlign: 'left', overflowWrap: 'break-word', width: '50px' }}>
                    {data?.remarks}
                </TableCell>
                <TableCell align="right">
                    <Stack direction='row'>

                        <IconButton aria-label="edit" onClick={() => dispatch(data)}>
                            <DriveFileRenameOutlineIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteOutlineIcon color='danger' fontSize="small" />
                        </IconButton>
                    </Stack>
                </TableCell>
            </TableRow>
        )
    }
    const EditRows = () => {
        const handleChange = (event, index) => {

            const { name, value } = event.target
            setEdit(prev => ({ ...prev, [name]: value }));
            setTimeout(() => {
                inputRefs.current[index].focus();
            });
        };
        const onKeyDown = (event, index) => {
            if (event.key === 'Enter') {
                if (edit?.account_name && edit?.type && (edit?.credit || edit?.debit) && edit?.remarks) {
                    dispatch()
                    return
                }
                if (edit?.[event?.target?.name]) {
                    setTimeout(() => {
                        const nextIndex = (index + 1) % inputRefs.current.length;
                        inputRefs.current[nextIndex].focus();
                    });
                } else {
                    playSound()
                }
            } else if (event.key === 'Tab') {
                event.preventDefault();
                console.log('tab', index);
                setTimeout(() => {
                    const nextIndex = (index + 1) % inputRefs.current.length;
                    inputRefs.current[nextIndex].focus();
                });
            }
        }
        const dispatch = () => {
            if (edit?.account_name && edit?.type && (edit?.credit || edit?.debit) && edit?.remarks) {
                const arr = rows
                if (!!data?.id) setEdit(prev => ({ ...prev, id: arr?.length }))
                arr[edit?.id] = edit
                setRows([...arr])
                setEdit(null)
            } else {
                playSound()
            }
        }
        React.useEffect(() => {
            inputRefs.current[0].focus();
        }, [])
        return (
            <TableRow >
                <TableCell>
                    <Box sx={{ ml: '0px' }}>
                        <Autocomplete
                            size='small'
                            name='account_name'
                            style={{ width: '180px', }}
                            ref={(el) => (inputRefs.current[0] = el?.querySelector('input'))}
                            disablePortal
                            id="combo-box-demo"
                            options={accounts}
                            value={edit?.account_name}
                            onKeyDown={e => onKeyDown(e, 0)}
                            onChange={(e, value) => {
                                setEdit({ ...edit, account_name: value })
                                setTimeout(() => {
                                    inputRefs.current[0].focus();
                                });
                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  {...params} label="" name='account_name' />}
                            InputProps={{ sx: { borderRadius: 3 } }}
                        />
                    </Box>
                </TableCell>
                <TableCell>
                    <Box sx={{ ml: '-20px' }}>
                        <Autocomplete
                            size='small'
                            InputProps={{ sx: { borderRadius: 3 } }}
                            style={{ width: '130px', borderRadius: 6 }}
                            ref={(el) => (inputRefs.current[1] = el?.querySelector('input'))}
                            disablePortal
                            id="combo-box-demo"
                            options={['credit', 'debit']}
                            onKeyDown={e => onKeyDown(e, 1)}
                            value={edit?.type}
                            name='type'
                            onChange={(e, value) => {
                                setEdit({ ...edit, type: value })
                                setTimeout(() => {
                                    inputRefs.current[1].focus();
                                });
                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="" name='type' />}
                        />
                    </Box>
                </TableCell>
                <TableCell><TextField sx={{ width: '115px', ml: '-20px' }} size="small" onChange={e => handleChange(e, 2)} onKeyDown={e => onKeyDown(e, 2)} ref={(el) => (inputRefs.current[2] = el?.querySelector('input'))}
                    name='credit' value={edit?.credit} InputProps={{ sx: { borderRadius: 3 } }} id="outlined-basic" variant="outlined" /></TableCell>
                <TableCell><TextField sx={{ width: '115px', ml: '-20px' }} size="small" onChange={e => handleChange(e, 3)} onKeyDown={e => onKeyDown(e, 3)} ref={(el) => (inputRefs.current[3] = el?.querySelector('input'))} name='debit' value={edit?.debit} InputProps={{ sx: { borderRadius: 3 } }} id="outlined-basic" variant="outlined" /></TableCell>
                <TableCell><TextField sx={{ width: '115px', ml: '-20px' }} size="small" onChange={e => handleChange(e, 4)} onKeyDown={e => onKeyDown(e, 4)} ref={(el) => (inputRefs.current[4] = el?.querySelector('input'))} name='remarks' value={edit?.remarks} InputProps={{ sx: { borderRadius: 3 } }} id="outlined-basic" variant="outlined" /></TableCell>
                <TableCell align="center">
                    <Stack direction='row'>
                        <IconButton aria-label="edit" onClick={() => dispatch()}>
                            <TaskAlt color='green' fontSize="small" />
                        </IconButton>
                    </Stack>
                </TableCell>
            </TableRow>
        )
    }
    return (
        <Grid>
            <Stack direction="row" py={2} style={{ marginBottom: '-10px' }} justifyContent="space-between">
                <Stack sx={{ flexGrow: 1 }}>
                    <Typography paddingRight={2}>
                        <Box sx={{ typography: 'body1', fontWeight: 'bold', color: 'text.main' }}>Journal</Box>
                    </Typography>
                </Stack>
                <Stack>
                    <Button size="small" variant="outlined" sx={{ color: 'text.main', borderRadius: 6, borderColor: 'text.light' }}
                        onClick={() => {
                            setRows(prev => [...prev, { id: rows?.length }])
                            setEdit({ id: rows?.length })
                        }}>
                        <AddIcon fontSize='small' /> <Box sx={{ typography: 'body2', pt: '2px', pr: 1, fontSize: '13px', fontWeight: 'light' }}>Add Item</Box>
                    </Button>
                </Stack>
            </Stack>

            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {['Account name', 'Type', 'Debit', 'Credit', 'Remark'].map(x => <TableCell sx={{ typography: 'body2', fontSize: '13px', fontWeight: 'light' }} >{x}</TableCell>)}
                            <TableCell sx={{ typography: 'body2', fontSize: '13px', fontWeight: 'light' }} align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => row.id === edit?.id ? <EditRows data={edit} dispatch={setEdit} /> : <CreateTableRows data={row} dispatch={setEdit} />)}

                        <TableRow >
                            <Stack direction='row' sx={{ m: 1 }}>
                            </Stack>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
