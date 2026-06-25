import { TextToSpeechLayout } from "@/features/text-to-speech/view/text-to-speech-layout";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Text to Speech" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TextToSpeechLayout>{children}</TextToSpeechLayout>;
}
