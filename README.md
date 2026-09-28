# Trentino: consumo energetico e precipitazioni

Dashboard statica per esplorare su mappa consumo energetico e precipitazioni nel Trentino, con dati di novembre 2013. L'interfaccia offre tre viste: mappa, dati aggregati per lineset e andamento giornaliero e orario.

## Avvio locale

La pagina non richiede build, installazione di pacchetti o backend applicativo. Dalla radice del repository, avvia il server Python 3 con il comando del tuo sistema operativo.

### Windows

```powershell
py -m http.server 8000
```

Se il comando `py` non è disponibile, usa `python -m http.server 8000`.

### Linux e macOS

```bash
python3 -m http.server 8000
```

Apri [http://localhost:8000/](http://localhost:8000/).

## Dati

`final.json` contiene le geometrie della mappa. I CSV giornalieri, non inclusi in Git, devono essere disponibili nella cartella `csv/` con nomi da `20131101.csv` a `20131130.csv`. Se hai l'archivio `Data_Vis_Code_Files_CSV.tar.gz`, estrailo in `csv/` prima di avviare la pagina.

Le viste Mappa e Dati caricano il CSV del giorno selezionato. La vista Andamento carica i CSV giornalieri in sequenza al primo accesso: l'archivio estratto occupa circa 964 MiB. Le dipendenze JavaScript, i fogli di stile e le tile cartografiche richiedono una connessione a Internet.

## Documentazione

- [Wiki del progetto](wiki/Home.md): funzionalità, dati e aggregazioni, architettura, limiti e verifiche.
- [Indice per assistenti](llms.txt).

Le unità di misura, la provenienza e la licenza dei dati non sono confermate dalla documentazione disponibile. Consulta [Limiti](wiki/Limiti.md) prima di interpretare o riutilizzare i valori.
