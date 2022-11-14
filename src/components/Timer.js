import React, { useEffect, useState } from "react";

function Timer() {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  function countDown() {
    let countDate = new Date("December 22, 2022 00:00:00").getTime();
    let now = new Date().getTime();
    let gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    setDays(Math.floor(gap / day));
    setHours(Math.floor((gap % day) / hour));
    setMinutes(Math.floor((gap % hour) / minute));
    setSeconds(Math.floor((gap % minute) / second));
  }

  useEffect(() => {
    setInterval(countDown, 1000);
  });

  return (
    <>
      <section className="content">
        <div>
          <h2>Nos volvemos a ver en :</h2>
          <div className="countdown">
            <div className="container-day">
              <h3 className="day">{days}</h3>
              <h3>Dias</h3>
            </div>
            <div className="container-hour">
              <h3 className="hour">{hours}</h3>
              <h3>Horas</h3>
            </div>
            <div className="container-minute">
              <h3 className="minute">{minutes}</h3>
              <h3>Minutos</h3>
            </div>
            <div className="container-second">
              <h3 className="second">{seconds}</h3>
              <h3>Segundos</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timer;
