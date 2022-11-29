import React, { useEffect, useState } from "react";
import useAgeDiff from "../hook/useAgeDiff";
import running from "../media/images/running.gif";

const DoctorEarthTime = () => {
  const [totalTime, setStartTime, updateTime] = useAgeDiff("1996-04-24")


  useEffect(() => {
    setInterval(function () {
      updateTime();
    }, 1000);
  }, [])

  return (
    <div className="container pt-3 align-middle text-center">
      <h2>Hello Doctor</h2>
      <span>You have live <b>{totalTime.year}</b> years&nbsp;
        <b>{totalTime.month < 10 ? '0' + totalTime.month : totalTime.month}</b> months&nbsp;
        <b>{totalTime.day < 10 ? '0' + totalTime.day : totalTime.day}</b> days and&nbsp;
        <b>{totalTime.hour < 10 ? '0' + totalTime.hour : totalTime.hour}</b> hours&nbsp;
        <b>{totalTime.minute < 10 ? '0' + totalTime.minute : totalTime.minute}</b> minutes&nbsp;
        <b>{totalTime.second < 10 ? '0' + totalTime.second : totalTime.second}</b> seconds</span>
      <img src={running} className="img-fluid" alt="Running man"></img>
      <p className="text-muted">That means you are not a child anymore, however, there's no point in being grown up if you can't be childish sometimes</p>
      <h3>We're all stories, in the end. Just make it a good one, eh?</h3>
    </div>
  );
};

export default DoctorEarthTime;
