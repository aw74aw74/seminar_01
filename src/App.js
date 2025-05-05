import './App.css';
import Message from './Message';

/**
 * Главный компонент приложения
 * @returns {JSX.Element} - отрендеренный компонент
 */
function App() {
  return (
    <div className="App">
      <Message text="Привет, это мой первый компонент Message!" />
      <Message text="Компонент принимает текст через props и отображает его" />
    </div>
  );
}

export default App;
