import React from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


const Home = () => {
	const [burger, setBurger] = useState(false);
	const [pizza, setPizza] = useState(false);
	const [salad, setSalad] = useState(false);
	const [chick, setChick] = useState(false);

	return (
		<div >
			{/* home page */}
			< div div className="relative max-w-[1640px] mx-auto py-4" >
				<div className="absolute px-6 py-6">
					<h1 className="text-5xl text-green-100 font-bold lg:text-9xl">Best <span className="text-orange-500">burgerS</span></h1>
					<h1 className="text-5xl text-green-100 font-bold lg:text-9xl"><span className="text-orange-500">In our</span> citY</h1>
				</div>
				<img src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
					className=" w-full max-h-[600px] object-cover"
				/>
			</ div>
			<div>
				<h1 className=" text-4xl lg:text-7xl sm:text-5xl font-bold text-orange-600 text-center py-4">Our dishes</h1>
				<div className=" max-w-[1640px] mx-auto flex flex-col gap-6 px-8 lg:grid grid-cols-2 pb-8">
					<div className="relative" >
						<div
							onClick={() => setBurger(!burger)}
						>
							<div className="absolute text-green-100 px-8 py-12	text-4xl font-bold z-10 w-full h-full bg-black/30 cursor-pointer rounded-lg">burgers</div>
							<img className="w-full object-cover max-h-[300px] cursor-pointer rounded-lg" src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
						</div>
					</div>
					<div className="relative">
						<div
							onClick={() => setPizza(!pizza)}
						>
							<div className="absolute text-green-100 px-8 py-12	text-4xl font-bold z-10 w-full h-full bg-black/30 cursor-pointer rounded-lg">pizza</div>
							<img className="w-full object-cover max-h-[300px] cursor-pointer rounded-lg" src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
						</div>
					</div>
					<div className="relative">
						<div
							onClick={() => setSalad(!salad)}
						>
							<div className="absolute text-green-100 px-8 py-12	text-4xl font-bold z-10 w-full h-full bg-black/30 cursor-pointer rounded-lg">salads</div>
							<img className="w-full object-cover max-h-[300px] cursor-pointer rounded-lg hover:scale-95" src="https://images.pexels.com/photos/8367082/pexels-photo-8367082.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
						</div>
					</div>
					<div className="relative">
						<div
							onClick={() => setChick(!chick)}
						>
							<div className="absolute text-green-100 px-8 py-12	text-4xl font-bold z-10 w-full h-full bg-black/30 cursor-pointer rounded-lg">chicken</div>
							<img className="w-full object-cover max-h-[300px] cursor-pointer rounded-lg hover:scale-95" src="https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
						</div>
					</div>
				</div>
				<Link to={'/food'}>
					<div className="mx-8 my-6">
						<button className="bg-orange-200 w-full py-4 rounded-lg text-green-100 text-xl font-semibold hover:bg-orange-500 hover:font-bold">Go to menu</button>
					</div>
				</Link>
			</div>
			<div>
				{/* slides */}
				{/* burgrer */}
				<div className={burger ? "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-5 right-12 duration-300" : "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-[-200%] right-12 duration-300"}>
					<IoClose size={32}
						onClick={() => setBurger(!burger)}
						className="absolute top-2 right-2 cursor-pointer" />
					<div className="flex flex-col gap-6 justify-center">
						<img
							className="max-h-[500px] object-cover"
							src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
						/>
						<div>
							<h1 className="text-4xl font-semibold text-center">Burger</h1>
							<p className="text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa incidunt fugiat cupiditate quos consectetur dignissimos quidem. Aut, dolorem esse?</p>
						</div>
					</div>
				</div>
				{/* pizza */}
				<div className={pizza ? "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-5 right-12 duration-300" : "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-[-200%] right-12 duration-300"}>
					<IoClose size={32}
						onClick={() => setPizza(!pizza)}
						className="absolute top-2 right-2 cursor-pointer" />
					<div className="flex flex-col gap-6 justify-center">
						<img
							className="max-h-[500px] object-cover"
							src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
						/>
						<div>
							<h1 className="text-4xl font-semibold text-center">Pizza</h1>
							<p className="text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa incidunt fugiat cupiditate quos consectetur dignissimos quidem. Aut, dolorem esse?</p>
						</div>
					</div>
				</div>
				{/* salad */}
				<div className={salad ? "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-5 right-12 duration-300" : "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-[-200%] right-12 duration-300"}>
					<IoClose size={32}
						onClick={() => setSalad(!salad)}
						className="absolute top-2 right-2 cursor-pointer" />
					<div className="flex flex-col gap-6 justify-center">
						<img
							className="max-h-[500px] object-cover"
							src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
						/>
						<div>
							<h1 className="text-4xl font-semibold text-center">Salad</h1>
							<p className="text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa incidunt fugiat cupiditate quos consectetur dignissimos quidem. Aut, dolorem esse?</p>
						</div>
					</div>
				</div>
				{/* chicken */}
				<div className={chick ? "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-5 right-12 duration-300" : "bg-green-100 w-[50vw] h-screen z-20 fixed py-12 px-12 top-[-200%] right-12 duration-300"}>
					<IoClose size={32}
						onClick={() => setChick(!chick)}
						className="absolute top-2 right-2 cursor-pointer" />
					<div className="flex flex-col gap-6 justify-center">
						<img
							className="max-h-[500px] object-cover"
							src="https://images.pexels.com/photos/5718015/pexels-photo-5718015.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
						/>
						<div>
							<h1 className="text-4xl font-semibold text-center">Chicken</h1>
							<p className="text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa incidunt fugiat cupiditate quos consectetur dignissimos quidem. Aut, dolorem esse?</p>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Home
