function Carrousel({ children }) {
  return (
    <div className="splide mb-12">
      <div className="splide__track">
        <ul className="splide__list">{children}</ul>
      </div>
    </div>
  );
}

export { Carrousel };
