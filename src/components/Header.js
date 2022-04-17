import React from 'react'
import search from '../assets/search.svg'
import pinterest from '../assets/pinterest.svg'

import { TextField } from '@mui/material'
import { withStyles } from '@mui/styles'
import ViewMode from './ViewMode'

const primaryColor = '#D7143A'
const StyledTextField = withStyles({
    root: {
        '& label': {
            color: '#ffffff70',
            fontWeight: 'bold',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
        },
        '& label.Mui-focused': {
            color: primaryColor,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: primaryColor,
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            paddingLeft: 10,
            '& fieldset': {
                borderRadius: '90px',
                borderColor: 'transparent',
                backgroundColor: '#ffffff10',
            },
            '&.Mui-focused fieldset': {
                borderColor: primaryColor,
            },
        },
    },
})(TextField);

export default function Header(props) {
    return (
        <div className='Header'>
            <img src={pinterest} alt="pinterest" id='appicon' />
            <div id="searchbar" >
                <StyledTextField id="searchbar" label="Search" variant="outlined"
                    style={{ width: '100%' }}
                    InputProps={{
                        endAdornment: <img src={search} style={{ width: "18px", marginRight: "12px" }} />,
                    }}
                    onChange={(e) => props.setSearchTerm(e.target.value)} />
            </div>
            < ViewMode viewMode={props.viewMode} setViewMode={props.setViewMode} />
        </div>
    )
}
