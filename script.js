document.getElementById("year").textContent = String(new Date().getFullYear());

const form = document.getElementById("inquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value?.trim();
    const pet  = document.getElementById("pet")?.value?.trim();
    const msg  = document.getElementById("msg")?.value?.trim();

    if (!name || !pet || !msg) {
      alert("必須項目を入力してください。");
      return;
    }
    alert("送信デモ：内容を受け付けました！\n（実運用ではLINE/フォームに置き換え）");
    form.reset();
  });
}
