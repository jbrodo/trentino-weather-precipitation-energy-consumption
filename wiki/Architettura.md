# Architettura e avvio

[Indice](Home.md) | [Dati](Dati.md) | [Limiti](Limiti.md)

La dashboard e' un'applicazione statica: HTML, CSS e JavaScript inline in [index.html](../index.html); jQuery 3.7.1 e jQuery UI 1.14.2 per controlli e richieste, D3 7.9.0 per CSV, aggregazioni e grafici, TopoJSON Client 3.1.0 per le geometrie, Leaflet 1.9.4 per mappa e layer. Le dipendenze sono versionate negli URL CDN; non esistono API, database, build frontend o backend applicativo. Il server Python serve soltanto file statici.

## Riproduzione locale

Da root del repository, estrarre i CSV nella cartella `csv/`:

```sh
mkdir csv
tar -xf Data_Vis_Code_Files_CSV.tar.gz -C csv
python -m http.server 8000
```

Aprire `http://localhost:8000/`. Verificare che `http://localhost:8000/csv/20131102.csv` e `http://localhost:8000/final.json` restituiscano dati. I CSV estratti restano ignorati da Git. L'archivio `Data_Vis_Code_Files-ready.zip` non sostituisce quello dei CSV giornalieri.

Gli script e i fogli di stile attivi sono caricati da CDN HTTPS; l'accesso alle CDN e alle tile OpenStreetMap richiede rete. Le copie locali legacy non sono referenziate dall'entry point principale. Non introdurre un servizio backend senza una richiesta di funzionalita' che lo giustifichi.