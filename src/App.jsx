
import { usePwaPrompt } from "./utils/usePwaPrompt";
import './App.css'

const App = () => {

  const { isPromptVisible, promptInstall } = usePwaPrompt();

  return (
    <div>
      {isPromptVisible && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-lg z-50">
          <p className="text-sm text-gray-800">
            Θέλετε να εγκαταστήσετε την εφαρμογή στο κινητό σας;
          </p>
          <button
            onClick={promptInstall}
            className="mt-2 px-3 py-1 bg-[#55818e] text-white text-sm rounded"
          >
            Εγκατάσταση
          </button>
        </div>
      )}
    </div>
  );
}

export default App
