import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Link } from 'react-router-dom';

const CalendarioEventos = () => {
  // Dados fictícios de eventos (prazos de entrega e datas de exames)
  const eventos = [
    { title: 'Entrega do Trabalho 1', date: '2023-09-15' },
    { title: 'Exame Final de Matemática', date: '2023-10-10' },
    { title: 'Entrega do Projeto Final', date: '2023-11-20' },
  ];

  return (
    <div className="container">
      <h1 className="mt-4">Calendário de Eventos</h1>
      <div className="mt-3">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={eventos}
        />
      </div>
      <div><Link to='/calendario-entrega-trabalhos'>Ampliar calendário</Link></div>
    </div>
  );
};

export default CalendarioEventos;
