import React, { Component, FunctionComponent, useState } from "react";
import Swal from "sweetalert2";
import "./MainPage.modules.css";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

// interface ICustomerData {
//   hasKtp: Boolean;
//   isWni: Boolean;
//   isDomisiliIndo: Boolean;
//   IsAgeOver21: Boolean;
//   hasSteadyJob: Boolean;
//   hasSteadyIncome: Boolean;
//   hasMonthlyIncome: Boolean;
//   hasPersonalBank: Boolean;
//   monthlyIncome: Number;
//   monthlySpending: Number;
//   suggestedDuration: Number;
//   loanAmount: Number;
//   hasValuableAsset: Boolean;
//   hasReachableRelative: Boolean;
//   isComplyPayment: Boolean;
//   isComplyService: Boolean;
// }

const API_URL: string = process.env.REACT_APP_API_URL as string;

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
  const [customerData, setCustomerData] = useState<ICustomerData | undefined>({
    hasKtp: false,
    isWni: false,
    isDomisiliIndo: false,
    isAgeOver21: false,
    hasSteadyIncome: false,
    hasSteadyJob: false,
    hasMonthlyIncome: false,
    hasPersonalBank: false,
    hasReachableRelative: false,
    hasValuableAsset: false,
    isComplyPayment: false,
    isComplyService: false,
    loanAmount: 0.0,
    monthlyIncome: 0.0,
    monthlySpending: 0.0,
    suggestedDuration: 0,
  });

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
  const [suggestedDuration, setSuggesteDuration] = useState(0);

  const submit = () => {};

  // const

  return (
    <div className="container">
      <h2>Hello Windy</h2>
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
