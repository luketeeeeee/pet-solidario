import React from 'react';
import { Header } from '../components/Header';

export function AboutUs() {
	return (
		<>
			<Header />
			<main className="flex h-[90%] items-center xl:justify-center">
				<div className="mx-auto flex h-full w-full flex-col justify-center gap-7 text-center font-bold text-slate-900">
					<div className="flex h-[70%] w-full flex-col justify-between p-6 xs:h-[57%] sm:h-[40%]">
						<h1 className="w-full text-[2rem] text-button-yellow">Sobre nós</h1>
						<p className="w-full text-xl lg:w-[90%]">
							Não somos uma associação nem temos instalações de canil ou gatil:
							através dos anúncios do site ajudamos animais que estejam para
							adoção a chegarem a quem os procure, criando assim oportunidades
							de integrar animais em risco.
						</p>
						<p className="w-full text-xl lg:w-[90%]">
							Juntos somos mais fortes!
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
