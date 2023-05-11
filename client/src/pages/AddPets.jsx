import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function AddPets() {
	const navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem('token'));

	const [photo, setPhoto] = useState('');
	const [petData, setPetData] = useState({
		name: '',
		species: '',
		sex: '',
		breed: '',
		ownerName: user.username,
		ownerEmail: user.email,
		description: '',
		adopted: false,
	});

	const handleChange = (e) => {
		setPetData({ ...petData, [e.target.name]: e.target.value });
	};

	const handlePhotoChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (event) {
				console.log('Imagem lida com sucesso!');
				setPhoto(event.target.result);
			};

			reader.readAsDataURL(file);
		} else {
			setPhoto('');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(petData.photo);

		if (!photo) {
			toast.error('Por favor, insira uma foto do pet!');
		}

		if (petData.name && petData.species && petData.sex && photo) {
			try {
				await fetch('http://localhost:8080/api/pets', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify([petData, photo]),
				}).then((response) => {
					console.log(response);
					if (!response.ok) {
						return response.text().then((text) => {
							throw new String(text);
						});
					}

					return response.text().then((text) => {
						let successfullyPetRegisterMessage = JSON.parse(String(text));
						toast.success(successfullyPetRegisterMessage.message);
						navigate('/pets');
					});
				});
			} catch (error) {
				console.log(response);
				let errorJsonFormat = JSON.parse(error);

				toast.error(errorJsonFormat.message);
			}
		}
	};

	return (
		<main className="flex min-h-screen items-center justify-center bg-addpet-img bg-cover bg-no-repeat text-white">
			<div className="flex h-[700px] w-[800px] items-center justify-center">
				<form
					action=""
					method="post"
					className="flex h-auto w-full flex-col justify-between rounded-3xl bg-black bg-opacity-60 p-6 text-center"
					autoComplete="off"
					onSubmit={handleSubmit}
				>
					<Link to="/" className="h-14 w-14" title="Voltar à página inicial">
						<ArrowLeftCircleIcon className="h-14 w-14" />
					</Link>
					<div className="flex">
						<h1 className="m-auto text-3xl">Cadastre seu pet</h1>
					</div>
					<div className="mt-6 flex justify-between">
						<div className="w-[320px]">
							<label
								htmlFor="foto"
								id="fotoLabel"
								tabIndex={0}
								className="flex aspect-video h-[420px] w-80 cursor-pointer items-center justify-center rounded-2xl 
                                bg-[#ddd] bg-contain bg-center bg-no-repeat text-[#aaa]"
								style={{
									border: '3px dashed',
									backgroundImage: `url(${photo})`,
								}}
							>
								{photo ? <span></span> : <span>*Escolher foto do pet</span>}
								<input
									type="file"
									name="foto"
									id="foto"
									className="hidden"
									onChange={handlePhotoChange}
								/>
							</label>
						</div>
						<div className="flex w-[370px] flex-col">
							<div className="mb-3">
								<input
									type="text"
									name="name"
									id="name"
									onChange={handleChange}
									value={petData.name}
									placeholder="*Nome do pet"
									className="h-14 w-full rounded-2xl px-5 text-black"
									required
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="species"
									id="species"
									onChange={handleChange}
									value={petData.species}
									placeholder="*Espécie: cachorro, gato, passáro..."
									className="h-14 w-full rounded-2xl px-5 text-black"
									required
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="breed"
									id="breed"
									onChange={handleChange}
									value={petData.breed}
									placeholder="Raça: buldogue, siamês, arara, ..."
									className="h-14 w-full rounded-2xl px-5 text-black"
								/>
							</div>
							<div className="mb-3">
								<p className="text-xl">Sexo*</p>
								<div className="flex">
									<input
										type="radio"
										name="sex"
										id="male"
										value="male"
										className="w-9"
										onClick={handleChange}
										required
									/>
									<label htmlFor="male" className="my-o mx-auto">
										Macho
									</label>
									<input
										type="radio"
										name="sex"
										id="female"
										value="female"
										className="w-9"
										onClick={handleChange}
										required
									/>
									<label htmlFor="female" className="my-o mx-auto">
										Fêmea
									</label>
									<input
										type="radio"
										name="sex"
										id="none"
										value="none"
										className="w-9"
										onClick={handleChange}
										required
									/>
									<label htmlFor="none" className="my-o mr-0 ml-auto">
										Não informar
									</label>
								</div>
							</div>
							<div>
								{/* <p>Descreva as caracteríticas do seu pet</p> */}
								<textarea
									name="description"
									id="description"
									placeholder="Descreva as características do seu pet"
									cols="30"
									rows="10"
									className="h-32 w-full resize-none rounded-2xl px-4 py-3 text-base text-black scrollbar-none"
									onChange={handleChange}
									value={petData.description}
								/>
							</div>
						</div>
					</div>
					<p className="mt-5">Os campos marcados com * são obrigatórios</p>
					<button
						type="submit"
						className="bottom-0 mt-5 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold 
                        text-slate-50 transition duration-500 ease-in-out hover:bg-yellow-600"
					>
						Adicionar pet para adoção
					</button>
				</form>
			</div>
		</main>
	);
}
