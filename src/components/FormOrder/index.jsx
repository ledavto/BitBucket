export const FormOrder = () => {
  return (
    <div className="form-container">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            First and Last name
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class="mb-3">
          <label for="Phone" class="form-label">
            Phone
          </label>
          <input type="text" class="form-control" id="Phone" />
        </div>
        <div class="mb-3">
          <label for="City" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="City" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
