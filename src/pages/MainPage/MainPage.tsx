import React, { useState } from "react";
import { Dropdown, MainInput } from "../../components";
import Swal from "sweetalert2";
import style from "./MainPage.module.scss";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

const API_URL: string = process.env.REACT_APP_API_URL as string;
const YES: string = "Loyal Customer";
const NO: string = "Disloyal Customer";

// const yesOptions: IDropdownOption[] = [];
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
  const [distance, setDistance] = useState(0);
  const [departureDelay, setDepartureDelay] = useState(0);
  const [arrivalDelay, setArrivalDelay] = useState(0.0);
  const [gender, setGender] = useState(0);
  const [satisfied, setSatisfied] = useState(0);
  const [travelType, setTravelType] = useState(0);
  const [flightClass, setFlightClass] = useState(0);
  const [wifi, setWifi] = useState(0);
  const [depArrConvenient, setDepArrConvenient] = useState(0);
  const [gateLocation, setGateLocation] = useState(0);
  const [foodDrink, setfoodDrink] = useState(0);
  const [onlineBooking, setOnlineBooking] = useState(0);
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
    arrival_delay: parseFloat(arrivalDelay.toString()).toFixed(1),

    gender: gender,
    satisfied: satisfied,
    travel_type: travelType,
    class: flightClass,

    wifi: wifi,
    departure_arrival_convenient: depArrConvenient,
    online_booking: onlineBooking,
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
    console.log(data);
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
        <MainInput setValue={setAge} title="Usia" value={age} />
        <MainInput
          setValue={setDistance}
          title="Jarak Penerbangan"
          value={distance}
        />
        <MainInput
          setValue={setDepartureDelay}
          title="Keterlambatan Penerbangan"
          value={departureDelay}
        />
        <MainInput
          setValue={setArrivalDelay}
          title="Keterlambatan Kedatangan"
          value={arrivalDelay}
        />
        <Dropdown
          options={genderOptions}
          placeholder="Gender"
          setValue={setGender}
          title="Gender"
          value={gender}
        />
        <Dropdown
          options={satisfiedOptions}
          placeholder="Kepuasan"
          setValue={setSatisfied}
          title="Kepuasan"
          value={satisfied}
        />
        <Dropdown
          options={travelOptions}
          placeholder="Jenis Penerbangan"
          setValue={setTravelType}
          title="Jenis Penerbangan"
          value={travelType}
        />
        <Dropdown
          options={classOptions}
          placeholder="Kelas Penerbangan"
          setValue={setFlightClass}
          title="Kelas Penerbangan"
          value={flightClass}
        />
        <Dropdown
          options={scaleOptions}
          placeholder="Wifi"
          setValue={setWifi}
          title="Rating Wifi"
          value={wifi}
        />

        <Dropdown
          options={scaleOptions}
          placeholder="Kenyamanan"
          setValue={setDepArrConvenient}
          title="Rating Kenyamanan Kedatangan & Keberangkatan"
          value={depArrConvenient}
        />
        <Dropdown
          options={scaleOptions}
          setValue={setOnlineBooking}
          value={onlineBooking}
          title="Rating Online Booking"
        />
        <Dropdown
          options={scaleOptions}
          setValue={setGateLocation}
          value={gateLocation}
          title="Rating Kenyamanan Gerbang"
        />
        <Dropdown
          options={scaleOptions}
          setValue={setfoodDrink}
          value={foodDrink}
          title="Rating Makanan Minuman"
        />

        <Dropdown
          options={travelOptions}
          setValue={setOnlineBoarding}
          value={onlineBoarding}
          title="Rating Online Boarding"
        />
        <Dropdown
          options={scaleOptions}
          setValue={setSeatComfort}
          value={seatComfort}
          title="Rating Kenyamanan Tempat Duduk"
        />
        <Dropdown
          options={scaleOptions}
          setValue={setEntertainment}
          title="Rating Hiburan"
          value={entertainment}
        />
        <Dropdown
          options={scaleOptions}
          title="Rating Pelayanan Onboard"
          setValue={setOnboardService}
          value={onboardService}
        />
        <Dropdown
          options={scaleOptions}
          title="Rating Ruang Kaki"
          setValue={setLegRoomService}
          value={legRoomService}
        />
        <Dropdown
          options={scaleOptions}
          title="Rating Pelayanan Bagasi"
          setValue={setBaggage}
          value={baggage}
        />
        <Dropdown
          options={scaleOptions}
          title="Rating Pelayanan Check-in"
          setValue={setCheckin}
          value={checkin}
        />
        <Dropdown
          options={scaleOptions}
          title="Rating Pelayanan Inflight"
          setValue={setInflight}
          value={inflight}
        />
        <Dropdown
          options={scaleOptions}
          title="Rating Kebersihan"
          setValue={setCleanliness}
          value={cleanliness}
        />
      </div>
      <div className={style.loginContainer}>
        <button onClick={submit} className={style.loginButton} type="button">
          Cek Loyalty
        </button>
      </div>
    </div>
  );
};

export default MainPage;
