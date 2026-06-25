import { SettingsPanel } from "../components/settings-panel";
import { TextInputPanelSpecs } from "../components/text-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";
import { TextToSpeechForm } from "../components/text-to-speech-form";

export function TextToSpeechView() {
  return (
    <TextToSpeechForm>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextInputPanelSpecs />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
}
