# Limiti e verifiche

[Indice](Home.md) | [Funzionalita](Funzionalita.md) | [Dati](Dati.md)

- I CSV sono solo nell'archivio: senza estrazione la chiamata `d3.csv(day + '.csv')` non produce i dati richiesti.
- Il codice accede direttamente a `filtered[0].values` e `ls[0]`: orario o lineset senza dati possono produrre errori. Lo slider del tempo include 1440, che diventa `0000`, non la mezzanotte del giorno successivo.
- Il ridisegno chiama `d3.selectAll('g').remove()`, ma i layer aggiunti alla mappa Leaflet non vengono rimossi esplicitamente: cambi di filtri e date possono sovrapporre dati vecchi.
- La selezione di una sola lineset disegna il poligono senza applicare il filtro sul consumo; il checkbox non forza da solo il ridisegno.
- Il valore di consumo influenza il colore del bordo, non il riempimento; la legenda di precipitazione e il layer switcher sono inattivi.
- La pagina non gestisce esplicitamente errori di caricamento CSV/JSON e dipende da risorse esterne HTTP, con possibili problemi di rete e mixed content.
- Nessuna suite di test automatica e nessun contratto verificato su unita', provenienza e licenze dei dati. Evitare conclusioni scientifiche o dichiarazioni di open data senza metadati esterni.

Per verificare manualmente: estrarre i CSV, avviare il server come indicato in [Architettura](Architettura.md), aprire la console di rete, selezionare un orario presente, cambiare giorno e range e controllare sia le richieste sia la rimozione dei layer vecchi. I problemi elencati sono lo stato del codice, non funzionalita' gia' corrette.