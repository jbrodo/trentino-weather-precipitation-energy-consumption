---
description: "Use when analyzing TopoJSON, archived daily CSV, timestamp joins or energy and precipitation aggregations."
applyTo: "*.json,*.geojson,*.csv"
---

# Dati

- Consulta [lo schema e le aggregazioni](../../wiki/Dati.md). Evita di modificare `final.json` direttamente per risolvere errori di rendering.
- Le medie di `avgcons` e `avgprec` sono semplici, non pesate per `NR_UBICAZIONI`; conserva questa semantica salvo requisito esplicito.
- Verifica `STRINGTOBIGDECIMAL` come `YYYYMMDDHHMM`, `id_cell` rispetto agli ID TopoJSON e i nomi invertiti delle coordinate prima di modificare ETL o marker.
- Non aggiungere CSV estratti a Git, non supporre unita' di misura o licenza dei dati.
