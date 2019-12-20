// export default withRouter(Signup);
import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { validationForm } from "../component/validate";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AnchorLink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { axios } from "../component/helpers";

import { HeaderAuth } from "../component";

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function Signup(props) {
    const classes = useStyles();
    const [image, setImage] = React.useState(null);
    const [type, setType] = React.useState(null);

    const handleImage = event => {
        setType(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <Fragment>
            <HeaderAuth
                jumbotronTitle="Belserion Hotel"
                jumbotronSubtitle="Luxury Resort &amp; Spa"
            ></HeaderAuth>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validate={validationForm}
                        onSubmit={values => {
                            let formData = new FormData();

                            for (const key in values) {
                                if (values.hasOwnProperty(key)) {
                                    formData.append(key, values[key]);
                                    if (key === "image") {
                                        formData.append(key, values.image.file);
                                    }
                                }
                            }

                            axios()
                                .post(`/users`, values)
                                .then(response => {
                                    if (response.status === 201) {
                                        props.history.push("/signin");
                                    }
                                });
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            isSubmitting
                        }) => (
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="uname"
                                            name="name"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            defaultValue={values.name}
                                        />
                                        <p
                                            style={{
                                                color: "red",
                                                fontStyle: "italic"
                                            }}
                                        >
                                            <ErrorMessage name="name" />
                                        </p>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            defaultValue={values.email}
                                        />
                                        <p
                                            style={{
                                                color: "red",
                                                fontStyle: "italic"
                                            }}
                                        >
                                            <ErrorMessage name="email" />
                                        </p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            defaultValue={values.password}
                                        />
                                        <p
                                            style={{
                                                color: "red",
                                                fontStyle: "italic"
                                            }}
                                        >
                                            <ErrorMessage name="password" />
                                        </p>
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link to="/signin">Have an Account?, Sign in</Link>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </div>
            </Container>
        </Fragment>
    );
}

export default withRouter(Signup);
