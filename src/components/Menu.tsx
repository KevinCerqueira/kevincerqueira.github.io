import React from 'react'
import '../assets/css/Menu.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
	  textAlign: 'center',
	  width: '600px'
    },
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
  }),
)

export default function Menu(){
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<Avatar 
				alt="Kevin Cerqueira" 
				className={classes.large} 
				src="https://avatars1.githubusercontent.com/u/38994372?s=400&u=f2c9bc80e82067ada42293ba0b87c0af62796e56&v=4" 
			/>
		</div>
	)
}