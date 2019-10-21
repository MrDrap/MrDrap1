import ContractPage from "./components/ContractPage/ContractPage";
import UsersPage from "./components/UsersPage/UsersPage";
import AddressesPage from "./components/AddressesPage/AddressesPage";
import JournalPage from "./components/JournalPage/JournalPage";
import TransactionsPage from "./components/TransactionsPage/TransactionsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import UserDetail from "./components/UsersPage/UserDetail/UserDetail";
import AddAddressModal from "./components/modals/AddAddress/AddAddressModal";

const routes = [
  { path: '/contract', exact: true, component: ContractPage },
  { path: '/users', exact: true, component: UsersPage },
  { path: '/users/:userId', exact: false, component: UserDetail },
  { path: '/addresses', exact: true, component: AddressesPage },
  { path: '/journal', exact: true, component: JournalPage },
  { path: '/transactions', exact: true, component: TransactionsPage },
  { path: '/profile', exact: true, component: ProfilePage },
];

export default routes;
