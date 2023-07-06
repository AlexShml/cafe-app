import React, { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";

function EqualHeightRow({ children }) {
  const rowRef = useRef(null);

  useEffect(() => {
    // Получаем все колонки внутри строки
    const columns = Array.from(
      rowRef.current.getElementsByClassName("menu-page__item")
    );

    // Находим максимальную высоту среди всех колонок
    const maxHeight = Math.max(...columns.map((col) => col.offsetHeight));

    // Устанавливаем максимальную высоту для всех колонок
    columns.forEach((col) => {
      col.style.height = `${maxHeight}px`;
    });
  }, [children]);

  return <Row ref={rowRef}>{children}</Row>;
}

export default EqualHeightRow;
