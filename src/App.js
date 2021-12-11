import React from "react";

import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }


  componentDidMount() {
    this.db.collection("products").onSnapshot(snapshot => {
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ products: products, loading: false });
    });
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    const items = products.filter(product => product.id !== id);

    this.setState({
      products: items
    });
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lg.com%2Fin%2Fimages%2Fwashing-machines%2Fmd07514753%2Fgallery%2FFHM1065ZDL-Washing-Machines-Front-View-D-01.jpg&imgrefurl=https%3A%2F%2Fwww.lg.com%2Fin%2Fwashing-machines%2Flg-fhm1065zdl&tbnid=85H5gwxagI-HxM&vet=12ahUKEwiI06GZhdv0AhVngmMGHevgAIcQMygBegUIARDLAg..i&docid=sWXWFV0rVM1vlM&w=1100&h=730&itg=1&q=washing%20%2Cmachine&ved=2ahUKEwiI06GZhdv0AhVngmMGHevgAIcQMygBegUIARDLAg",
        price: 900,
        qty: 1,
        title: "Washing Machine"
      })
      .then(docRef => {
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
