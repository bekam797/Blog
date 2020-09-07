/* eslint-disable arrow-parens */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navigationitems from '../Navigationitems/Navigationitems';
import SideDrawer from '../SideDrawer/SideDrawer';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

import './Toolbar.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: '#081730',
  },
  colorPrimary: {
    backgroundColor: '#ffffff',
    opacity: '0.9',
    boxShadow: '0 10px 20px 0 rgba(47, 107, 185, 0.07)',
  },
  gutters: {
    maxWidth: '1420px',
  },
  insideGutters: {
    justifyContent: 'space-between',
    padding: 0,
  },
}));

const ToolbarComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Container fixed className={classes.gutters}>
          <Toolbar className={classes.insideGutters}>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
            <div className="DesctopOnly">
              <Navigationitems />
            </div>
            <div className="DesctopOnly">
              <LanguageSwitcher />
            </div>
            <div className="MobileOnly">
              <SideDrawer />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default ToolbarComponent;
