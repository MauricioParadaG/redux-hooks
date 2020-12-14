import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewProductAction } from "../actions/productActions";

const NewProduct = ({history}) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const loading = useSelector( state => state.products.loading );
  const error = useSelector(state => state.products.error);

  const addProduct = product => dispatch (createNewProductAction(product)); 

  const handleSubmitNewProduct = (event) => {
    event.preventDefault();

    addProduct({name, price});

    history.push('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new product
            </h2>

            <form onSubmit={handleSubmitNewProduct}>
              <div className="form-group">
                <label> Product name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new Product"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label> Product price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Add the product price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>
            { loading ? <p>Adding new product...</p> : null }

            { error ? <p className="alert alert-danger p2 mt-4 text-center">There was an error</p> : null }

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
