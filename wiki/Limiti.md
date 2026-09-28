# Limiti e verifiche

[Indice](Home.md) | [Funzionalita](Funzionalita.md) | [Dati](Dati.md)

- I CSV non sono tracciati da Git e devono essere estratti nella cartella `csv/`. La tabella e la mappa mostrano uno stato senza dati se il CSV del giorno manca; l'andamento lascia senza punto i giorni non caricabili.
- Orario o lineset senza dati vengono gestiti senza accedere a elementi vuoti. Lo slider del tempo include 1440, che diventa `0000`, non la mezzanotte del giorno successivo.
- I layer tematici sono ora contenuti in un gruppo Leaflet che viene pulito a ogni ridisegno. La modalità lineset singolo risponde al checkbox e ai filtri.
- L'andamento giornaliero calcola una media aritmetica per riga dei valori nel CSV: non è ponderata per ubicazioni, timestamp o lineset e può riflettere diversamente copertura e numerosità delle righe tra giorni. I filtri della mappa non si applicano ai grafici.
- I grafici orari usano la stessa media semplice per record raggruppata per ora. La mappa a picchi normalizza separatamente a ogni timestamp sul massimo visibile; l'altezza relativa non è un valore assoluto e non va confrontata tra orari.
- L'andamento mensile legge i 30 CSV in sequenza al primo accesso: nell'archivio estratto occupano circa 964 MiB complessivi. Il caricamento sequenziale limita la memoria di picco, ma il trasferimento completo richiede tempo e banda.
- Il valore di consumo influenza il colore del bordo, non il riempimento; la legenda di precipitazione e il layer switcher sono inattivi.
- La pagina non gestisce esplicitamente errori di caricamento CSV/JSON e dipende da risorse esterne HTTP, con possibili problemi di rete e mixed content.
- Gli errori di caricamento di `final.json` non hanno ancora uno stato esplicito nella pagina; le risorse remote e le tile dipendono dalla rete.
- Il popup attuale etichetta i valori come `mm` e `kWh`, ma le fonti e i metadati disponibili nel progetto non confermano queste unità; verificare la provenienza prima di trattarle come documentate. I nuovi grafici non aggiungono etichette di unità.
- Nessuna suite di test automatica e nessun contratto verificato su unita', provenienza e licenze dei dati. Evitare conclusioni scientifiche o dichiarazioni di open data senza metadati esterni.

Per verificare manualmente: estrarre i CSV, avviare il server come indicato in [Architettura](Architettura.md), aprire la console di rete, passare tra le tre viste, selezionare un orario presente, cambiare giorno e range, attivare la lineset singola e controllare popup, righe e grafici. I problemi elencati sono lo stato residuo del codice.