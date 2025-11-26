(function() {
  const url = new URL(window.location.href);
  
  // Verifica se tem o parâmetro tl (tradução)
  if (url.searchParams.has('tl')) {
    // Remove o parâmetro
    url.searchParams.delete('tl');
    
    // Redireciona para a URL limpa
    window.location.replace(url.toString());
  }
})();