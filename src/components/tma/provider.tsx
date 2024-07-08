"use client";

import {
	SDKProvider,
	type User,
	retrieveLaunchParams,
} from "@tma.js/sdk-react";
import { type PropsWithChildren, useEffect, useState } from "react";
import { TelegramContext } from "./context";

export function TmaProvider(props: PropsWithChildren) {
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [telegramUser, setTelegramUser] = useState<User>({} as User);

	function fetchTelegramUser() {
		try {
			const launchParams = retrieveLaunchParams();
			const telegramUser = launchParams.initData?.user;
			if (!telegramUser) {
				throw new Error("User not found");
			}
			setTelegramUser(telegramUser);
		} catch (_error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(fetchTelegramUser, []);

	if (isLoading) {
		return <TmaLoading />;
	}

	if (isError) {
		return <TmaError />;
	}

	return (
		<SDKProvider acceptCustomStyles>
			<TelegramContext.Provider
				value={{
					user: telegramUser,
				}}
			>
				{props.children}
			</TelegramContext.Provider>
		</SDKProvider>
	);
}

// -------------------------------PRIVATE--------------------------------- //

function TmaLoading() {
	return <div>Loading...</div>;
}

function TmaError() {
	return <div>This is a mini app, please open it on telegram</div>;
}
