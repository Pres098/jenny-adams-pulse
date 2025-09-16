// Chat API integration with OpenRouter
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!OPENROUTER_API_KEY) {
      console.error('OpenRouter API key not configured');
      return new Response(JSON.stringify({ 
        message: 'I\'m having trouble connecting right now. Please contact our support team at support@jennytrading.com for immediate assistance.' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://jennytrading.com',
        'X-Title': 'Jenny Adams Trading'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          {
            role: 'system',
            content: `You are Jenny Adams' professional trading assistant for binary options trading. You help visitors with:

- Binary options trading strategies and education
- Information about Jenny's trading services and courses
- General trading questions and risk management
- Account and subscription inquiries

Key information about Jenny Adams Trading:
- 95%+ win rate on binary options signals
- 3,800+ successful students
- $2.5M+ in profits generated for traders
- Services: Live Signals ($97/month), Education ($197), VIP Community ($297/month)
- Specializes in EUR/USD, GBP/JPY, USD/CAD trading pairs
- Offers 24/5 support during market hours
- 30-day money-back guarantee

Keep responses:
- Professional yet friendly
- Focused on binary options trading
- Under 100 words typically
- Encouraging about trading success
- Clear about risks (trading involves risk of loss)

Never mention that you are an AI or assistant. You represent Jenny's trading support team.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      console.error('OpenRouter API error:', response.status, response.statusText);
      throw new Error('Failed to get response from OpenRouter');
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || 
      'Thanks for your question! For detailed assistance with trading strategies or account matters, please contact our support team at support@jennytrading.com.';

    return new Response(JSON.stringify({ message: assistantMessage }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      message: 'I\'m having trouble right now. Please reach out to our support team at support@jennytrading.com or try our live chat during market hours.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}