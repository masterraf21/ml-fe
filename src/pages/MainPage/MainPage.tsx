import React, { Component, FunctionComponent, useState } from "react";
import { Dropdown, MainInput, Navbar } from "../../components";
import Swal from "sweetalert2";
import style from "./MainPage.module.scss";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

const API_URL: string = process.env.REACT_APP_API_URL as string;
const YES: string = "Pinjaman Anda Diterima";
const NO: string = "Pinjaman Anda Tidak Diterima";

const yesOptions: IDropdownOption[] = [
  {
    label: "Ya",
    value: "y",
  },
  {
    label: "Tidak",
    value: "n",
  },
];

const MySwal = withReactContent(Swal);

const MainPage = () => {
  const [result, setResult] = useState("");
  const [hasKTP, setHasKTP] = useState("");
  const [isWni, setIsWni] = useState("");
  const [isDomisiliIndo, setIsDomisiliIndo] = useState("");
  const [isAgeOver21, setIsAgeOver21] = useState("");
  const [hasSteadyIncome, setHasSteadyIncome] = useState("");
  const [hasSteadyJob, setHasSteadyJob] = useState("");
  const [hasMonthlyIncome, setHasMonthlyIncome] = useState("");
  const [hasPersonalBank, setHasPersonalBank] = useState("");
  const [hasReachableRelative, setHasReachableRelative] = useState("");
  const [hasValuableAsset, setHasValuableAsset] = useState("");
  const [isComplyPayment, setIsComplyPayment] = useState("");
  const [isComplyService, setIsComplyService] = useState("");
  const [loanAmount, setLoanAmount] = useState(0.0);
  const [monthlyIncome, setMonthlyIncome] = useState(0.0);
  const [monthlySpending, setMonthlySpending] = useState(0.0);
  const [suggestedDuration, setSuggestedDuration] = useState(0);

  let data = {
    has_ktp: hasKTP,
    is_wni: isWni,
    is_domisili_indo: isDomisiliIndo,
    is_age_over_21: isAgeOver21,
    has_steady_job: hasSteadyJob,
    has_steady_income: hasSteadyIncome,
    has_monthly_income: hasMonthlyIncome,
    has_personal_bank_account: hasPersonalBank,
    monthly_income: monthlyIncome,
    monthly_spending: monthlySpending,
    suggested_duration: suggestedDuration,
    loan_amount: loanAmount,
    has_valuable_asset: hasValuableAsset,
    has_reachable_relative: hasReachableRelative,
    is_comply_with_payment_terms: isComplyPayment,
    is_comply_with_service_terms: isComplyService,
  };

  const submit = async () => {
    MySwal.fire({
      title: "Please wait",
      showCloseButton: true,
      // showSpinner: true,
      showConfirmButton: false,
    });
    try {
      const result = await axios.post(`${API_URL}/api`, data);
      if (result.data.data === "y") {
        setResult(YES);
      } else {
        setResult(NO);
      }
      console.log(result);
      setTimeout(() => MySwal.close(), 500);
    } catch (e) {
      MySwal.close();
      MySwal.fire({
        title: "Ups terjadi error!",
        icon: "error",
        text: `error: ${e}`,
        timer: 2000,
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.result}>Result: {result}</div>
      <div className={style.inputContainer}>
        <MainInput
          setValue={setLoanAmount}
          title="Berapa uang yang ingin anda pinjam?"
          value={loanAmount}
        />

        <MainInput
          setValue={setSuggestedDuration}
          title="Berapa lama anda akan berencana mengembalikan?"
          value={suggestedDuration}
        />

        <Dropdown
          options={yesOptions}
          placeholder="KTP"
          setValue={setHasKTP}
          title="Apakah anda punya punya KTP?"
          value={hasKTP}
        />

        <Dropdown
          options={yesOptions}
          placeholder="Umur diatas 21"
          setValue={setIsAgeOver21}
          title="Apakah anda berumur di atas 21?"
          value={isAgeOver21}
        />

        <Dropdown
          options={yesOptions}
          placeholder="Domisili"
          setValue={setIsDomisiliIndo}
          title="Apakah anda berdomisili di Indonesia"
          value={isDomisiliIndo}
        />

        <Dropdown
          options={yesOptions}
          placeholder="Status WNI"
          setValue={setIsWni}
          title="Apakah anda berstatus  WNI?"
          value={isWni}
        />

        <Dropdown
          title="Apakah anda memiliki pekerjaan tetap?"
          options={yesOptions}
          placeholder="Pekerjaan tetap"
          setValue={setHasSteadyJob}
          value={hasSteadyJob}
        />

        <Dropdown
          title="Apakah anda memiliki pendapatan tetap?"
          options={yesOptions}
          placeholder="Pendapatan tetap"
          setValue={setHasSteadyIncome}
          value={hasSteadyIncome}
        />

        <Dropdown
          title="Apakah anda memiliki pendapatan bulanan?"
          options={yesOptions}
          placeholder="Pendapatan bulanan"
          setValue={setHasMonthlyIncome}
          value={hasMonthlyIncome}
        />

        <Dropdown
          title="Apakah anda memiliki rekening bank pribadi?"
          options={yesOptions}
          placeholder="Rekening pribadi"
          setValue={setHasPersonalBank}
          value={hasPersonalBank}
        />

        <MainInput
          title="Berapa pendapatan bulanan anda?"
          setValue={setMonthlyIncome}
          value={monthlyIncome}
        />

        <MainInput
          title="Berapa pengeluaran bulanan anda?"
          setValue={setMonthlySpending}
          value={monthlySpending}
        />

        <Dropdown
          title="Apakah anda punya aset berharga sebagai jaminan?"
          options={yesOptions}
          placeholder="Aset berharga"
          setValue={setHasValuableAsset}
          value={hasValuableAsset}
        />

        <Dropdown
          title="Apakah anda memiliki kerabat yang bisa dihubungi?"
          options={yesOptions}
          placeholder="Kerabat"
          setValue={setHasReachableRelative}
          value={hasReachableRelative}
        />

        <Dropdown
          title="Apakah bersedia memenuhi ketentuan syarat pembayaran dan jaminan"
          options={yesOptions}
          placeholder="Syarat pembayaran"
          setValue={setIsComplyPayment}
          value={isComplyPayment}
        />

        <Dropdown
          title="Apakah bersedia dengan ketentuan dan syarat layanan?"
          options={yesOptions}
          placeholder="Syarat layanan"
          setValue={setIsComplyService}
          value={isComplyService}
        />
      </div>
      <div className={style.loginContainer}>
        <button onClick={submit} className={style.loginButton} type="button">
          Cek Pinjaman
        </button>
      </div>
    </div>
  );
};

export default MainPage;
// export class MainPage extends Component<{}, MainProps> {
//   render() {
//     return (
//       <p>
//         <div>Hello</div>
//       </p>
//     );
//   }
// }
