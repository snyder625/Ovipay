import LandingPage from "../components/LandingPage/Index";
import BarPage from "../Pages/Charge/BarPage";
import InputForm from "../Pages/Charge/FieldsPage";
import ConfirmingForm from "../Pages/Charge/FieldsMarkPage";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Authentications from "../views/Authentications";
import ThirdPageLikeLogin from "../views/ThirdPageLikeLogin";
import CouponsHome from "../Pages/Coupons/Home";
import ConfirmationPayment from "../Pages/ShoppingPage/ConfirmationPayment";
import shoppingPage from "../Pages/ShoppingPage/Home";
import ShopFavourite from "../Pages/ShoppingPage/Favourite";
import ShoppingCart from "../Pages/ShoppingPage/Cart";
import ShippingDetails from "../Pages/ShoppingPage/ShippingDetails";
import ProductDetails from "../Pages/ShoppingPage/ProductDetails";
import GiftPage from "../Pages/Gift/Home";
import GiftFavourite from "../Pages/Gift/Favourite";
import GiftShipping from "../Pages/Gift/Shipping";
import GiftCart from "../Pages/Gift/Cart";
import GiftSearchProduct from "../Pages/Gift/SearchProduct";
import ListingPage from "../Pages/ListingPage/Home";
import ListingProductDetails from "../Pages/ListingPage/ListingProductDetails";
import Reviews from "../Pages/ListingPage/Reviews";
import ForgotPassword from "../views/ForgotPassword";
import FindUser from "../views/FindUser";
import NewPassword from "../views/NewPassword";
import CodeVerifier from "../views/CodeVerifier";
import AccountTransfer from "../Pages/Charge/AccountTransfer";
import AccountTransferTwo from "../Pages/Charge/AccountTransferTwo";
import AccountTransferThree from "../Pages/Charge/AccountTransferThree";
import TransferConfirmation from "../Pages/Charge/TransferConfirmation";
import AccountTransferFour from "../Pages/Charge/AccountTransferFour";
import SettingsPage from "../Pages/Settings/Home";
import EasyPasswordReset from "../Pages/Settings/EasyPasswordReset";
import ChangePasswordStep1 from "../Pages/Settings/ChangePasswordStep1";
import ChangePasswordStep2 from "../Pages/Settings/ChangePasswordStep2";
import ProductDetail from "../Pages/Gift/ProductDetail";
import ChangePersonalInformation from "../Pages/Settings/ChangePersonalInformation";
import PaymentMethodManagement from "../Pages/Settings/PaymentMethodManagement";

let routes = [
    {
        path: "/login",
        component: Login,
        layout: "auth",
    },
    {
        path: "/signup",
        component: Signup,
        layout: "auth",
    },
    {
        path: "/saved-login",
        component: ThirdPageLikeLogin,
        layout: "auth",
    },
    {
        path: "/forgot",
        component: ForgotPassword,
        layout: "auth",
    },
    {
        path: "/forgot/find",
        component: FindUser,
        layout: "auth",
    },
    {
        path: "/forgot/newpassword",
        component: NewPassword,
        layout: "auth",
    },
    {
        path: "/verify",
        component: CodeVerifier,
        layout: "auth",
    },
    {
        path: "/shopping/confirm-payment",
        component: ConfirmationPayment,
        layout: "main",
    },
    {
        path: "/",
        component: LandingPage,
        layout: "main",
    },
    {
        path: "/charge/bar-input",
        component: BarPage,
        layout: "main",
    },
    {
        path: "/charge/account-transfer",
        component: AccountTransfer,
        layout: "main",
    },
    {
        path: "/charge/account-transfer-two",
        component: AccountTransferTwo,
        layout: "main",
    },
    {
        path: "/charge/account-transfer-three",
        component: AccountTransferThree,
        layout: "main",
    },
    {
        path: "/charge/confirmation",
        component: TransferConfirmation,
        layout: "main",
    },
    {
        path: "/charge/account-transfer-four",
        component: AccountTransferFour,
        layout: "main",
    },
    {
        path: "/charge/input-form",
        component: InputForm,
        layout: "main",
    },
    {
        path: "/charge/confirm-form",
        component: ConfirmingForm,
        layout: "main",
    },
    {
        path: "/auth",
        component: Authentications,
        layout: "auth",
    },
    {
        path: "/my-coupon",
        component: CouponsHome,
        layout: "main",
    },
    {
        path: "/shopping-home",
        component: shoppingPage,
        layout: "main",
    },
    {
        path: "/shopping/favourte",
        component: ShopFavourite,
        layout: "main",
    },
    {
        path: "/shopping/mycart",
        component: ShoppingCart,
        layout: "main",
    },
    {
        path: "/shopping/delivery-details",
        component: ShippingDetails,
        layout: "main",
    },
    {
        path: "/shopping/product-details",
        component: ProductDetails,
        layout: "main",
    },

    {
        path: "/gift-home",
        component: GiftPage,
        layout: "auth",
    },
    {
        path: "/gift/favourite",
        component: GiftFavourite,
        layout: "auth",
    },
    {
        path: "/gift/mycart",
        component: GiftCart,
        layout: "auth",
    },
    {
        path: "/gift/delivery-details",
        component: GiftShipping,
        layout: "auth",
    },
    {
        path: "/gift/search-product",
        component: GiftSearchProduct,
        layout: "main",
    },
    {
        path: "/gift/product-detail",
        component: ProductDetail,
        layout: "auth",
    },
    {
        path: "/listing-page",
        component: ListingPage,
        layout: "main",
    },
    {
        path: "/listing/listingProduct-details",
        component: ListingProductDetails,
        layout: "main",
    },
    {
        path: "/listing/reviews",
        component: Reviews,
        layout: "main",
    },
    {
        path: "/settings",
        component: SettingsPage,
        layout: "main",
    },
    {
        path: "/settings/reset-password",
        component: EasyPasswordReset,
        layout: "main",
    },
    {
        path: "/settings/change-password/step-1",
        component: ChangePasswordStep1,
        layout: "main",
    },
    {
        path: "/settings/change-password/step-2",
        component: ChangePasswordStep2,
        layout: "main",
    },
    {
        path: "/settings/change-personal-information",
        component: ChangePersonalInformation,
        layout: "main",
    },
    {
        path: "/settings/payment-method-management",
        component: PaymentMethodManagement,
        layout: "main",
    },
];
export default routes;
