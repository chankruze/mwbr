/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { FC } from 'react';
import styles from './App.module.sass';
import StyledCompSample from './sample/StyledCompSample';

const App: FC = () => {
	return (
		<div className={styles.app}>
			<StyledCompSample animate={true} />
			<p>{process.env.TEST_VALUE}</p>
			<p className={styles.desc}>
				App created using chankruze&apos;s minimal WBR setup
			</p>
		</div>
	);
};

export default App;
