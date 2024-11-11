import Toggle from "./modules/toggle";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
        color: "#333",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Compound Demo</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toggle>
          <Toggle.Active>Active</Toggle.Active>
          <Toggle.Inactive>Inactive</Toggle.Inactive>
          <div>
            <Toggle.ToggleTrigger />
          </div>
        </Toggle>
      </div>
    </div>
  );
}

export default App;
