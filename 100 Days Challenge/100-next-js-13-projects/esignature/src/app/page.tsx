"use client";
import React, { useState } from 'react';
import Title from '../components/Title';
import Form from '../components/Form';

export default function Home() {
  const [date, setDate] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  return (
    <main>
      <Title text={!name ? 'Name ' : name} />
      <Title text={!date ? 'Date of Birth : ' : date} />
      <p>
        Lorem ipsum dolor sit amet cnsectetur adipisicing elit. In eveniet, a,
        error vel illum sapiente maxime blanditiis alias quibusdam dignissimos
        pariatur quisquam ratione officiis quaerat odio incidunt necessitatibus,
        quod omnis!
      </p>
      <Form setDate={setDate} setName={setName} />
    </main>
  ); 
}
