import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const onClose = () => {
        tg.close()

        const {onToggleButton , tg} = useTelegram();
    useEffect(() => {
        tg.ready();

    }, [])

  return (
    <div className="App">
        <button onClick={onToggleButton}>toggle</button>
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
