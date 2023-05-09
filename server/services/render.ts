exports.homeRoutes = (req: any, res: any) => {
    res.render('index');
}

exports.addUser = (req: any, res: any) => {
    res.render("add_user");
}

exports.updateUser = (req: any, res: any) => {
    res.render("update_user");
}