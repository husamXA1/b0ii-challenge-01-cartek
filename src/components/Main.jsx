export default function Hero() {
  return (
    <main className="d-flex justify-content-center align-items-center text-white">
      <div className="container">
        <h1 className="border-bottom border-5 display-1">Cartek.</h1>
        <p className="fs-4 mt-5">
          Cartek is a a platform for automotive dealers to manage their
          inventory and sales. it tracks cars and rental cars.
        </p>
        <div className="d-flex">
          <button className="btn btn-light me-3 px-4 py-3">
            SERVICES <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className="btn btn-outline-light px-4 py-3">About us</button>
        </div>
      </div>
    </main>
  );
}
