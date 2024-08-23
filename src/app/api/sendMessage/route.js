import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const { message } = await request.json();

    const result = await axios.post('https://slack.com/api/chat.postMessage', {
      channel: '#general', 
      text: message,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.SLACK_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (result.data.ok) {
      return NextResponse.json({ status: 'success' });
    } else {
      return NextResponse.json({ error: result.data.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
