import React from "react";
import Image from "next/image";

const Features = () => {
	return (
		<div>
			<div className="h-max w-full text-center relative">
				<Image
					src="https://razorpay.com/build/browser/static/features-bg.61935438.svg"
					alt="img"
					width={200}
					height={160}
					style={{height: "120vh", width: "100%"}}
				></Image>
				<div className="absolute inset-0 md:mt-40 mt-32">
				<span className="border-b-2 text-3xl text-slate-100">Features</span>
				<div className="flex justify-center gap-10 md:mt-12 mt-5 flex-wrap text-white">
						<div className="h-60 w-60 border rounded-xl text-center p-3">
							<p className=" text-2xl my-5">UPI payments</p>
							<p className="text-lg">send money tp anyone, anytime with one click. Its that simple.</p>
						</div>
						<div className="h-60 w-60 border rounded-xl text-center p-3">
							<p className=" text-2xl my-5">Recieve payments</p>
							<p className="text-lg">Recieve payments directly to your bank account with a personal QR code.</p>
						</div>
						<div className="h-60 w-60 border rounded-xl text-center p-3">
							<p className=" text-2xl my-5">Save transactions</p>
							<p className="text-lg">Save every transaction as a PDF with one click</p>
						</div>
					</div>
			</div>
			</div>
			<p className="my-5 p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint commodi fugit eos vero voluptatum quis accusamus! Fugiat quos magni tempora obcaecati! Suscipit nobis magnam voluptatibus exercitationem aspernatur. Consequatur minima molestias rem provident reprehenderit laudantium magnam debitis maxime vero voluptatibus aut labore nisi eius dolor blanditiis dolorem deleniti doloribus natus, vitae inventore repellendus dignissimos corporis et! Earum vitae cum neque.</p>
		</div>
	);
};

export default Features;
