import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Box, Divider, Grid, IconButton, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import Items from './TableItems';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import OtherDetails from './otherDetails';
import PrintIcon from '@mui/icons-material/Print';



export default function ScrollDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');



    const handleClickOpen = () => {
        setOpen(true);
        setScroll('paper'); // Set scroll to 'paper' directly
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <React.Fragment>
            <style> {` ::-webkit-scrollbar {width: 10px; } `}</style>
            <Button onClick={handleClickOpen}>Invoice</Button>
            <Dialog maxWidth="md" fullWidth={true} PaperProps={{ style: { borderRadius: 20 } }}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title" >
                    <Stack direction="row" pt={2} style={{ marginBottom: '-10px' }}>
                        <Stack sx={{ flexGrow: 1 }} direction='row'>
                            <Typography paddingRight={2}><Box sx={{ typography: 'body1', fontWeight: 'bold', pt:'4px' }}>Journal</Box></Typography>
                            <TextField
                                sx={{ color: "primary.main", maxWidth: '130px', minWidth: '10px' }}
                                value='JV2023-6456466'
                                variant="standard"
                                InputProps={{ readOnly: false, disableUnderline: true }}
                            />
                            <Box pl={0}><IconButton ><BorderColorTwoToneIcon sx={{ width: '1%px', paddingBottom: '6px', color: "primary.main" }} fontSize='small' /> </IconButton></Box>
                            <Box pl={0}><IconButton><CheckCircleIcon sx={{ width: '20px', paddingBottom: '6px', color: "secondary.dark" }} /></IconButton> </Box>
                        </Stack>
                        <Stack>
                            <IconButton onClick={handleClose}><CloseIcon fontSize='small' /></IconButton>
                        </Stack>
                    </Stack>
                    <Stack direction="row" pt={0}>
                        <Box pt={1} sx={{ fontWeight: 'light', typography: 'body2' }}>Issuing data: </Box>
                        <Box pt={1} paddingLeft={1} sx={{ typography: 'body2', fontWeight: 'bold' }}>11 Jul 2023</Box>
                        <Box pt={1} pl={1}><BorderColorTwoToneIcon sx={{ width: '12px', paddingBottom: '8px', color: "primary.main" }} fontSize='small' /> </Box>
                    </Stack>
                </DialogTitle>
                <DialogContent style={{ overflow: 'auto' }} >
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    ><Grid container spacing={2} pb={4}>
                            <Grid item xs={5}>
                                <Paper variant="outlined" sx={{ mt: 0, borderRadius: 6, p: 2, height: '100%' }} max>
                                    <Typography variant='body2'>Issued by</Typography>
                                    <Stack direction="row" spacing={2} pt={2} pb={2}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        <Stack direction={'column'}>
                                            <Box sx={{ typography: 'body2', fontWeight: 'bold' }}>RayNext International</Box>
                                            <Box sx={{ typography: 'body2', fontWeight: 'light' }}>contact@raynext.com</Box>
                                        </Stack>
                                    </Stack>
                                    <Box sx={{ typography: 'body2', fontSize: '13px', fontWeight: 'light' }}>738 Ryleigh Station, 4th cross<br /> Times Square, New York </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={7}>
                                <Paper elevation={0} sx={{ mt: 0, borderRadius: 6, p: 2, bgcolor: "secondary.dark", height: '100%' }}>
                                    <Box sx={{ typography: 'body2', fontSize: '14px', fontWeight: 'bold' }}>Journal deatalis </Box>
                                </Paper>

                            </Grid>
                        </Grid>
                        <Stack>
                            <Items />
                        </Stack>
                        <Stack><OtherDetails /></Stack>

                    </DialogContentText>
                </DialogContent>
                <Divider />
                <DialogActions sx={{mb:0.5}}>
                    {/* <Stack direction="row" spacing={2} sx={{ minWidth: '100wv' }}>
                        <Box>Item 1</Box>
                        <Box><Button >Cancel</Button>
                            <Button onClick={handleClose}>Subscribe</Button></Box>
                        
                    </Stack> */}
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Box style={{ height: 50, textAlign: 'left', padding: 10 }}>
                            <Box sx={{ typography: 'body2', fontSize: '14px', fontWeight: 'bold' ,pl:2 }}>Summary</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box style={{ height: 50, textAlign: 'center', padding: 10 }}>
                                <Box sx={{ typography: 'body2', fontSize: '13px', fontWeight: 'light' }}>Debit Total</Box>
                                <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>$423.56</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box style={{ height: 60, textAlign: 'center', padding: 10 }}>
                                <Box sx={{ typography: 'body2', fontSize: '13px', fontWeight: 'light' }}>Credit Total</Box>
                                <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>$423.56</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box style={{ height: 50, textAlign: 'center', padding: 10 }}>
                                <IconButton sx={{ bgcolor: 'secondary.dark', mr: 2 }} size='small'><PrintIcon /></IconButton>
                                <Button onClick={handleClose} variant="contained" disableElevation={true} sx={{ textTransform: "none", borderRadius: 6, paddingX: 2 }} size='medium'>Save&Close</Button>
                            </Box>
                        </Grid>
                    </Grid>




                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


// <TableContainer component={Paper}>
//                         <Table sx={{ minWidth: 700 }} aria-label="spanning table">
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell align="center" colSpan={3}>
//                                         Details
//                                     </TableCell>
//                                     <TableCell align="right">Price</TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell>Desc</TableCell>
//                                     <TableCell align="right">Qty.</TableCell>
//                                     <TableCell align="right">Unit</TableCell>
//                                     <TableCell align="right">Sum</TableCell>
//                                 </TableRow>
//                             </TableHead></Table></TableContainer>