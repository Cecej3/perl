import { Route, Routes } from "react-router-dom";
import AppLayout from "layout/AppLayout";
import BlankLayout from "layout/BlankLayout";
import {
  WithdrawPage,
  DashboardPage,
  LoginPage,
  RegisterPage,
  Users,
  DepositPage,
  Homepage,
  Profile,
  WithdrawPageBank,
  WithdrawPageCrypto,
} from "pages";
import "./App.scss";
import { Withdrawals, Pending, Deposits, Investments, Subcriptions } from "components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlankLayout children={<Homepage />} />} />
        <Route
          path="/login"
          element={<BlankLayout children={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<BlankLayout children={<RegisterPage />} />}
        />
        <Route
          path="/dashboard"
          element={<AppLayout children={<DashboardPage />} />}
        />
        <Route path="/profile" element={<AppLayout children={<Profile />} />} />
        <Route path="/users" element={<AppLayout children={<Users />} />} />
        <Route path="/users/:id" element={<AppLayout children={<Users />} />} />
        <Route
          path="/withdrawal"
          element={<AppLayout children={<WithdrawPage />} />}
        />
        <Route
          path="/withdrawal/bank"
          element={<AppLayout children={<WithdrawPageBank />} />}
        />
        <Route
          path="/withdrawal/cryptocurrency"
          element={<AppLayout children={<WithdrawPageCrypto />} />}
        />
        <Route
          path="/withdrawals"
          element={<AppLayout children={<Withdrawals />} />}
        />
        <Route
          path="/deposit"
          element={<AppLayout children={<DepositPage />} />}
        />
        <Route
          path="/deposits"
          element={<AppLayout children={<Deposits />} />}
        />
        <Route
          path="/plans"
          element={<AppLayout children={<Subcriptions dashboard />} />}
        />
        <Route
          path="/investments"
          element={<AppLayout children={<Investments />} />}
        />
        <Route
          path="/transactions-pending"
          element={<AppLayout children={<Pending />} />}
        />
      </Routes>
    </>
  );
}

export default App;
