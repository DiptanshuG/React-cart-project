import React from "react";

const CartItem = (props) => {
  //   testing()
  // {
  //     const promise=new Promise((resolve,reject)=>{
  //         setTimeout(()=>{
  //             resolve('done');
  //         },5000);

  //     })
  //     promise.then(()=>{
  //         this.setState({qty:this.state.qty +1});
  //         console.log('state',this.state);
  //     })
  // }
  // increaseQuantity = () => {
  //   this.state.qty +=1;
  //   console.log("this.state", this.state);
  //setstate form 1
  //   this.setState({
  //       qty:this.state.qty+1
  //   })

  //setstate form 2(jab previous state require ho tab use this)
  //     this.setState((prevState) => {
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     },()=>{
  //         console.log("this.state" ,this.state)
  //     });
  //   };
  //   decreaseQuantity = () => {
  //       const{qty}=this.state;
  //       if(qty==0){

  //           return;
  //       }
  //     this.setState((prevState) => {
  //       return {
  //         qty: prevState.qty - 1,
  //       };
  //     });
  //   };

  // console.log("this.props", this.props);
  const { price, title, qty } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, onDeleteProduct } = props;
  return (
    <div className="cart-item">
     
      <div className="left-block">
        <img style={styles.image}  src={product.img}/>
      </div>
      <div className="right-block">
        <div
          style={{
            fontSize: 25,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#777",
          }}
        >
          rs {price}
        </div>
        <div
          style={{
            color: "#777",
          }}
        >
          {qty}
        </div>
        <div className="cart-item-action">
          {/* { Button     } */}
          <img
            alt="increase"
            className="action-icons"
            src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
            onClick={() => onIncreaseQty(product)}
            />
            <img
            alt="decrease"
            className="action-icons"
            src="https://as1.ftcdn.net/v2/jpg/04/22/93/56/1000_F_422935625_gTnXZMO6EZZgjOvFDVNMfUFosiMNIppp.jpg"
            onClick={() => onDecreaseQty(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://as1.ftcdn.net/v2/jpg/04/59/27/56/1000_F_459275635_7ObmwPOgZKoIKzwwwxVOdnuStaXQs5kq.jpg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 2,
    background: "#ccc",
  },
};

export default CartItem;
