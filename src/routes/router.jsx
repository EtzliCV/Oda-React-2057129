import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Salsa from "../pages/salsa/salsa";



function Router() {
    return (
        <BrowserRouter basename="Oda-React-2057129">
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