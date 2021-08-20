/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Aug 20 2021 18:54:55 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { gsap, Bounce } from 'gsap';
import styled, { css } from 'styled-components';

type Props = {
	childeren?: ReactNode;
	animate?: boolean;
};

const Container = styled.div`
	max-width: 1000px;
	min-width: 400px;
	display: flex;
	background: rgb(27, 27, 27);
	padding: 1rem 1rem 2rem 1rem;
	border-radius: 0.25rem;
	flex-direction: column;
	margin: 1rem;
`;

const Title = styled.h1`
	color: greenyellow;
`;

const Text = styled.p`
	margin-top: 0.5rem;
`;

const StyledCompSample: FC<Props> = ({ animate }: Props) => {
	const boxRef = useRef<HTMLInputElement>(null);

	if (animate) {
		// wait until DOM has been rendered
		useEffect(() => {
			gsap.fromTo(
				boxRef.current,
				{ y: '-100%', opacity: 0 },
				{ y: '0', delay: 2, ease: 'bounce', duration: 1, opacity: 1 }
			);
		});
	}

	return (
		<Container ref={boxRef}>
			<Title>This is a title</Title>
			<Text>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsum natus
				aut, numquam consequatur voluptatibus ea distinctio officia animi
				quisquam? Aliquid recusandae quo consectetur quisquam? Ipsam commodi
				accusamus sapiente tenetur?
			</Text>
		</Container>
	);
};

export default StyledCompSample;
