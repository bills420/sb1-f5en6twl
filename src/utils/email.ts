// Email utility functions
export const sendEmail = async (data: any) => {
  try {
    const response = await fetch('https://api.billsco.co.nz/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@billsco.co.nz',
        subject: data.subject,
        content: data.content
      })
    });
    return response.ok;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
};