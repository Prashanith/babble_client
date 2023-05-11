import ContextProvider from "./providers/contextProvider";
import ApplicationRouter from "./navigation/applicationRouter";

function App() {
  return (
    <ContextProvider>
      <div className="w-full text-black bg-quarternery-d h-screen">
        <ApplicationRouter />
      </div>
    </ContextProvider>
  );
}

export default App;
