import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Salsa from "../pages/salsa/salsa";
import Bachata from "../pages/bachata/bachata";
import Merengue from "../pages/merengue/merengue";
import AfroDance from "../pages/afrodance/afrodance";
import Hiphop from "../pages/hiphop/hiphop";
import Reggaeton from "../pages/reggaeton/reggaeton";
import DanceHall from "../pages/dancehall/dancehall";
import Commercial from "../pages/commercial/commercial";



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
                <Route path="/merengue" exact>
                    <Merengue />
                </Route>
                <Route path="/afrodance" exact>
                    <AfroDance />
                </Route>
                <Route path="/hiphop" exact>
                    <Hiphop />
                </Route>
                <Route path="/reggaeton" exact>
                    <Reggaeton />
                </Route>
                <Route path="/dancehall" exact>
                    <DanceHall />
                </Route>
                <Route path="/commercial" exact>
                    <Commercial />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;