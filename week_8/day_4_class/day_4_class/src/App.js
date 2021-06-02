import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Counter />
        <Counter />
      </ErrorBoundary> */}

      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <Counter />
    </div>
  );
}

export default App;
