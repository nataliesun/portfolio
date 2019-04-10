import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Project from './Project';

import './ProjectList.css';


const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#FDE6E2'
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Lekton',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        button: {
            textTransform: 'none',
            letterSpacing: .75
        },
    },
},
)



class ProjectList extends Component {
    render() {
        const projects = this.props.projects.map((p, i) => <Project key={i}{...p} />)
        return (
            <main className="ProjectList">
                <MuiThemeProvider theme={theme}>
                    <Button variant="contained" color="secondary">
                        <FontAwesomeIcon icon={faFilter} />
                        &nbsp;Filter
                    </Button>
                </MuiThemeProvider>
                <div className="projects">
                    {projects}
                </div>
            </main>
        )
    }
}

export default ProjectList;