export default function Container({sectionClass, containerClass, image, imageClass, showDiv, children}) {
    if (sectionClass) {
        return (
          <section className={sectionClass}>
            <div className="container">
              {children}
            </div>
            {image && <img className={imageClass} src={image} alt="" />}
            {showDiv && <div className="bg-colour"></div>}
          </section>
        );
    }
    return (
        <div className={containerClass}>
            {children}
        </div>
    );
}