import model from "./model.js"

export const createAccount = (account) => {
    delete account._id
    model.create(account);
};
export const findAllAccounts = () => model.find();
export const findAccountByUsername = (username) => model.findOne({ username: username });
export const findAccountByCredentials = (username, password) => model.findOne({ username, password });
export const findUserById = (userId) => model.findById(userId);
export const addProduct = (userID, product) => {
    const profile = findUserById(userID);
    if (!profile.products.includes(product)) {
        model.updateOne({ _id: userID }, { $set: { products: [...account.products, product] } })
    }
};
export const updateProduct = (account) => model.updateOne({ _id: account._id }, { $set: { name: account.name, bio: account.bio }})
