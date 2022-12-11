import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div>
        <a
          className="btn btn-warning"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span className="fa-solid fa-calendar-days"></span> Bootstrap Button
        </a>
      </div>
    </Layout>
  );
}

export default App;
