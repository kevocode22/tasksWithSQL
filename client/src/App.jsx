import { Route, Routes } from "react-router-dom";
import { pages } from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
const { NotFound, TaskPage, TaskForm } = pages;
import { TaskContextProvider } from "./context/TaskProvider.jsx";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <div>
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}
export default App;
