import React from 'react';
import { Header } from '../components/Header';

export function Home() {
	return (
		<>
			<Header />
			<main className="flex h-[90%] items-center bg-home-img bg-cover bg-no-repeat xl:h-[88%] xl:justify-center">
				<div className="mx-auto flex h-full w-full flex-col justify-center gap-7 text-center text-white md:h-[500px] lg:h-[500px] lg:w-3/5 xl:mx-0 xl:text-center 2xl:w-5/12">
					<div className="flex h-[60%] w-full flex-col justify-between bg-black bg-opacity-60 p-6 xs:h-[55%] sm:h-[40%] md:h-[80%] md:py-14 lg:h-[90%] lg:items-center">
						<h1 className="w-full text-[2rem] font-medium text-button-yellow sm:text-[2.3rem] md:text-3xl">
							Conheça o Pet Solidário!
						</h1>
						<p className="xl:w-3/3 w-full text-xl font-medium md:text-2xl lg:w-[60%]">
							A adoção é um ato de amor e responsabilidade.
						</p>
						<p className="w-full text-xl font-medium md:text-2xl lg:w-[80%]">
							O Pet Solidário é um site que apresenta uma maneira simples de se
							adotar ou anunciar para adoção um animal que tenha sido encontrado
							ou que esteja em risco de abandono.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
