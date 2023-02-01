
/*
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>Pizza Napolitana</b>
          </h2>
          <h6>Ingrediente</h6>
          <ul>
            <li>Mozzarella</li>
            <li>Tomate</li>
            <li>Orégano</li>
            <li>Jamón</li>
          </ul>
          <h5>
            <b>Precio: $5.950</b>
          </h5>
          <div className="d-flex gap-2">
            <a
              href="/cart"
              className="btn btn-outline-primary"
            >
              Comprar
            </a>
            <a
              href="/pizzas/1"
              className="btn btn-outline-danger"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </article>

*/

import React from 'react';
import { usePizzasContext } from '../Context/PizzaContexto';

export default function Card({info}) {

  // Usar el Contexto

  const {pizzas, addPizzas, delPizzas} = usePizzasContext();

  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
    <div className="card">
      <img
        src={info.img}
        className="card-img-top"
        alt="card description"
      />
      <div className="card-body">
        <h2>
          <b>{info.name}</b>
        </h2>
        <h6>Ingrediente</h6>
        <ul>
          { 
            info.ingredients.map((ing,i) =>( 
              <li key={i}>{ing}</li>
              ))
          }
        </ul>
        <h5>
          <b> $ {(info.price).toLocaleString('es-CL')}</b>
        </h5>
        <div className="d-flex gap-2">
          <a
            href="/cart"
            className="btn btn-outline-primary"
          >
            Comprar
          </a>
          <a
            href="/pizzas/1"
            className="btn btn-outline-danger"
          >
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  </article>
);
}
