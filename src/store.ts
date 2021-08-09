import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit';

// interface Answer {
// 	/** ID of the user that subbmitted this answer */
// 	answererID: Number;
// 	/** The user's choice */
// 	choice: Number;
// }

// interface Question {
// 	/** Unique identifier for a question, helps with querying */
// 	questionID: Number;
// 	/** the first option */
// 	choiceA: String;
// 	/** the second option */
// 	choiceB: String;
// 	/** the ID of the user that asked this */
// 	askerID: Number;
// 	/** a list of {@link Answer} objects */
// 	answers: Answer[];
// }

// interface User {
// 	userID: Number;
// 	userName: String;
// 	userAvatar: String;
// }

const questionSlice = createSlice({
	name: 'questions',
	initialState: [
		{
			questionID: 0,
			choiceA: 'eat a scorpion',
			choiceB: 'confess to your crush',
			answers: []
		}
	],
	reducers: {
		addQuestion: (state, action) => state.concat([{ ...action.payload, answers: [] }]),
		deleteQuestion: (state, action) =>
			state.filter(question => question.questionID !== action.payload)
	}
});

export const { addQuestion, deleteQuestion } = questionSlice.actions;

const userSlice = createSlice({
	name: 'users',
	initialState: [
		{
			userID: 0,
			userName: 'Krushil Naik',
			userAvatar:
				'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png'
		}
	],
	reducers: {
		addUser: (state, action) => state.concat([action.payload])
	}
});

export const { addUser } = userSlice.actions;

const reducer = combineReducers({
	users: userSlice.reducer,
	questions: questionSlice.reducer
});

export const store = configureStore({
	reducer
});
