/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { FC } from 'react';
import styles from './App.module.sass';
import StyledCompSample from './components/sample/StyledCompSample';
import workingLateUrl, {
	ReactComponent as WorkingLate
} from './assets/undraw_WorkingLate.svg';
import styled from 'styled-components';

const ImageWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	background: #2e2e2e;
	border-radius: 0.5rem;

	div {
		flex: 1;
		margin: 1rem;
	}

	div img {
		height: 300px;
		width: 300px;
	}

	div svg {
		zoom: 0.36;
		animation: shake 0.25s infinite ease;
	}

	@keyframes shake {
		to {
			zoom: 0.361;
		}
	}
`;

const App: FC = () => {
	return (
		<div className={styles.app}>
			<StyledCompSample animate={true} />
			<p>{process.env.TEST_VALUE}</p>
			<p className={styles.desc}>
				App created using chankruze&apos;s minimal WBR setup
			</p>
			<ImageWrapper>
				<div>
					<img src={workingLateUrl} alt="" />
				</div>
				<div>
					<WorkingLate />
				</div>
			</ImageWrapper>
		</div>
	);
};

export default App;
