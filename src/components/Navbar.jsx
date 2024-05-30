import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FcAbout } from "react-icons/fc";








const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [user, setUser] = useState(false)
	const [cart, setCart] = useState(false)

	return (
		<nav className=' flex justify-between mb-6'>
			<div className=' flex items-center gap-5'>
				<IoMdMenu size={32}
					onClick={() => setNav(!nav)}
					className="cursor-pointer"
				/>
				<Link to={'/'}>
					<div className=' text-3xl font-semibold'>
						Best <span className="font-bold">Eats</span>
					</div>
				</Link>
				<div className=' hidden lg:flex text-3xl font-semibold px-1 bg-gray-200  gap-2 rounded-3xl items-center py-0'>
					<p className="bg-black text-white rounded-3xl px-3">Fast</p>
					<p>Delivery</p>
				</div>
			</div>
			<div className="bg-gray-200 rounded-full  items-center w-[200px] hidden sm:flex w-[300px] lg:w-[450px] gap-3 px-3">
				<CgSearch size={20} />
				<input className=" bg-transparent w-full focus:outline-none" type="text" placeholder='Search...' />
			</div>
			<div className=' flex justify-between gap-10'>
				<div>
					<GoPerson
						className="cursor-pointer hover:scale-105"
						onClick={() => setUser(!user)}
						size={32} />
				</div>
				<div className="">
					<PiShoppingCart
						size={32}
						className="cursor-pointer hover:scale-105"
						onClick={() => setCart(!cart)}
					/>
				</div>
			</div>

			{/* mobile menu */}
			{nav ? <div className="bg-black/70 absolute top-0 left-0 w-full h-screen z-10" ></div> : ''}

			<div className={nav ? "bg-gray-200 h-screen w-[300px] fixed top-0 left-0 z-10 duration-300 px-4" : "bg-gray-200 h-screen w-[300px] fixed top-0 left-[-100%] z-10 duration-300"}>
				<IoClose
					size={32}
					className="absolute right-4 top-4 cursor-pointer"
					onClick={() => setNav(!nav)}
				/>
				<h2 className="text-2xl p-4 mb-6 cursor-pointer">Best <span className="font-bold">Eats</span></h2>
				<nav>
					<ul className="flex flex-col gap-4">
						<Link to={'/'}>
							<li
								onClick={() => setNav(!nav)}
								className="flex gap-4 text-lg font-semibold px-4 items-center cursor-pointer hover:bg-gray-300 hover:rounded-xl">
								<FaHome size={20} />
								Home
							</li>
						</Link>
						<Link to={'/food'}>
							<li
								onClick={() => setNav(!nav)}
								className="flex gap-4 text-lg font-semibold px-4 items-center cursor-pointer hover:bg-gray-300 hover:rounded-xl">
								<MdFastfood size={20} />
								Food
							</li>
						</Link>
						<Link to={'/about'}>
							<li
								onClick={() => setNav(!nav)}
								className="flex gap-4 text-lg font-semibold px-4 items-center cursor-pointer hover:bg-gray-300 hover:rounded-xl">
								<FcAbout size={20} />
								About us
							</li>
						</Link>
						<Link to={'/contacts'}>
							<li
								onClick={() => setNav(!nav)}
								className="flex gap-4 text-lg font-semibold px-4 items-center cursor-pointer hover:bg-gray-300 hover:rounded-xl">
								<FaPhoneAlt size={20} />
								Contacts
							</li>
						</Link>
					</ul>
				</nav>
			</div>

			{/* user	*/}
			{user ? <div className="bg-black/70 absolute top-0 left-0 w-full h-screen z-10" ></div> : ''}

			<div className={user ? "w-[300px]  h-[220px] z-10 flex flex-col bg-gray-200 py-12 px-4 rounded-md fixed top-2 right-2 duration-300" : "w-[300px]  h-[200px] z-10 flex flex-col bg-gray-200 py-12 px-4 rounded-md fixed top-[-100%] right-2 duration-300"}>
				<IoClose
					size={25}
					className="absolute right-4 top-4 cursor-pointer"
					onClick={() => setUser(!user)}
				/>
				<div className="flex flex-col gap-4	">
					<input type="text" placeholder='Login' className="px-2 focus:outline-none" />
					<input type="password" placeholder='Password' className="px-2 focus:outline-none" />
				</div>
				<div className="mt-4 flex flex-col gap-4 justify-between px-4 md:flex-row ">
					<button className="bg-white py-1 px-8 active:bg-gray-100">Ok</button>
					<button
						className="bg-red-400 text-white font-semibold py-1 px-8 active:bg-red-500"
						onClick={() => setUser(!user)}
					>
						Cancel
					</button>
				</div>
			</div>

			{/* cart */}
			{cart ? <div className="bg-black/70 absolute top-0 left-0 w-full h-screen z-10" ></div> : ''}
			<div className={cart ? "w-[400px]  h-full z-10 flex flex-col bg-gray-200 py-12 px-4 rounded-md fixed top-2 right-2 duration-300" : "w-[400px]  h-[200px] z-10 flex flex-col bg-gray-200 py-12 px-4 rounded-md fixed top-2 right-[-100%] duration-300"}>
				<IoClose
					size={25}
					className="absolute right-4 top-4 cursor-pointer"
					onClick={() => setCart(!cart)}
				/>
				<h1 className="text-center text-xl font-semibold text-gray-600">What I want</h1>
			</div>

		</nav >
	)
}

export default Navbar
