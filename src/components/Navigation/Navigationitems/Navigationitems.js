import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  paper: {
    boxShadow: 'inherit',
  },
  link: {
    padding: '18px 12px',
    minWidth: '0',
    marginRight: '16px',
  },
});

const Navigationitems = props => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (props.type === 'mobile') {
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem component={Link} to="/">
            <ListItemText primary="მთავარი" />
          </ListItem>
          <ListItem component={Link} to="/">
            <ListItemText primary="ხელოვნება" />
          </ListItem>
          <ListItem component={Link} to="/">
            <ListItemText primary="ანალიტიკა" />
          </ListItem>
          <ListItem component={Link} to="/">
            <ListItemText primary="შესახებ" />
          </ListItem>
        </List>
      </div>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <Tab label="მთავარი" component={Link} to="/" className={classes.link} />
        <Tab
          label="ხელოვნება"
          component={Link}
          to="/"
          className={classes.link}
        />
        <Tab
          label="ანალიტიკა"
          component={Link}
          to="/"
          className={classes.link}
        />
        <Tab label="შესახებ" component={Link} to="/" className={classes.link} />
      </Tabs>
    </Paper>
  );
};

export default Navigationitems;
