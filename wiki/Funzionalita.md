# Funzionalita della dashboard

[Indice](Home.md) | [Dati](Dati.md) | [Limiti](Limiti.md)

La pagina operativa e' [index.html](../index.html), con tre viste raggiungibili dal menu: mappa, dati per lineset e andamento giornaliero. Non esegue un'analisi causale o una correlazione statistica.

| Funzione | Comportamento osservato | Implementazione |
| --- | --- | --- |
| Mappa | Centro iniziale 46.2, 11, zoom 10; base OpenStreetMap. Alterna lineset e picchi per precipitazioni o consumo | `L.Map`, `L.TileLayer`, `drawSpikeMap` |
| Consumo | Unione delle celle della lineset in un poligono, bordo colorato sulla scala verde (-5), grigio (0), rosso (+5); legenda visibile | `drawLinesetPoligon`, `color`, controllo `legend` |
| Precipitazione | Cerchio azzurro per lineset, raggio scalato linearmente da 0 a 1000 m rispetto al massimo dell'istante | `drawPrecipitationCyrcle` |
| Dettaglio | Hover sul poligono: pannello compatto con identificativo, precipitazioni e consumo; popup sul poligono e sul cerchio con gli stessi dati e le stesse etichette italiane. Il clic resta disponibile come alternativa al passaggio del mouse | `onEachFeature`, `info.update`, `bindPopup` |
| Navigazione | Menu a schede per passare tra mappa, tabella e andamento; la selezione dei filtri resta in pagina. La mappa viene ridimensionata al ritorno | `.view-tab`, `switchView` |
| Tabella | Mostra le lineset del timestamp selezionato. Riutilizza gli intervalli esistenti, il filtro lineset singolo e una ricerca per codice; visualizza le medie aggregate senza aggiungere unità | `renderDataTable` |
| Andamento | Due grafici separati con media aritmetica dei valori presenti in ogni CSV giornaliero. Non applica i filtri della mappa; i giorni senza CSV o valori validi restano senza punti | `loadDailyTrend`, `drawDailyChart` |
| Fasce orarie | Due grafici D3 di barre orizzontali, uno per metrica, con medie semplici per riga raggruppate per ora nel giorno selezionato. La data è sincronizzata con lo slider della mappa | `aggregateHourlyTrend`, `drawHourlyChart` |
| Picchi | Marker SVG ai centroidi delle lineset; selezione di una metrica alla volta e applicazione di range e lineset attivi. La lunghezza è normalizzata sul massimo visibile nell'istante | `drawSpikeMap`, `L.divIcon` |
| Tempo | Slider ogni 10 minuti (0-1440), valore iniziale 10:00 | `#slider`, `slideValue` |
| Giorno | Slider 1-30 novembre 2013, valore iniziale 2 novembre | `#sliderday`, `readCsv` |
| Lineset | Checkbox per la modalita' singola e slider per un identificativo `DG...` | `#linesetcheck`, `#sliderlineset` |
| Filtri | Intervallo precipitazioni 0-16 per i cerchi e intervallo consumo -6..6 per i poligoni, anche in modalita' lineset singolo. La checkbox aggiorna subito la mappa | `#sliderprecipitation`, `#sliderconsume`, `#linesetcheck` |

Il cambio di giorno carica un CSV diverso; ora e filtri ridisegnano i layer dati dentro un gruppo Leaflet dedicato, rimosso prima di ogni aggiornamento. I CSV dell'andamento giornaliero sono caricati in sequenza al primo accesso; il profilo orario riusa il CSV già caricato per mappa/tabella. La seconda legenda delle precipitazioni e il selettore dei layer sono definiti ma non aggiunti alla mappa.