import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<>
		
			<div className=" grid md:h-screen mt-16 md:mt-0 p-4 place-items-center md:grid-cols-2">
				<div className="grid gap-7 place-items-center md:place-items-start">
					<span className="text-6xl gradient-text">
						Accept payments within minutes
					</span>

					<div>
						<p className="text-slate-800 text-lg">
							Easy and simple payments for managers and developers. Get started
							within minutes. Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Perferendis minus, libero impedit doloremque quo iste ab
							quos maxime non maiores.
						</p>
					</div>
					<div>
						<button className="btn bg-primary text-slate-100 hover:bg-blue-700"
						 >
							Get started
						</button>
					</div>
				</div>
				
			</div>
			
		</>
	);
};

export default Hero;
