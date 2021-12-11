interface ICustomerData {
  hasKtp: Boolean;
  isWni: Boolean;
  isDomisiliIndo: Boolean;
  isAgeOver21: Boolean;
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

interface IDropdownOption {
  value: string | Number;
  label: string;
}
