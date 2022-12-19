import { Provider } from "react-redux";
import {store, persistor} from "./redux/store"
import { PersistGate } from "redux-persist/lib/integration/react";

import Main from "./pages/Main";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main/>
      </PersistGate>
    </Provider>
  );
};

export default App;
