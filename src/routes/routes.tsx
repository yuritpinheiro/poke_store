import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import PokeShop from '../pages/poke-shop/PokeShop';
import PokeCart from '../pages/poke-cart/PokeCart';
import PreviewComponent from '../pages/preview-component/PreviewComponent';

function PokeRouter() {
    return (
        <Router>
            {/* <header>
                <nav style={{ display: 'flex', flexDirection: 'row' }}>
                    <Link to="/shop">Poke Shop</Link>
                    <Link to="/cart">Poke Cart</Link>
                    <Link to="/preview">Component Preview</Link>
                </nav>
            </header> */}
            <main>
                <Switch>
                    <Route exact path="/">
                        <PokeShop />
                    </Route>
                    <Route path="/shop">
                        <PokeShop />
                    </Route>
                    <Route path="/cart">
                        <PokeCart />
                    </Route>

                    <Route path="/preview">
                        <PreviewComponent />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default PokeRouter;