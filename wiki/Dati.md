# Dati e aggregazioni

[Indice](Home.md) | [Funzionalita](Funzionalita.md) | [Architettura](Architettura.md)

## Ingressi

- `final.json`: TopoJSON con `objects.trentinogrid.geometries` (6.574 geometrie al controllo), ID delle celle e archi necessari a `topojson.merge`.
- `Data_Vis_Code_Files_CSV.tar.gz`: contiene `20131101.csv` fino a `20131130.csv`. I CSV non sono tracciati (`*.csv` in `.gitignore`); il browser li richiede nella root come `YYYYMMDD.csv`.
- Colonne verificate nel campione del 2 novembre: `mid_lat`, `mid_long`, `id_cell`, `LINESET`, `NR_UBICAZIONI`, `STRINGTOBIGDECIMAL`, `avgprec`, `avgcons`.

## Trasformazione usata dalla pagina

1. `readCsv` legge il file del giorno con `d3.csv` (D3 v3), raggruppa per `STRINGTOBIGDECIMAL` (timestamp `YYYYMMDDHHMM`) e poi per `LINESET`.
2. `aggrTime` somma `NR_UBICAZIONI`, calcola la media aritmetica semplice di `avgcons` e `avgprec`, calcola le medie delle coordinate e raccoglie gli `id_cell` distinti. La somma `ubicazioni` non e' visualizzata; le medie non sono ponderate per ubicazioni.
3. `drawOnlyALineset` seleziona la chiave `giorno + HHMM`. `drawLinesetPoligon` confronta gli `id_cell` con gli ID delle geometrie, fonde le celle e rappresenta `avgcons`; `drawPrecipitationCyrcle` usa il centro aggregato e `avgprec`.

Nel campione, `mid_lat` vale circa 11 e `mid_long` circa 46: i nomi delle colonne sembrano invertiti rispetto alle coordinate geografiche. Il codice imposta `x = mean(mid_long)` e `y = mean(mid_lat)`, poi costruisce `L.LatLng(x, y)`. Conservare questo ordine fino a verifica della provenienza dei dati.

Non sono presenti metadati affidabili sulle unita' di misura, sul produttore, sulla qualita' dei dati, sulla licenza o sul significato del segno di `avgcons`. Le scale degli slider non bastano a determinarli: non inferire kWh o mm.