import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Outlet />
            </div>
        </Provider>
    );
}

export default App;
