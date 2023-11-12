window.addEventListener('DOMContentLoaded', () => {
  const ipv4Span = document.getElementById('ipv4');
  const ipv6Span = document.getElementById('ipv6');

  const ipv4 = fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log("IPv4 : " + data.ip)
      ipv4Span.textContent = data.ip;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de l\'adresse IPv4 :', error);
      ipv4Span.textContent = 'Erreur lors de la récupération';
    });

  const ipv6 = fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log("IPv6 : " + data.ip)
      ipv6Span.textContent = data.ip;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de l\'adresse IPv6 :', error);
      ipv6Span.textContent = 'Erreur lors de la récupération';
    });
});
