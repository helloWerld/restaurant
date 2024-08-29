import Image from 'next/image';
import React from 'react';
import { FaHeart, FeRegHeart } from 'react-icons/fa';
import { IoChatbubbleOutline, IoChatbubbleSharp } from 'react-icons/io5';
import { FaShareNodes, FaRegBookmark, FaBookmark } from 'react-icons/fa6';

const SocialCard = () => {
	return (
		<div className="h-[28rem] w-[22rem] rounded-xl bg-white shadow-2xl p-4">
			<img className="h-80 w-full bg-black rounded-2xl" />
			<div className="flex flex-row justify-center my-1">
				<div className="join">
					<button className="join-item btn btn-xs">•</button>
					<button className="join-item btn btn-xs btn-active">•</button>
					<button className="join-item btn btn-xs">•</button>
					<button className="join-item btn btn-xs">•</button>
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row gap-2">
					<div className="flex flex-row items-center gap-1">
						<FaHeart /> 9.4M
					</div>
					<div className="flex flex-row items-center gap-1">
						<IoChatbubbleOutline /> 106k
					</div>
					<div className="flex flex-row items-center gap-1">
						<FaShareNodes /> 4.2k
					</div>
				</div>
				<div>
					<FaRegBookmark />
				</div>
			</div>
			<div className="flex flex-row items-center gap-4 mt-1">
				<div className="avatar">
					<div className="w-6 rounded-full ">
						<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
					</div>
				</div>
				<p className="text-sm">Liked by Messi and others</p>
			</div>
			<div className="font-semibold text-sm">2 days ago</div>
		</div>
	);
};

export default SocialCard;
