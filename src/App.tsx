import reloadAlert from "./hooks/reloadAlert";
import MainLayout from "./layout/MainLayout";

const App = () => {
  reloadAlert("if you want to reload? your data will be lost");
  return (
    <div className="max-w-screen-xl mx-auto bg-white">
      <MainLayout></MainLayout>
    </div>
  );
};

export default App;
