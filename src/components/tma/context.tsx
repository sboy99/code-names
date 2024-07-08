"use client";

import type { User } from "@tma.js/sdk-react";
import React from "react";

type TTelegramContext = {
	user: User;
};

export const TelegramContext = React.createContext<TTelegramContext>(
	{} as TTelegramContext,
);
