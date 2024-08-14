import React from "react";
import contacts from "./contacts";

function Cart(prop) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{prop.name}</h2>
        <img src={prop.img} className="circle-img" alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{prop.tel}</p>
        <p className="info">{prop.mail}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Cart
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Cart
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Cart
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
