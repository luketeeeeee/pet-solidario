import React from 'react';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

export function Home() {
	return (
		<>
			<Header />
			<main className="flex h-[90%] items-start">
				<div className="flex w-full flex-col justify-center gap-10 py-20 px-6 text-center font-bold leading-9 text-slate-900">
					<h1 className="w-56 text-start text-[2rem]">
						Conheça o <p className="text-button-yellow">Pet Solidário</p>
					</h1>
					<p className="text-start text-xl">
						A adoção é um ato de{' '}
						<strong className="text-button-yellow">amor</strong> e{' '}
						<strong className="text-button-yellow"> responsabilidade</strong>
					</p>
					<p className="text-end text-2xl font-extrabold">
						Encontre um pet para adoção{' '}
						<Link to="/pets" className="text-button-yellow underline">
							aqui
						</Link>
					</p>
				</div>
			</main>
		</>
	);
}
