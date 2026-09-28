# Funzionalita della dashboard

[Indice](Home.md) | [Dati](Dati.md) | [Limiti](Limiti.md)

La pagina operativa e' [index.html](../index.html). Visualizza su una mappa del Trentino la relazione spaziale tra consumo energetico medio e precipitazione media per lineset, in un istante selezionato. Non esegue un'analisi causale o una correlazione statistica.

| Funzione | Comportamento osservato | Implementazione |
| --- | --- | --- |
| Mappa | Centro iniziale 46.2, 11, zoom 10; base CartoDB Positron e overlay Stamen TonerLines | `L.Map`, `L.TileLayer` |
| Consumo | Unione delle celle della lineset in un poligono, bordo colorato sulla scala verde (-5), grigio (0), rosso (+5); legenda visibile | `drawLinesetPoligon`, `color`, controllo `legend` |
| Precipitazione | Cerchio azzurro per lineset, raggio scalato linearmente da 0 a 1000 m rispetto al massimo dell'istante | `drawPrecipitationCyrcle` |
| Dettaglio | Hover sul poligono: pannello compatto con identificativo, precipitazioni e consumo; popup sul poligono e sul cerchio con gli stessi dati e le stesse etichette italiane. Il clic resta disponibile come alternativa al passaggio del mouse | `onEachFeature`, `info.update`, `bindPopup` |
| Tempo | Slider ogni 10 minuti (0-1440), valore iniziale 10:00 | `#slider`, `slideValue` |
| Giorno | Slider 1-30 novembre 2013, valore iniziale 2 novembre | `#sliderday`, `readCsv` |
| Lineset | Checkbox per la modalita' singola e slider per un identificativo `DG...` | `#linesetcheck`, `#sliderlineset` |
| Filtri | Intervallo precipitazioni 0-16 per i cerchi, intervallo consumo -6..6 per i poligoni in modalita' multipla | `#sliderprecipitation`, `#sliderconsume` |

Gli slider effettuano una nuova richiesta di `final.json` e ridisegnano le geometrie; il giorno carica anche un CSV diverso. La checkbox da sola non ha un gestore di cambio: per osservare la modalita' singola occorre muovere uno slider. La seconda legenda delle precipitazioni e il selettore dei layer sono definiti ma non aggiunti alla mappa.