import React, { useState } from 'react'
import { data } from '../components/data/data'
import { FaPlus } from "react-icons/fa";


const Food = () => {
	// console.log(data)
	const [foods, setFoods] = useState(data)
	const filterType = (category) => {
		setFoods(
			data.filter((item) => {
				return item.category === category;
			})
		)
	}

	return (
		<div>
			{/* Filter category */}
			<h1 className="text-3xl text-black/80 font-bold text-center mb-4">Filter type</h1>
			<div className=" px-2 sm:px-10 flex justify-between mb-8">
				<button className="rounded-xl bg-orange-500 py-1 px-2 text-green-100 sm:px-8 font-bold hover:scale-105" onClick={() => setFoods(data)}>All</button>
				<button className="rounded-xl bg-orange-500 py-1 px-2 text-green-100 sm:px-8 font-bold hover:scale-105" onClick={() => filterType('burger')} >Burgers</button>
				<button className="rounded-xl bg-orange-500 py-1 px-2 text-green-100 sm:px-8 font-bold hover:scale-105" onClick={() => filterType('pizza')}>Pizza</button>
				<button className="rounded-xl bg-orange-500 py-1 px-2 text-green-100 sm:px-8 font-bold hover:scale-105" onClick={() => filterType('salad')}>Salads</button>
				<button className="rounded-xl bg-orange-500 py-1 px-2 text-green-100 sm:px-8 font-bold hover:scale-105" onClick={() => filterType('chicken')}>Chicken</button>
			</div>
			{/* Display foods*/}
			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
				{foods.map((item, index) => (
					<div key={index}
						className="border shadow-md  rounded-xl"
					>
						<img src={item.image} alt={item.name} className=" w-full h-[250px] object-cover rounded-lg hover:scale-105 duration-300 mb-4" />
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between px-2">
								<div className="text-xl font-semi-bold text-center ">{item.name}</div>
								<div className="text-3xl font-bold">$ {item.price}</div>
							</div>

							<button className=" w-full bg-orange-200 text-green-100 font-semi-bold text-center rounded-lg py-4 hover:bg-orange-500 hover:text-white hover:font-bold">Buy now</button>
						</div>


					</div>
				))}
			</div>
			Food
		</div>
	)
}

export default Food
