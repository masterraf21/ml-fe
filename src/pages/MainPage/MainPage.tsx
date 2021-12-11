import React, { Component, FunctionComponent, useState } from "react";
import { Dropdown, MainInput, Navbar } from "../../components";
import Swal from "sweetalert2";
import style from "./MainPage.module.scss";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

const API_URL: string = process.env.REACT_APP_API_URL as string;
const YES: string = "Loyal Customer";
const NO: string = "Disloyal Customer";

const yesOptions: IDropdownOption[] = [];
const genderOptions: IDropdownOption[] = [
  {
    label: "Female",
    value: 0,
  },
  {
    label: "Male",
    value: 1,
  },
];

const satisfiedOptions: IDropdownOption[] = [
  {
    label: "Neutral or Dissatisfied",
    value: 0,
  },
  {
    label: "Satisfied",
    value: 1,
  },
];

const travelOptions: IDropdownOption[] = [
  {
    label: "Business Travel",
    value: 0,
  },
  {
    label: "Personal Travel",
    value: 1,
  },
];

const classOptions: IDropdownOption[] = [
  {
    label: "Business",
    value: 0,
  },
  {
    label: "Eco",
    value: 1,
  },
  {
    label: "Eco Plus",
    value: 2,
  },
];

const scaleOptions: IDropdownOption[] = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
];

const MySwal = withReactContent(Swal);

const MainPage = () => {
  const [result, setResult] = useState("");
  const [age, setAge] = useState(0);
  const [distance, setDistance] = useState(0.0);
  const [departureDelay, setDepartureDelay] = useState(0);
  const [arrivalDelay, setArrivalDelay] = useState(0);
  const [gender, setGender] = useState(0);
  const [satisfied, setSatisfied] = useState(0);
  const [travelType, setTravelType] = useState(0);
  const [flightClass, setFlightClass] = useState(0);
  const [wifi, setWifi] = useState(0);
  const [depArrConvenient, setDepArrConvenient] = useState(0);
  const [gateLocation, setGateLocation] = useState(0);
  const [foodDrink, setfoodDrink] = useState(0);
  const [onlineBoarding, setOnlineBoarding] = useState(0);
  const [seatComfort, setSeatComfort] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [onboardService, setOnboardService] = useState(0);
  const [legRoomService, setLegRoomService] = useState(0);
  const [baggage, setBaggage] = useState(0);
  const [checkin, setCheckin] = useState(0);
  const [inflight, setInflight] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);

  let data = {
    age: age,
    flight_distance: distance,
    departure_delay: departureDelay,
    arrival_delay: arrivalDelay,
    gender: gender,
    satisfied: satisfied,
    travel_type: travelType,
    class: flightClass,
    wifi: wifi,
    departure_arrival_convenient: depArrConvenient,
    gate_location: gateLocation,
    food_drink: foodDrink,
    online_boarding: onlineBoarding,
    seat_comfort: seatComfort,
    entertainment: entertainment,
    onboard_service: onboardService,
    leg_room_service: legRoomService,
    baggage: baggage,
    checkin: checkin,
    inflight: inflight,
    cleanliness: cleanliness,
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
      if (result.data.data === "0") {
        setResult(YES);
      } else if (result.data.data === "1") {
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
