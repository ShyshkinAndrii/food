import React from 'react'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const Contacts = () => {
	return (
		<div className='max-w-[1640px] mx-auto px-8'>
			<div>
				<img
					className="h-[500px] object-cover w-full mb-8 rounded-lg"
					src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
			</div>
			<div>
				<h1 className="text-3xl lg:text-5xl text-orange-500 text-center font-bold mb-8" >Our contacts</h1>
				<div className="grid grid-cols-2 gap-8 justify-items-center lg:grid-cols-3 mb-8">
					<div className="flex gap-2 items-center justify-start">
						<FaPhoneVolume size={32} className="cursor-pointer hover:scale-105" />
						<a className='text-xl font-semibold cursor-pointer hover:underline hover:font-bold '>+380971465521</a>
					</div>
					<div className="flex gap-2 items-center justify-start">
						<IoIosMail size={32} className="cursor-pointer hover:scale-105" />
						<a className='text-xl font-semibold cursor-pointer hover:underline hover:font-bold '>cafe@gmail.com</a>
					</div>
					<div className="flex gap-2 items-center justify-start">
						<TiSocialFacebook size={32} className="cursor-pointer hover:scale-105" />
						<a className='text-xl font-semibold cursor-pointer hover:underline hover:font-bold '>cafe.fb.com</a>
					</div>
					<div className="flex gap-2 items-center justify-start">
						<SlSocialInstagram size={32} className="cursor-pointer hover:scale-105" />
						<a className='text-xl font-semibold cursor-pointer hover:underline hover:font-bold '>cafe.inst.com</a>
					</div>
					<div className="flex gap-2 items-center justify-start">
						<TiSocialTwitter size={32} className="cursor-pointer hover:scale-105" />
						<a className='text-xl font-semibold cursor-pointer hover:underline hover:font-bold '>cafe.tw.com</a>
					</div>
					<div className="flex gap-2 items-center justify-start">
						<TiSocialYoutube size={32} className="cursor-pointer hover:scale-105" />
						<a className='text-xl font-semibold cursor-pointer hover:underline hover:font-bold '>cafe.youtube.com</a>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Contacts
