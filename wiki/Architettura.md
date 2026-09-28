# Architettura e avvio

[Indice](Home.md) | [Dati](Dati.md) | [Limiti](Limiti.md)

La dashboard e' un'applicazione statica: HTML, CSS e JavaScript inline in [index.html](../index.html); jQuery/jQuery UI per controlli e richieste, D3 v3 per CSV e aggregazioni, TopoJSON per le geometrie, Leaflet 0.7 per mappa e layer. Non esistono API, database, build frontend o backend applicativo. Il server Python serve soltanto file statici.

## Riproduzione locale

Da root del repository, estrarre i CSV nella cartella `csv/`:

```sh
mkdir csv
tar -xf Data_Vis_Code_Files_CSV.tar.gz -C csv
python -m http.server 8000
```

Aprire `http://localhost:8000/`. Verificare che `http://localhost:8000/csv/20131102.csv` e `http://localhost:8000/final.json` restituiscano dati. I CSV estratti restano ignorati da Git. L'archivio `Data_Vis_Code_Files-ready.zip` non sostituisce quello dei CSV giornalieri.

La pagina usa dipendenze remote e URL HTTP per script, CSS e tile: browser moderni su HTTPS possono bloccare il contenuto misto; l'accesso alle CDN e alla mappa di base richiede rete. Il progetto include alcune copie locali delle librerie, ma non tutte sono attivate nella pagina. Leaflet JS e' caricato dalla copia locale `leaflet.js` (0.7.3) perche' `cdn.leafletjs.com` non risolve piu' (osservato: `ERR_NAME_NOT_RESOLVED`); il CSS arriva da unpkg alla stessa versione. Non introdurre un servizio backend senza una richiesta di funzionalita' che lo giustifichi.