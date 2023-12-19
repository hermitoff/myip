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
      console.error('Error while retrieving IPv4:', error);
      ipv4Span.textContent = 'Error during retrieval';
    });

  const ipv6Promise = fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log("IPv6 : " + data.ip)
      ipv6Span.textContent = data.ip;
      return data.ip;
    })
    .catch(error => {
      console.error('Error while retrieving IPv6:', error);
      ipv6Span.textContent = 'Error during retrieval';
    });

  Promise.all([ipv4Promise, ipv6Promise])
    .then(([ipv4, ipv6]) => {
      if (ipv4 === ipv6) {
        // Les adresses IPv4 et IPv6 sont égales, affiche une erreur
        console.error("Error while retrieving IPv6:", ipv4);
        
        // Vérifie si l'élément 'erreur' existe avant de définir son contenu
        const erreurSpan = document.getElementById('ipv6');
        if (erreurSpan) {
          erreurSpan.textContent = "Impossible to get IPv6";
        }
      }
    })
    .catch(error => {
      console.error('Error comparing IPv4 and IPv6 addresses:', error);
    });
});
