import { usePwaPrompt } from "./utils/usePwaPrompt";
import { UpdateManager } from "./components/UpdateManager";

import './App.css'

const App = () => {
  const { isPromptVisible, promptInstall } = usePwaPrompt();

  return (
    <div>
      {/* Update Management */}
      <UpdateManager />
      
      {/* PWA Install Prompt */}
      {isPromptVisible && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary border border-gray-300 shadow-lg px-4 py-2 rounded-lg z-50">
          <p className="text-sm text-gray-800">
            Do you want to install the app?
          </p>
          <button
            onClick={promptInstall}
            className="mt-2 px-3 py-1 bg-[#55818e] text-[#55818e] text-sm rounded hover:bg-[#4a6f7a] transition-colors"
          >
            Install
          </button>
        </div>
      )}
    </div>
  );
}

export default App