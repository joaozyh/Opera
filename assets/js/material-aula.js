(() => {
  const copyButtons = document.querySelectorAll(".copy-button");

  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      // Fall through to the textarea fallback for browsers that expose
      // clipboard.writeText but block it outside user-trusted contexts.
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return Boolean(document.execCommand("copy"));
    } catch (error) {
      return false;
    } finally {
      textarea.remove();
    }
  };

  copyButtons.forEach((button) => {
    const promptBox = button.closest(".prompt-box");
    const promptLabel = promptBox ? promptBox.querySelector(".prompt-header span, .prompt-title h3") : null;
    const defaultText = button.textContent.trim() || "Copiar";

    button.dataset.defaultText = defaultText;
    button.setAttribute("aria-live", "polite");

    if (promptLabel && promptLabel.textContent.trim()) {
      button.setAttribute("aria-label", `Copiar ${promptLabel.textContent.trim()}`);
    }

    button.addEventListener("click", async () => {
      const promptBox = button.closest(".prompt-box");
      const promptCode = promptBox ? promptBox.querySelector(".prompt-code") : null;

      if (!promptCode) {
        return;
      }

      window.clearTimeout(Number(button.dataset.resetTimer || 0));

      const copied = await copyText(promptCode.textContent.trim());

      button.textContent = copied ? "Copiado" : "Erro";
      button.classList.toggle("is-copied", copied);
      button.classList.toggle("is-error", !copied);

      const resetTimer = window.setTimeout(() => {
        button.textContent = button.dataset.defaultText || defaultText;
        button.classList.remove("is-copied");
        button.classList.remove("is-error");
      }, 1600);

      button.dataset.resetTimer = String(resetTimer);
    });
  });
})();
