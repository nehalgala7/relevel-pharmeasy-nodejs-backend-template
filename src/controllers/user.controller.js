const createUser = (req, res) => {
    //createUser api logic here
};

const addMedicineToCart = (req, res) => {
    //addMedicineToCart api logic here
};

const removeMedicineFromCart = (req, res) => {
    //removeMedicineFromCart api logic here
};

const viewCart = (req, res) => {
    //viewCart api logic here
};

const placeOrder = (req, res) => {
    //placeOrder api logic here
};

const viewOrders = (req, res) => {
    //viewOrders api logic here
};

const cancelOrder = (req, res) => {
    //createUser api logic here
};

const purchaseMembership = (req, res) => {
    //purchaseMembership api logic here
};

const cancelMembership = (req, res) => {
    //cancelMembership api logic here
};

const UserController = {
    createUser,
    addMedicineToCart,
    removeMedicineFromCart,
    viewCart,
    placeOrder,
    viewOrders,
    cancelOrder,
    purchaseMembership,
    cancelMembership
};

module.exports = UserController;