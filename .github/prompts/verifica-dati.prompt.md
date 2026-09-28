---
description: "Verifica un giorno o una lineset contro CSV archiviati e geometrie TopoJSON."
agent: "agent"
argument-hint: "Giorno YYYYMMDD e/o lineset DG..."
---

Verifica il giorno o la lineset richiesti seguendo [Dati](../../wiki/Dati.md). Leggi il CSV nell'archivio senza sovrascriverlo; controlla colonne, timestamp, ID di cella presenti nel TopoJSON e aggregazioni per lineset. Riporta conteggi e comandi riproducibili, distingui dati mancanti da zeri e segnala le unita' non note. Non modificare i dataset salvo richiesta esplicita.
