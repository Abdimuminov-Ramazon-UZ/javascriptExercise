//First  part "Format Dates"
let now = new Date();
let Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let MonthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let OrdinalNumbers = ["st", "nd", "rd", "th", "es"];
function moment(YearNumber = 0, TypeWrite = "") {
  return {
    format: function (date) {
      (getYe = now.getFullYear()),
        (getMoName = now.getMonth()),
        (getMo = MonthText[getMoName]),
        (getHo = now.getHours()),
        (getMi = now.getMinutes()),
        (ApM = "Am"),
        (getSe = now.getSeconds());
      getHo < 13 ? (ApM = "Am") : (ApM = "Pm");
      if (date === "dddd") {
        let day = now.getDay();
        return Days[day - 1];
      } else if (date === "MMM Do YY") {
        let Months = now.getMonth(),
          Year = now.getFullYear().toString().slice(2);
        Date = now.getUTCDate();
        if (Date === 1) {
          Date = Date + `${OrdinalNumbers[0]}`;
        } else if (Date === 2) {
          Date = Date + `${OrdinalNumbers[1]}`;
        } else if (Date % 10 === 0) {
          Date = Date + `${OrdinalNumbers[4]}`;
        } else if (Date === 3) {
          Date = Date + `${OrdinalNumbers[2]}`;
        } else {
          Date = Date + `${OrdinalNumbers[3]}`;
        }
        return MonthText[Months] + "  " + Date + " " + Year;
      } else if (date === "'YYYY [escaped] YYYY'") {
        return now.getFullYear() + " escaped " + now.getFullYear();
      } else if (date === "LT") {
        let localeTime = now.toLocaleTimeString().substring(0, 4);
        return localeTime + " " + now.toLocaleTimeString().slice(8);
      } else if (date === "LTS") {
        return now.toLocaleTimeString();
      } else if (date === "L") {
        if (getMoName < 10) {
          return "0" + getMoName + "/" + now.getDate() + "/" + getYe;
        } else {
          return getMoName + "/" + now.getDate() + "/" + getYe;
        }
      } else if (date === "l") {
        return getMoName + "/" + now.getDate() + "/" + getYe;
      } else if (date === "LL" || date === "ll") {
        return getMo + " " + now.getDate() + ", " + now.getFullYear();
      } else if (date === "LLL" || date === "lll") {
        return (
          getMo +
          " " +
          now.getDate() +
          ", " +
          now.getFullYear() +
          " " +
          now.toLocaleTimeString()
        );
      } else if (date === "LLLL") {
        let day = now.getDay();
        return (
          Days[day - 1] +
          ", " +
          getMo +
          " " +
          now.getDate() +
          ", " +
          now.getFullYear() +
          " " +
          now.toLocaleTimeString()
        );
      } else if (date === "llll") {
        let day = now.getDay();
        let dayText = Days[day - 1].substring(0, 3);
        return (
          dayText +
          ", " +
          getMo +
          " " +
          now.getDate() +
          ", " +
          now.getFullYear() +
          " " +
          now.toLocaleTimeString()
        );
      } else {
        return now;
      }
    },

    //Relative Time

    startOf: function (timeType = "") {
      let dayHour = now.getHours() + "  hours ago",
        hourDiff = now.getMinutes() + " minutes ago";
      return {
        fromNow: function () {
          return timeType == "day" ? dayHour : hourDiff;
        },
      };
    },
    endOf: function (timeType = "day") {
      return {
        fromNow: function () {
          let diffHour = 24 - now.getHours();
          let dayHour = "in " + diffHour + " hours";
          return dayHour;
        },
      };
    },
    fromNow: function () {
      let YearFr = YearNumber.substring(0, 4),
        YearTo = now.getFullYear(),
        FrTO = YearTo - YearFr + " years ago";
      return (TypeWrite = "YYYYMMDD" ? FrTO : "Type is Wrong");
    },

    //Calendar Time
    subtract: function (valueDay = 0, timeType = "days") {
      return {
        calendar: function () {
          let diffDay = now.getDate() - valueDay,
            getYe = now.getFullYear(),
            getMo = now.getMonth(),
            getHo = now.getHours(),
            getMi = now.getMinutes(),
            ApM = "Am";
          getHo < 13 ? (ApM = "Am") : (ApM = "Pm");

          if (valueDay > 7) {
            return getMo + "/" + diffDay + "/" + getYe;
          } else if (valueDay === 1) {
            return "Today at " + getHo + ":" + getMi + " " + ApM;
          } else if (1 < valueDay <= 7) {
            let weekDiff = now.getDay() - valueDay;
            return (
              "Last  " +
              Days[Math.abs(weekDiff)] +
              " " +
              getHo +
              ":" +
              getMi +
              "  Pm"
            );
          }
        },
      };
    },
    add: function (valueDay = 0, timeType = "days") {
      return {
        calendar: function () {
          (getYe = now.getFullYear()),
            (getMo = now.getMonth()),
            (getHo = now.getHours()),
            (getMi = now.getMinutes()),
            (ApM = "Am");
          getHo < 13 ? (ApM = "Am") : (ApM = "Pm");
          if (valueDay === 1) {
            return "Tomorrow at " + getHo + ":" + getMi;
          } else if (1 < valueDay <= 7) {
            let weekDiff = now.getDay() + valueDay - 7;
            return Days[Math.abs(weekDiff)] + " " + getHo + ":" + getMi + ApM;
          } else {
            let diffDay = now.getDate() + valueDay;
            return getMo + "/" + diffDay + "/" + getYe;
          }
        },
      };
    },
    calendar: function () {
      (getHo = now.getHours()), (getMi = now.getMinutes()), (ApM = "Am");
      getHo < 13 ? (ApM = "Am") : (ApM = "Pm");
      return "Today at " + getHo + ":" + getMi + " " + ApM;
    },

    //Muliple Locale Support
    locale: function () {
      let localeTime = now.toTimeString().split(" ").slice(2).join(" ");
      return localeTime;
    },
  };
}
console.log(moment().format(""));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment("20120620", "YYYYMMDD").fromNow());
console.log(moment().startOf("day").fromNow());
console.log(moment().startOf("hour").fromNow());
console.log(moment().endOf("day").fromNow());
console.log(moment().subtract(10, "days").calendar());
console.log(moment().subtract(6, "days").calendar());
console.log(moment().subtract(1, "days").calendar());
console.log(moment().add(1, "days").calendar());
console.log(moment().add(3, "days").calendar());
console.log(moment().add(10, "days").calendar());
console.log(moment().calendar());
console.log(moment().locale());
console.log(moment().format("LT"));
console.log(moment().format("LTS"));
console.log(moment().format("L"));
console.log(moment().format("l"));
console.log(moment().format("LL"));
console.log(moment().format("ll"));
console.log(moment().format("LLL"));
console.log(moment().format("lll"));
console.log(moment().format("LLLL"));
console.log(moment().format("llll"));
