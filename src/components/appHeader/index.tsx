import { useContext, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import r from '../../mock-data.json';
import { AppContext } from '../../app';
import './styles.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '40px',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      // '&:focus': {
      //   width: '400px',
      // },
    },
  },
}));

const names = r.map(a => a.first_name);

export default function AppHeader() {
  const classes = useStyles();
  const { searchKeyword, setSearchKeyword } = useContext(AppContext);
  const filterNames = names.filter(n => n.toLowerCase().includes(searchKeyword.toLowerCase()));
  const [listVisibilityState, toggleListVisibility] = useState(false);
  return (
    <header className="app__header">
      <div className="brand">Hewlett Packard - Pulse Check</div>
      <div className={classes.root}>
        <ClickAwayListener onClickAway={() => toggleListVisibility(false)}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
              onFocus={() => toggleListVisibility(true)}
              inputProps={{ 'aria-label': 'search' }}
            />
            {listVisibilityState && (
              <Paper elevation={3}>
                <div className="search-list">
                  <div>
                    {filterNames.map(n => <div className="list-item" onClick={() => {
                      setSearchKeyword(n);
                      // setValue(n);
                      toggleListVisibility(false);
                    }} >{n}</div>)}
                  </div>
                </div>
              </Paper>
            )}
          </div>
        </ClickAwayListener>
      </div>
    </header>
  )
}
