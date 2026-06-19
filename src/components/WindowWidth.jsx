import useWindowWidth from "../hooks/useWindowWidth";

function WindowWidth() {
  const width = useWindowWidth();

  return (
    <section className="card">
      <h2>Custom Hook</h2>
      <p className="width">{width}px</p>
      <p>This value is generated from a custom useWindowWidth hook.</p>
    </section>
  );
}

export default WindowWidth;