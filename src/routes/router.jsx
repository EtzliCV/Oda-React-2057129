import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Salsa from "../pages/salsa/salsa";
import Bachata from "../pages/bachata";



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
                <Route path="/bachata" exact>
                    <Bachata />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;