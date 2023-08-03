import React from "react";
import Link from "next/link";
const Header = () => {
	return (
		<header className="w-lg place-items-center p-2 md:flex md:justify-between md:p-3 bg-primary">
			<div className="grid justify-center text-xl text-slate-100">
				<p>PayNet</p>
			</div>
			<nav>
				<ul className="flex justify-center gap-3 text-md text-slate-100">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/user/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/user/payments">Payments</Link>
					</li>
					<li>
						<Link href="#">Support</Link>
					</li>
				</ul>
			</nav>
			<div className="flex justify-center gap-2">
				<button className="btn btn-sm mt-1 md:mt-0">
					SIGN IN
				</button>
			</div>
		</header>
	);
};

export default Header;
