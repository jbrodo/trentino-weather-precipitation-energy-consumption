---
name: audit-dati
description: "Use when auditing November daily CSV archives, TopoJSON joins, coordinate order, coverage, energy consumption or precipitation aggregations."
---

# Audit dati

Usa questa procedura per analisi dati ripetibili prima di cambiare calcoli o documentazione.

1. Leggi [schema e formule](../../../wiki/Dati.md). Elenca i membri di `Data_Vis_Code_Files_CSV.tar.gz`; ispeziona in streaming intestazioni e campioni senza alterare i dati.
2. Per il giorno e la lineset richiesti, verifica chiave `STRINGTOBIGDECIMAL`, ID `id_cell` rispetto agli ID di `final.json`, coordinate e null/mancanti. Calcola somma ubicazioni e medie semplici come `aggrTime`.
3. Confronta i risultati con la vista per un istante disponibile; non dedurre unita', segno, causalita' o licenze dai valori numerici.
4. Comunica comandi riproducibili, copertura, anomalie e ipotesi da confermare. Aggiorna la wiki solo se l'evidenza lo richiede.