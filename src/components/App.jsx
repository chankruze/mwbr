/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.sass';

const App = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.app}>
			<h1>{time}</h1>
			<p>{process.env.TEST_VALUE}</p>
			<p className={styles.desc}>
				App created using chankruze&apos;s minimal WBR setup
			</p>
		</div>
	);
};

export default App;
