"use server";


function sendMessage(formData: FormData) {
  const message = formData.get("message")?.toString();
  console.log("Message sent:", message);
}

export { sendMessage };
