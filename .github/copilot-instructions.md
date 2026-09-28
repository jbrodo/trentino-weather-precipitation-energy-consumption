# Contesto del progetto

- Leggi [la wiki](../wiki/Home.md) e [i limiti](../wiki/Limiti.md) prima di modificare la dashboard. Il punto d'ingresso e' `index.html`, non le pagine numerate.
- App statica con D3 v3, jQuery UI, TopoJSON e Leaflet 0.7; nessun backend applicativo, gestore di pacchetti o suite di test gia' configurati. Preserva le API delle librerie legacy se non richiesto un aggiornamento.
- `final.json` contiene le geometrie; i CSV `YYYYMMDD.csv` si estraggono da `Data_Vis_Code_Files_CSV.tar.gz` e sono ignorati da Git. Non aggiungere output estratti o riscrivere archivi e dataset senza richiesta esplicita.
- Per cambi ai dati, verifica schema, timestamp, identificativi delle celle, ordine delle coordinate e semantica delle medie prima di alterare la visualizzazione.
- Per il frontend, verifica un orario con dati, giorno, range, hover e assenza di layer residui. Servi la pagina via HTTP; verifica console e rete, annotando blocchi delle dipendenze remote.
- Aggiorna la pagina wiki pertinente e `llms.txt` quando cambia la navigazione; separa comportamenti osservati, ipotesi e proposte. Non dedurre unita', licenze o provenienza non documentate.