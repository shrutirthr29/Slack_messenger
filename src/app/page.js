"use client";

import { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        alert('Message sent!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ padding: '20px', fontFamily: 'Arial', fontSize: '30px'}}>
      Slack Messenger
      </h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        style={{ width: '300px', height: '100px', marginBottom: '10px', color: 'black', borderRadius: '3px'}}
      />
      <br />
      <button onClick={sendMessage} style={{ padding: '10px 20px', fontSize: '16px', background: 'white', color: 'black',  borderRadius: '3px'}}>
        Send Message to Slack
      </button>
    </div>
  );
}
