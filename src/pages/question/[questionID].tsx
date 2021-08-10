import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

interface Props {}

function QuestionPage({}: Props): ReactElement {
	const router = useRouter();
	const { questionID } = router.query;

	return <main>Question {questionID}</main>;
}

export default QuestionPage;
