import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import Items from '../components/TableItems';

export default function MediumSizeDialog() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const theme = useTheme();

    const handleClickOpen = (scrollType) => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={() => handleClickOpen('paper')}> Invoice </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth={true} PaperProps={{ style: { borderRadius: 20 } }}>
                <Box p={4}>
                    <DialogTitle>
                        <Stack direction="row" pt={1}>
                            <Typography paddingRight={2}><Box sx={{ typography: 'body1', fontWeight: 'bold' }}>Journal</Box></Typography>
                            <Typography sx={{ color: "primary.main" }}>JV2023-646466</Typography>
                            <Box pl={1}><BorderColorTwoToneIcon sx={{ width: '15px', paddingBottom: '6px', color: "primary.main" }} fontSize='small' /> </Box>
                        </Stack>
                        <Stack direction="row" pt={-1}>
                            <Box pt={1} sx={{ fontWeight: 'light', typography: 'body2' }}>Issuing data: </Box>
                            <Box pt={1} paddingLeft={1} sx={{ typography: 'body2', fontWeight: 'bold' }}>11 Jul 2023</Box>
                            <Box pt={1} pl={1}><BorderColorTwoToneIcon sx={{ width: '12px', paddingBottom: '8px', color: "primary.main" }} fontSize='small' /> </Box>
                        </Stack>
                    </DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <Grid container spacing={2} pb={6}>
                            <Grid item xs={5}>
                                <Paper variant="outlined" sx={{ mt: 2, borderRadius: 6, p: 2, height: '100%' }} max>
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
                                <Paper elevation={0} sx={{ mt: 2, borderRadius: 6, p: 2, bgcolor: "secondary.dark", height: '100%' }}>hi</Paper>
                            </Grid>
                        </Grid>
                        <Stack>
                            <Items />
                        </Stack>
                    </DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                </Box>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
