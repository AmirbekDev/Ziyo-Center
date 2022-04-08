import React from 'react'
import routes from "./routes"
import {Switch, Route ,Redirect} from "react-router-dom"
import Navbar from "./Header-Footer/Navbar";
import Footer from "./Header-Footer/Footer";



function App() {
    return (
        <div className="wrapper">
            <div className="header">
                <Navbar/>
            </div>

            <div className="routes">
                <Switch>
                    {
                        routes.map(item => {
                            return <Route
                                key={item.id}
                                path={item.path}
                                component={item.component}
                                exact
                            />
                        })
                    }
                    <Redirect to="/404" />
                </Switch>
            </div>

            <Footer/>

        </div>
    );
}

export default App;
