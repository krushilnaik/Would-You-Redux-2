import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Question from '../../components/Question';

interface Props {}

function QuestionPage({}: Props): ReactElement {
	const router = useRouter();
	const { questionID } = router.query;

	const question = useSelector(({ questions }) => questions[questionID]);

	return (
		<main>
			<Question {...question} />
		</main>
	);
}

export default QuestionPage;
