import Home from "./pages/Home";
import { Route } from "react-router-dom";
import { ModalContent } from "./pages/UserModal";
import { ContextApiUsers } from "./context/contextApiUsers";

function App() {
  return (
    <ContextApiUsers>
      <Route path="/" component={Home} />
      <Route path={`/:page/user/:id`} component={ModalContent} />
    </ContextApiUsers>
  );
}

export default App;
