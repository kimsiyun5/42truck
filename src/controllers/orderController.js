import Order from "../models/Order"; 

export const getOrder = (req, res) => {
  return res.render("order");
}

export const postOrder = async (req, res) => {
  const {
    hot_dog,
    bake,
    pizza,
    intraID,
    orderer,
    phone_number,
    comments
  } = req.body;
  const order = await Order.create({
    menu: {
      hot_dog,
      bake,
      pizza
    },
    intraID,
    orderer,
    phone_number,
    comments
  });
  const totalPrice = hot_dog * 3000 + bake * 6000 + pizza * 20000;
  return res.render("status", { order, totalPrice });
};