export const home = (req, res) => {
  return res.redirect("/order");
}

export const status = (req, res) => {
  return res.render("status");
}