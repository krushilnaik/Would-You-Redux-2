import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

interface Props {
	choiceA: String;
	choiceB: String;
	askerID: Number;
}

function Question({ choiceA, choiceB, askerID }: Props): ReactElement {
	const { userName, userAvatar } = useSelector(
		({ users }) => users.filter(_user => _user.userID === askerID)[0]
	);

	return (
		<div className='flex flex-col font-bold border-2 border-gray-100 rounded-lg'>
			<h2 className='bg-gray-200 p-3'>{userName} asks:</h2>

			<div className='flex flex-row px-6 py-4 gap-5'>
				<img className='w-40 h-40' src={userAvatar} alt='' />

				<span className='w-[2px] bg-gray-200'></span>

				<div className='flex flex-col gap-3'>
					<h3>Would You Rather...</h3>
					<p>{choiceA}</p>
					<p>{choiceB}</p>
					<button className='bg-green-500 text-white rounded-md p-2' type='submit'>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Question;
