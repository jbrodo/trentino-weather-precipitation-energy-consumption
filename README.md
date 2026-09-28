# trentino-weather-precipitation-energy-consumption
I made a simple data visualization page in D3.js on the map of the trentino

Documentation: [project wiki](wiki/Home.md) (features, data, architecture and known limits), with an [LLM index](llms.txt).

For Copilot, `.github/copilot-instructions.md` provides project context. Select the frontend, backend/integration or data analyst agent in VS Code; reusable prompts and validation skills live in `.github/prompts/` and `.github/skills/`. This is currently a static application, not an API service. Extract the daily CSV files from `Data_Vis_Code_Files_CSV.tar.gz` into the repository root before opening the dashboard; the extracted files are ignored by Git.

## Run with python 2.7.x
```
 python -m SimpleHTTPServer 8000
```

## Run with python 3.x
```
 python -m http.server 8000
```

Open the browser at http://localhost:8000/ .
