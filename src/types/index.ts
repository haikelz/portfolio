import { ReactNode } from "react";
import { z } from "zod";

const Theme = z.object({
  theme: z.string(),
  changeTheme: z.function(),
});

const LinkIcon = z.object({
  link: z.string().optional(),
  linkPreview: z.string().optional(),
  linkGithub: z.string().optional(),
});

const Stack = z.object({
  stack1: z.string().optional(),
  stack2: z.string().optional(),
});

const Keydown = z.object({
  isCtrlKey: z.boolean(),
  previousUrl: z.string(),
  nextUrl: z.string(),
});

const KeydownEvent = z.object({
  ctrlKey: z.boolean(),
  key: z.string(),
});

const List = z.object({
  setLoading: z.function().args(z.boolean()),
  isLoading: z.boolean(),
});

const Loading = z.object({
  isLoading: z.boolean(),
  loadingProcess: z.function(),
});

const ShowedModal = z.object({
  isShowed: z.boolean(),
  setIsShowed: z.function().args(z.boolean()),
});

LinkIcon.parse({
  link: "",
  linkPreview: "",
  linkGithub: "",
});

Stack.parse({
  stack1: "",
  stack2: "",
});

Theme.parse({
  theme: "dark",
  changeTheme: () => {},
});

Loading.parse({
  isLoading: false,
  loadingProcess: () => {},
});

List.parse({
  setLoading: (loading: boolean) => {},
  isLoading: false,
});

Keydown.parse({
  isCtrlKey: false,
  previousUrl: "",
  nextUrl: "",
});

KeydownEvent.parse({
  ctrlKey: false,
  key: "",
});

ShowedModal.parse({
  isShowed: false,
  setIsShowed: (showed: boolean) => {},
});

export type Children = {
  children: ReactNode[] | JSX.Element;
};
export type Theme = z.infer<typeof Theme>;
export type LinkIcon = z.infer<typeof LinkIcon>;
export type Stack = z.infer<typeof Stack>;
export type Loading = z.infer<typeof Loading>;
export type List = z.infer<typeof List>;
export type Keydown = z.infer<typeof Keydown>;
export type KeydownEvent = z.infer<typeof KeydownEvent>;
export type ShowedModal = z.infer<typeof ShowedModal>;