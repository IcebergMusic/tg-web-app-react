import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
        const {onToggleButton , tg} = useTelegram();

    useEffect(() => {
        tg.ready();

    }, [])
    const onClose = () => {
        tg.close()
    };

  return (
    <div className="App">
        <Header />
        <button onClick={onToggleButton}>toggle</button>
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
