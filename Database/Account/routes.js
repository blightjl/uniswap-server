import * as dao from "./dao.js";

let currentAccount = null;

function AccountRoutes(app) {
    const createAccount = async (req, res) => {
        const account = await dao.createAccount(req.body);
        res.json(account);
    };

    const register = async (req, res) => {
        const account = await dao.findAccountByUsername(req.body.username);
        if (account) {
            res.status(404).json(
                { message: "Username already taken"}
            );
        }
        const currentAccount = await dao.createAccount(req.body);
        req.session["currentAccount"] = currentAccount;
        res.json(currentAccount);
    }

    const login = async (req, res) => {
        const { username, password } = req.body;
        const currentAccount = await dao.findAccountByCredentials(username, password);
        console.log(currentAccount)
        if (currentAccount) {
            req.session["currentAccount"] = currentAccount;
            res.json(req.session["currentAccount"]);
            console.log("LOGGED IN!");
        } else {
            res.sendStatus(404);
            console.log("FAILED TO LOG IN!");
        }
    };

    const logout = async (req, res) => {
        req.session["currentAccount"] = '';
        res.sendStatus(200);
    }

    const home = async (req, res) => {
        const currentAccount = req.session["currentAccount"];
        if (!currentAccount) {
            res.sendStatus(404);
        } else {
            res.json(currentAccount);
        }
    };

    const findAllAccounts = async (req, res) => {
        const accounts = await dao.findAllAccounts();
        res.json(accounts);
    };

    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
    }

    const findUserByName = async (req, res) => {
        const user = await dao.findAccountByUsername(req.params.userName);
        res.json(user);
    }

    const addProduct = async (req, res) => {
        const userId = req.userId;
        const product = req.body;
        const profile = await dao.addProduct(userId, product);
        res.json(profile);
    }

    const updateAccount = async (req, res) => {
        const account = req.body;
        const newAccount = await dao.updateProduct(account);
        res.status(200);
    }

    app.get("/api/accounts", findAllAccounts);
    app.post("/api/accounts", createAccount);
    app.post("/api/accounts/register", register);
    app.post("/api/accounts/login", login);
    app.post("/api/accounts/logout", logout);
    app.post("/api/accounts/home", home);
    app.get("/api/accounts/:userId", findUserById);
    app.get("/api/accounts/name/:userName", findUserByName);
    app.put("/api/accounts/addProduct/:userId", addProduct);
    app.put("/api/accounts/update", updateAccount);
}

export default AccountRoutes;