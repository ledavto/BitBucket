export const FormOrder = () => {
  return (
    <div className="form-container">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            First and Last name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="Phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="City" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="City" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
