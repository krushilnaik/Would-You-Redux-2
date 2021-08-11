import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const questionSlice = createSlice({
	name: 'questions',
	initialState: [
		{
			questionID: 0,
			choiceA: 'eat a scorpion',
			choiceB: 'confess to your crush',
			askerID: 0,
			answers: []
		}
	],
	reducers: {
		addQuestion: (state, action) => state.concat([{ ...action.payload, answers: [] }]),
		answerQuestion: (state, action) => {
			const { questionID, choice, answererID } = action.payload;

			state.forEach(question => {
				if (question.questionID === questionID) {
					question.answers.push({ choice, answererID });
				}
			});

			return state;
		},
		deleteQuestion: (state, action) =>
			state.filter(question => question.questionID !== action.payload)
	}
});

export const { addQuestion, deleteQuestion, answerQuestion } = questionSlice.actions;

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
	reducer,
	middleware: [createLogger()]
});
