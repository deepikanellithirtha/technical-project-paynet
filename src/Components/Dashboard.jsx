import bank from '../../public/images/bank.svg'
import up from '../../public/images/up.svg'
import down from '../../public/images/down.svg'
import qr from '../../public/images/qr.svg'
import upi from '../../public/images/upi.svg'


import React from "react";
import Option from "./Option";

const Dashboard = () => {
	return (
    <div className="h-max md:h-screen p-10">
      <div className=" w-max mx-auto justify-center">
		<div className="grid text-slate-800 gap-5 md:grid-cols-2 text-sm md:mt-20">
      <Option title="UPI transfer" image = {upi} url = "https://upilinks.in/"/>
      <Option title="My QR" image = {qr} url = "https://upilinks.in/payment-link/upi368507226"/>
      <Option title="Send money" image = {up} url = "/user/payments" />
      <Option title="Recieve money" image = {down} url = "/user/payments" />
    </div>
    </div>
    </div>
	);
};

export default Dashboard;
