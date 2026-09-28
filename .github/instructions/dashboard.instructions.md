---
description: "Use when editing the Leaflet D3 dashboard UI, filters, layers or legacy HTML entry point."
applyTo: "index.html"
---

# Dashboard

- Mantieni le modifiche nell'entry point `index.html` se la richiesta non riguarda gli esempi storici.
- D3 e' v3, Leaflet e' 0.7: controlla le API effettivamente disponibili prima di introdurre codice nuovo.
- Ogni aggiornamento di giorno, ora o filtro deve considerare i layer Leaflet gia' aggiunti; `d3.selectAll('g').remove()` non e' una cancellazione affidabile dei layer.
- Testa sia la vista multi-lineset sia la modalita' checkbox, hover e popup; vedi [funzionalita](../../wiki/Funzionalita.md) e [limiti](../../wiki/Limiti.md).