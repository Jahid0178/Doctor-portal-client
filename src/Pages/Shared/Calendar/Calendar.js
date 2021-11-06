import React from "react";
import isWeekend from "date-fns/isWeekend";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const Calendar = ({ date, setDate }) => {
  // const [date, setDate] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={date}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
