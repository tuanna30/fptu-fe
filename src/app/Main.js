import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";
import { loadReCaptcha } from "react-recaptcha-google";
import Loading from "./modules/loading/Loading";
import App from "./App";

const LandingPage = Loadable({
    loader: () =>
        import(/* webpackChunkName: "landingPage" */ "./modules/landing-page/LandingPage"),
    loading: () => <Loading />,
    modules: ["../app/modules/landing-page/LandingPage"],
    webpack: () => [
        require.resolveWeak("../app/modules/landing-page/LandingPage"),
    ],
});

class Main extends Component {
    componentDidMount() {
        // Load captcha
        loadReCaptcha();
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/*" component={App} />
                </Switch>

                <Link to="/medium">
                    <img
                        alt="Gopher Icon"
                        src="/assets/images/gopher.svg"
                        style={{
                            maxWidth: "70px",
                            position: "fixed",
                            bottom  : "10px",
                            right   : "10px",
                        }}
                    />
                </Link>
            </React.Fragment>
        );
    }
}

export default Main;
