---
name: verifica-dashboard
description: "Use when validating or debugging the Leaflet D3 dashboard in a browser after changes to map, time slider, filters, hover or layer rendering."
---

# Verifica dashboard

Usa questa procedura dopo modifiche a interazioni o visualizzazione in `index.html`.

1. Leggi [avvio](../../../wiki/Architettura.md) e [limiti noti](../../../wiki/Limiti.md). Estrai i CSV dall'archivio solo se necessari; sono ignorati da Git.
2. Avvia `python -m http.server 8000` (o porta libera) nella root. Controlla richieste di `20131102.csv` e `final.json`, console e caricamento delle librerie remote.
3. Verifica istante iniziale, un altro orario presente, giorno diverso, range, modalita' singola e multipla, hover e popup. Controlla sovrapposizioni dopo cambi ripetuti.
4. Riporta cosa e' stato verificato, cosa non e' stato possibile verificare e le regressioni rispetto ai limiti documentati. Arresta il server se e' stato avviato solo per il test.