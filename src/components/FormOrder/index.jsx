import axios from 'axios';
import Notiflix from 'notiflix';
const URL = 'https://bitbucket-backend.onrender.com';

export const FormOrder = () => {
  const addOrder = async data => {
    const order = await axios.post(`${URL}/api/order/`, data);
    return order;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const newOrder = {
      name: e.target.name.value,
      email: e.target.email.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
    };

    const addObj = addOrder(newOrder).then(elem => elem);
    console.log(addObj);
    Notiflix.Notify.success('Order created!');
    form.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            First and Last name
          </label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">
            Phone
          </label>
          <input type="text" name="phone" className="form-control" id="Phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="City" className="form-label">
            City
          </label>
          <input type="text" name="city" className="form-control" id="City" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
