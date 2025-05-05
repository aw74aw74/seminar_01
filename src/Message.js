import React from 'react';
import './Message.css';

/**
 * Компонент Message - отображает переданный текст
 * @param {object} props - свойства компонента
 * @param {string} props.text - текст сообщения для отображения
 * @returns {JSX.Element} - отрендеренный компонент
 */
const Message = ({ text }) => {
  return (
    <div className="message">
      {text}
    </div>
  );
};

export default Message;
