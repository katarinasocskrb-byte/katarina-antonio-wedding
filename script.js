const openButton = document.querySelector('#openInvitation');
const openingScreen = document.querySelector('#openingScreen');
const invitationCard = document.querySelector('#invitationCard');

openButton.addEventListener('click', () => {
  openingScreen.classList.add('is-hidden');

  window.setTimeout(() => {
    openingScreen.hidden = true;
    invitationCard.hidden = false;
    invitationCard.focus?.();
  }, 520);
});
