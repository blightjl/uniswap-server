import * as dao from "./dao.js";

let currentAccount = null;

function AccountRoutes(app) {
    const createAccount = async (req, res) => {
        const account = await dao.createAccount(req.body);
        res.json(account);
    };

    const register = async (req, res) => {
        console.log("REGISTERING ATTEMPT");
        const account = await dao.findAccountByUsername(req.body.username);
        if (account) {
            res.status(404).json(
                { message: "Username already taken"}
            );
        }
        // const currentAccount = await dao.createAccount(req.body);
        // req.session["currentAccount"] = currentAccount;
        currentAccount = await dao.createAccount(req.body);
        res.json(currentAccount);
    }

    const login = async (req, res) => {
        console.log("LOGING IN");
        // const { username, password } = req.body;
        // const currentAccount = await dao.findAccountByCredentials(username, password);
        // if (currentAccount) {
        //     req.session["currentAccount"] = currentAccount;
        //     res.json(currentAccount);
        //     console.log("LOGGED IN!");
        // } else {
        //     // res.sendStatus(404);
        //     console.log("FAILED TO LOG IN!");
        // }
    };

    const home = async (req, res) => {
        const currentAccount = req.session["currentAccount"];
        if (!currentAccount) {
            res.sendStatus(404);
        }
        res.json(currentAccount);
    };

    const findAllAccounts = async (req, res) => {
        const accounts = await dao.findAllAccounts();
        res.json(accounts);
    };

    app.get("/api/accounts", findAllAccounts);
    app.post("/api/accounts", createAccount);
    app.post("/api/accounts/register", register);
    app.post("/api/accounts/login", login);
    app.post("/api/accounts/home", home);
}

export default AccountRoutes;