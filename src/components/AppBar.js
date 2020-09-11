import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  appBar: {
    flex: 1,
    padding: '28px 0px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    float:'left',
    margin: '0px 15px'
  },
  links: {
    textDecoration: "none",
    color:'red',
    margin: '0px 15px'
  }
})

class AppBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { classes, value, label, id } = this.props;
    return (
        <div className={classes.appBar} >
          <text className={classes.title}>The Carmel Kama'aina</text>
          <Link to='/' className={classes.links}>Home</Link>
          <Link to='/About/' className={classes.links}>About</Link>
          <Link to='/ThemedWeek/' className={classes.links}>Themed Week</Link>
          <Link to='/LatestPosts/' className={classes.links}>Latest Posts</Link>
          <Link to='/ByMeal/' className={classes.links}>By Meal</Link>
          <Link to='/ByType/' className={classes.links}>By Type</Link>
        </div>
    )
  }
}

export default withStyles(styles)(AppBar);