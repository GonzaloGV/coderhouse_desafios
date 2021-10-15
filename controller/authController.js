class AuthController {
  login(req, res) {
    const userName = req.body["user-name"];

    if (userName) {
      req.session.user = userName;
      res.redirect("/products");
    } else {
      res.send("Login failed");
    }
  }

  logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }

  loginView(req, res) {
    res.render("login");
  }
}

export default new AuthController();
