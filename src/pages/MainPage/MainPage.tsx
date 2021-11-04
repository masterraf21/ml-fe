import React, { Component, FunctionComponent, useState } from "react";

interface ICustomerData {
  hasKtp: Boolean;
  isWni: Boolean;
  isDomisiliIndo: Boolean;
  IsAgeOver21: Boolean;
  hasSteadyJob: Boolean;
  hasSteadyIncome: Boolean;
  hasMonthlyIncome: Boolean;
  hasPersonalBank: Boolean;
  monthlyIncome: Number;
  monthlySpending: Number;
  suggestedDuration: Number;
  loanAmount: Number;
  hasValuableAsset: Boolean;
  hasReachableRelative: Boolean;
  isComplyPayment: Boolean;
  isComplyService: Boolean;
}

const MainPage = () => {
  const [customerData, setCustomerData] = useState<ICustomerData | undefined>({
    hasKtp: false,
    isWni: false,
    isDomisiliIndo: false,
    IsAgeOver21: false,
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

  return (
    <div>
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
