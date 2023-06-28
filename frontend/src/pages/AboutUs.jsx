import React from 'react';
import { Header } from '../components/Header';

export function AboutUs() {
	return (
		<>
			<Header />
			<main className="flex h-[85%] items-center justify-center bg-home-img bg-cover bg-no-repeat xl:h-[88%]">
				<div className="flex h-[45%] w-[38%] flex-col items-center justify-between bg-black bg-opacity-60 p-6 text-center font-medium text-white">
					<h1 className="w-full text-[2rem] font-medium text-button-yellow sm:text-[2.3rem]">
						Sobre nós
					</h1>
					<p className="xl:w-3/3 w-full text-xl md:text-2xl">
						Não somos uma associação nem temos instalações de canil ou gatil:
						através dos anúncios aqui colocados ajudamos animais que estejam
						para adoção a chegarem a quem os procure, criando assim
						oportunidades de integrar animais em risco.
					</p>
					<p className="w-full text-xl md:text-2xl">
						Juntos somos mais fortes!
					</p>
				</div>
			</main>
		</>
	);
}
