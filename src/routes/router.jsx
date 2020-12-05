import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Salsa from "../pages/salsa/salsa";



function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/salsa" exact>
                    <Salsa />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;