import React from 'react'

const About = () => {
	return (

		<div className="max-w-[1640px] mx-auto ">
			<div className="mb-8">
				<h1 className="text-4xl font-bold text-center text-orange-500 md:text-6xl mb-4">How we cook?</h1>
				<div className="flex flex-col gap-6 px-8 lg:grid grid-cols-2">
					<img
						className="h-[500px] lg:w-full object-cover"
						src="https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
					<p className="text-3xl lg:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minima, fugiat, deleniti facilis vel tenetur excepturi explicabo quasi modi eveniet amet voluptates, numquam eius? Dolores, quis? Harum molestias autem quod, nulla, ratione pariatur est quo consequatur porro quam similique, adipisci nobis! Eligendi, magnam repellat? Tempora ipsum corporis saepe sed porro.</p>
					<p className="text-3xl lg:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni magnam eveniet amet enim quidem eaque nostrum nesciunt illo explicabo tempora nisi officiis deserunt deleniti sapiente adipisci neque dolor cupiditate, voluptas eius illum iusto et repellat labore? Laborum, reiciendis quae.</p>
					<img
						className="h-[500px] lg:w-[700px] object-cover"
						src="https://images.pexels.com/photos/8880744/pexels-photo-8880744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
				</div>
			</div>
			<div className="max-w-[1640px] mx-auto px-8">
				<h1 className="text-4xl font-bold text-center text-orange-500 md:text-6xl mb-4">Delivery</h1>
				<div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
					<img className="mb-4 h-[500px] object-cover w-full" src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
					<img className="mb-4 h-[500px] object-cover w-full" src="https://images.pexels.com/photos/4392871/pexels-photo-4392871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
					<img className="mb-4 h-[500px] object-cover w-full" src="https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
				</div>
			</div>
		</div>
	)
}

export default About
