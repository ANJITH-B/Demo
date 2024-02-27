import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';


const OtherDetails = () => {
    return (<>
        <Typography py={2}>
            <Box sx={{ typography: 'body1', fontWeight: 'bold', color: 'text.main' }}>OtherDetails</Box>
        </Typography>
        <Typography py={2}>
            <Box sx={{ typography: 'body1', fontSize: '13px', fontWeight: 'light', color: 'text.main' }}>Description</Box>
        </Typography>
        <Paper fullWidth sx={{  borderRadius: 3,p: 2 }} variant="outlined">
            <Typography py={2}>
                <Box sx={{ typography: 'body1', fontSize: '13px', fontWeight: 'light', color: 'text.main' }}>
                    Journal is a consise record of all transaction a business condutucts: journal entries detail how transactions
                     affect accounts and banlances. All financial reporting is based on the data contained in journal entries, and 
                     there are various types to meeet business needs.
                </Box>
            </Typography>
        </Paper>

        <Stack direction="row" py={2} style={{ marginBottom: '-10px' }} justifyContent="space-between">
            <Stack sx={{ flexGrow: 1 }}>
            </Stack>
            <Stack>

            </Stack>
        </Stack>
    </>
    )
}

export default OtherDetails