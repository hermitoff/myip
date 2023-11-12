window.addEventListener('DOMContentLoaded', () => {
  const ipv4Span = document.getElementById('ipv4');
  const ipv6Span = document.getElementById('ipv6');

  const ipv4Promise = fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log("IPv4 : " + data.ip)
      ipv4Span.textContent = data.ip;
      return data.ip;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de l\'adresse IPv4 :', error);
      ipv4Span.textContent = 'Erreur lors de la récupération';
    });

  const ipv6Promise = fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log("IPv6 : " + data.ip)
      ipv6Span.textContent = data.ip;
      return data.ip;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de l\'adresse IPv6 :', error);
      ipv6Span.textContent = 'Erreur lors de la récupération';
    });

  Promise.all([ipv4Promise, ipv6Promise])
    .then(([ipv4, ipv6]) => {
      if (ipv4 === ipv6) {
        // Les adresses IPv4 et IPv6 sont égales, affiche une erreur
        console.error("Impossible d'obtenir l'IPv6 :", ipv4);
        
        // Vérifie si l'élément 'erreur' existe avant de définir son contenu
        const erreurSpan = document.getElementById('ipv6');
        if (erreurSpan) {
          erreurSpan.textContent = "Impossible d'obtenir l'IPv6.";
        }
      }
    })
    .catch(error => {
      console.error('Erreur lors de la comparaison des adresses IPv4 et IPv6 :', error);
    });
});
