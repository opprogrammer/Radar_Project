<template>
	<div>
		<section class="bg-gray-50 dark:bg-gray-900 flex justify-center h-screen">
			<div class="flex flex-col gap-6 px-6 py-8 mx-auto items-center">
				<h1
					class="md:text-3xl sm:text-2xl text-xl font-extrabold leading-tight tracking-wide text-gray-900 dark:text-white text-center">
					Welcome to, Role Alignment & Development Ambition Record (RADAR) 2023 ! 
				</h1>
				<div
					class="flex justify-center items-center h-full w-full sm:max-w-md xl:p-0">
					<div
						class="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow p-4 sm:p-6 w-full">
						<h1
							class="text-xl font-semibold leading-tight tracking-wide text-gray-900 md:text-2xl dark:text-white mb-8 text-center">
							Please login, to continue
						</h1>
						<button
							@click="googleLogin"
							type="submit"
							class="flex w-full items-center justify-center gap-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-2.5 text-center">
							<div class="bg-white md:p-2 p-1 rounded-full shadow">
								<!-- <img src="~/public/google.png" alt="Google Logo" width="15" /> -->
							</div>
							<p class="font-semibold text-base md:text-xl mr-2">
								Sign in with Google
							</p>
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	const { app: realmApp, Realm } = useMyRealmApp();

	const googleLogin = () => {
		const redirectURI = `${window.location.protocol}//${window.location.host}/callback`;

		const credentials = Realm.Credentials.google({
			redirectUrl: redirectURI,
		});

		realmApp
			.logIn(credentials)
			.then((user) => {
				console.log(user);
				navigateTo("/main_page");
				// loading.value = false;
			})
			.catch((err) => console.error(err));
	};
</script>

<style scoped></style>
