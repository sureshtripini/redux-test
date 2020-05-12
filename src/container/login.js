import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginSuccess } from '../redux/actions';
import Success from './success'

class Login extends Component {

    constructor(props) {
        super(props);
        console.log("props:" + props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserAuthentication = this.handleUserAuthentication.bind(this);
        this.state = {
            isLoggedIn: false,
            username: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let pwd = document.getElementById("password").value;
        this.handleUserAuthentication(email, pwd);

    }

    handleUserAuthentication = (email, password) => {
        this.props.login({ name: email });
    }

    render() {
        return (
            !this.props.isLoggedIn ?
                <Container maxWidth="xs">
                    <CssBaseline />
                    <div>
                        <Avatar >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                    </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                            </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
                : <Success />
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.user;
    return {
        isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user) => dispatch(loginSuccess(user))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

